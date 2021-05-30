<script context="module" lang="ts">
  import { loadSeminare } from '$lib/routes';

  export const load: Load = loadSeminare('ausbildung');
  export const prerender = true;
</script>

<script lang="ts">
  import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
  export let seminare = [];
</script>

<svelte:head>
  <title>Ausbildungen</title>
</svelte:head>
<SeminarDashboard {seminare} />
