<script context="module" lang="ts">
	import { loadSeminare } from '$lib/routes';

	export const load: Load = loadSeminare('ausbildung');
</script>

<script lang="ts">
	import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
	export let seminare = [];
	export let selectedKategorieIds = [];
</script>

<svelte:head>
	<title>Ausbildungen</title>
</svelte:head>
<SeminarDashboard {seminare} {selectedKategorieIds} />
