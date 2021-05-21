<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/seminare.json');

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
</script>

<script lang="ts">
	import SeminarDeck from '$lib/SeminarDeck/SeminarDeck.svelte';
	export let seminare: [];
</script>

<svelte:head>
	<title>Seminare</title>
</svelte:head>

<SeminarDeck {seminare} />
