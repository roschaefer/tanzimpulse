import type { Load } from '@sveltejs/kit';
import { addTransientSelected } from '$lib/helpers';

export const loadSeminare =
	(seminarFormat: string): Load =>
	async ({ page, fetch }) => {
		const res = await fetch(`/${seminarFormat}.json`);
		if (res.ok) {
			const {
				data: { seminare }
			} = await res.json();
			const selectedKategorieIds = page.query.getAll('kategorie');
			seminare.forEach((s: Seminar) => {
				s.kategorien = s.kategorien.map(addTransientSelected(selectedKategorieIds));
			});

			return {
				props: { seminare }
			};
		}

		const {
			errors: [error]
		} = await res.json();

		return {
			status: res.status,
			error: new Error(error.message)
		};
	};

export const loadSeminar: Load = async ({ page, fetch }) => {
	const { seminarFormat, url } = page.params;
	const res = await fetch(`/${seminarFormat}/${url}.json`);

	if (res.ok) {
		const {
			data: { seminar }
		} = await res.json();
		if (!seminar) return { status: 404, error: new Error('Seminar nicht gefunden') };

		return {
			props: { seminar }
		};
	}

	const {
		errors: [error]
	} = await res.json();

	return {
		status: res.status,
		error: new Error(error.message)
	};
};
