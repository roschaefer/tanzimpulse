<script context="module" lang="ts">
	import { loadSeminare } from '$lib/routes';

	export const load: Load = loadSeminare('workshop');
</script>

<script lang="ts">
	import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
	export let seminare = [];
	export let selectedKategorieIds = [];
</script>

<svelte:head>
	<title>Workshops</title>
</svelte:head>

<SeminarDashboard {seminare} {selectedKategorieIds} />
