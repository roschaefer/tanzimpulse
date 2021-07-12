import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { NEUIGKEITEN } from '$lib/graphql/queries';

// GET /:seminarFormat.json
export const get: RequestHandler = async () => {
  return api(NEUIGKEITEN);
};
