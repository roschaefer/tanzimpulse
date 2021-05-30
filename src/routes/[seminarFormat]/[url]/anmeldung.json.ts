import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import type { ServerRequest } from '@sveltejs/kit/types/endpoint';
import { UPSERT_TEILNEHMER, PUBLISH_TEILNEHMER } from '$lib/graphql/mutations';
import { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } from '$lib/env';
import { dev } from '$app/env';
import nodemailer from 'nodemailer';
import { overbooked } from '$lib/helpers';
import { waitingListMessage, registrationMessage } from '$lib/mail';

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: !dev
  }
});

const sendConfirmation = async (teilnehmer: Teilnehmer) => {
  const {
    seminare: [seminar]
  } = teilnehmer;
  const message = overbooked(seminar) ? waitingListMessage : registrationMessage;
  return transporter.sendMail(message(teilnehmer, seminar));
};

const requestVariables = (request: ServerRequest<any, any>) => {
  const toBool = (cb: string) => !!{ on: true }[cb];
  return {
    email: request.body.get('email'),
    name: request.body.get('name'),
    adresse: request.body.get('adresse'),
    datenverarbeitung: toBool(request.body.get('datenverarbeitung')),
    newsletter: toBool(request.body.get('newsletter'))
  };
};

// POST /:seminarFormat/:url/anmeldung.json
export const post: RequestHandler<any, FormData> = async (request) => {
  const { seminarFormat, url } = request.params;
  const res = await api(UPSERT_TEILNEHMER, { ...requestVariables(request), url });
  await api(PUBLISH_TEILNEHMER, requestVariables(request));
  if (res.ok) {
    await sendConfirmation(res.body.data.teilnehmer);
  }

  if (request.headers.accept === 'application/json') return res;

  const location = `/${seminarFormat}/${url}/anmeldung/${res.status}`;
  return { status: 303, headers: { location } };
};
