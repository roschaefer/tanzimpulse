<script context="module" lang="ts">
	import { loadSeminar } from '$lib/routes';
	export const load = loadSeminar;
	export const prerender = true;
</script>

<script lang="ts">
	import SeminarAnmeldung from '$lib/components/SeminarAnmeldung/SeminarAnmeldung.svelte';
	export let seminar: {};
</script>

<svelte:head>
	<title>{seminar.titel}</title>
</svelte:head>

<SeminarAnmeldung {seminar} />
