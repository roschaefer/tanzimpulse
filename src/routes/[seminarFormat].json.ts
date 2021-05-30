import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { SEMINARE } from '$lib/graphql/queries';

// GET /:seminarFormat.json
export const get: RequestHandler = async (request) => {
  const { seminarFormat } = request.params;
  return api(SEMINARE, { seminarFormat });
};
