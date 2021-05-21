<script context="module" lang="ts">
	import { load as loadSeminar } from '../index.svelte';
	export const load = loadSeminar;
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

<SeminarAnmeldung anmeldung={true} {seminar} />
