<script context="module" lang="ts">
	import { loadSeminare } from '$lib/routes';

	export const load: Load = loadSeminare('ausbildung');
</script>

<script lang="ts">
	import SeminarDeck from '$lib/components/SeminarDeck/SeminarDeck.svelte';
	export let seminare: [];
</script>

<svelte:head>
	<title>Seminare</title>
</svelte:head>

<SeminarDeck {seminare} />
