import type { Load } from '@sveltejs/kit';
export const loadSeminare =
	(seminarFormat: string): Load =>
	async ({ page, fetch }) => {
		const selectedKategorieIds = page.query.getAll('kategorie');
		const res = await fetch(`/${seminarFormat}.json`);

		if (res.ok) {
			const {
				data: { seminare }
			} = await res.json();

			return {
				props: { seminare, selectedKategorieIds }
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
