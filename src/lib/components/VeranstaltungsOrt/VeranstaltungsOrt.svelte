<script lang="ts">
  import Map from '$lib/components/Map/Map.svelte';
  export let veranstaltungsort: Veranstaltungsort;
  export let showMap = false;
  const mapAttributes = {
    class: 'mt-4',
    style: 'width: 100%; height: 40vh; min-height:300px;'
  };
</script>

{#if veranstaltungsort}
  <p class="pb-4">
    <span class="uppercase tracking-widest text-xs title-font font-medium text-gray-600">Veranstaltungsort</span><br />{veranstaltungsort.adresse}
  </p>

  {#if showMap}
    <Map {mapAttributes} coordinates={[veranstaltungsort.koordinaten.latitude, veranstaltungsort.koordinaten.longitude]} />
  {/if}
{:else}
  <p class="pb-4">
    <span class="uppercase tracking-widest text-xs title-font font-medium text-gray-600">Veranstaltungsort</span><br />Videoveranstaltung
  </p>
{/if}
