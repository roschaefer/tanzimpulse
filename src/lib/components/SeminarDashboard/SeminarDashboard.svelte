<script lang="ts">
  import SeminarDeck from '$lib/components/SeminarDeck/SeminarDeck.svelte';
  import KategorienFilter from '$lib/components/KategorienFilter/KategorienFilter.svelte';
  import { onlyUnique } from '$lib/helpers';

  export let seminare: [];
  let kategorien = seminare
    .map((s) => s.kategorien)
    .flat()
    .filter(onlyUnique);
  $: gefilterteSeminare = seminare.filter((s) => {
    const seminarKategorieIds = s.kategorien.map((k) => k.id);
    const kategorieIds = kategorien.filter((k) => k.selected).map((k) => k.id);
    return seminarKategorieIds.some((id) => kategorieIds.includes(id));
  });
</script>

<KategorienFilter bind:kategorien />
<SeminarDeck seminare={gefilterteSeminare} />
