import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { INDEX } from '$lib/graphql/queries';

// GET /:seminarFormat.json
export const get: RequestHandler = async () => {
  const limit = 3;
  const today = new Date().toISOString();
  return api(INDEX, { today, limit });
};
