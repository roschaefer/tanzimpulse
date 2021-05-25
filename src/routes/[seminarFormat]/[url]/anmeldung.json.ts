import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { ANMELDUNG } from '$lib/graphql/mutations';
import { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } from '$lib/env';
import { dev } from '$app/env';
import nodemailer from 'nodemailer';

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

const message = ({ email, name }: { email: string; name: string }) => ({
	from: 'info@tanzimpulse.de',
	to: email,
	subject: 'Anmeldung erfolgreich',
	text: `Hallo ${name} deine Anmeldung war erfolgreich.`,
	html: `<p>Hallo ${name} deine Anmeldung war erfolgreich.</p>`
});

const sendConfirmation = async ({ email, name }) => {
	await transporter.sendMail(message({ email, name }));
};

// POST /:seminarFormat/:url/anmeldung.json
export const post: RequestHandler<any, FormData> = async (request) => {
	const { seminarFormat, url } = request.params;
	const email = request.body.get('email');
	const name = request.body.get('name');
	const adresse = request.body.get('adresse');
	const res = await api(ANMELDUNG, { url, name, email, adresse });
	if (res.ok) await sendConfirmation({ email, name });

	if (request.headers.accept === 'application/json') return res;

	const location = `/${seminarFormat}/${url}/anmeldung/${res.status}`
	return { status: 303, headers: { location } };
};
