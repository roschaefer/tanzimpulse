<script lang="ts">
  import Map from '$lib/components/Map/Map.svelte';
  export let veranstaltungsort: Veranstaltungsort;
  const mapAttributes = {
    class: 'mt-4',
    style: 'width: 100%; height: 40vh; min-height:300px;'
  };
  let coordinates;

  if (veranstaltungsort.koordinaten) {
    coordinates = [veranstaltungsort.koordinaten.latitude, veranstaltungsort.koordinaten.longitude];
  }
</script>

<p class="pb-4">
  <span class="uppercase tracking-wider text-xs title-font font-medium text-gray-600">Veranstaltungsort</span><br>{veranstaltungsort.adresse}
</p>

{#if coordinates}
  <Map {mapAttributes} {coordinates} />
{/if}
