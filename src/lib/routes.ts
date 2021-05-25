import type { Load } from '@sveltejs/kit';
export const loadSeminare =
	(seminarFormat: string): Load =>
	async ({ fetch }) => {
		const res = await fetch(`/${seminarFormat}.json`);

		if (res.ok) {
			const {
				data: { seminare }
			} = await res.json();

			return {
				props: { seminare }
			};
		}

		const { message } = await res.json();

		return {
			status: res.status,
			error: new Error(message)
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

	const { message } = await res.json();

	return {
		status: res.status,
		error: new Error(message)
	};
};
