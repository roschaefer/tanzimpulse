<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page, fetch }) => {
		const res = await fetch(`/seminare/${page.params.url}.json`);

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
</script>

<script lang="ts">
	import SeminarAnmeldung from '$lib/SeminarAnmeldung/SeminarAnmeldung.svelte';
	export let seminar: {};
	const action = `/seminare/${seminar.url}/anmeldung.json`;
	async function success(seminar) {
		console.log(seminar);
	}
</script>

<svelte:head>
	<title>{seminar.titel}</title>
</svelte:head>

<SeminarAnmeldung {seminar} />
