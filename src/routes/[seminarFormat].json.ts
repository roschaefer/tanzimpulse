import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { SEMINARE } from '$lib/graphql/queries';

// GET /:seminarFormat.json
export const get: RequestHandler = async (request) => {
  const { seminarFormat } = request.params;
  const today = new Date().toISOString();
  const limit =  Number.parseInt(request.query.get('limit'));
  return api(SEMINARE, { seminarFormat, limit, today });
};
