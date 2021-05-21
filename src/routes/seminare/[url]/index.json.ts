import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { SEMINAR } from '$lib/graphql/queries';

// GET /seminare/:id.json
export const get: RequestHandler = async (request) => {
	return api(SEMINAR, { url: request.params.url });
};
