<script lang="ts">
  import SeminarDeck from '$lib/components/SeminarDeck/SeminarDeck.svelte';
  import Kategorien from './Kategorien.svelte';
  import VolltextSuche from './VolltextSuche.svelte';
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

<div class="flex flex-col lg:flex-row w-full gap-10 items-start">
  <div class="___red_card w-full lg:w-1/2 bg-ti_red_mat p-4 md:p-6 lg:p-8 bg-white text-black shadow-ti">
    <Kategorien bind:kategorien />
    <VolltextSuche />
  </div>
</div>

<SeminarDeck seminare={gefilterteSeminare} />
