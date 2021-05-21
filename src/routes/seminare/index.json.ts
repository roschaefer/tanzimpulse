import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { SEMINARE } from '$lib/graphql/queries';

// GET /seminare.json
export const get: RequestHandler = async () => {
	return api(SEMINARE);
};
