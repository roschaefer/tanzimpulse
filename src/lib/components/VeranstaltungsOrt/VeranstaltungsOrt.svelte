<script>
  import Map from '$lib/components/Map/Map.svelte';
  export let veranstaltungsort;
  const mapAttributes = {
    class: 'mt-4',
    style: 'width: 100%; height: 38vh; min-height:300px;'
  };
  let coordinates;

  if (veranstaltungsort.koordinaten) {
    coordinates = [veranstaltungsort.koordinaten.latitude, veranstaltungsort.koordinaten.longitude];
  }
</script>

{#if coordinates}
  <Map {mapAttributes} {coordinates} />
{/if}
