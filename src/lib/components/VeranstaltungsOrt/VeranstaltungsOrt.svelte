<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  export let veranstaltungsort;
  if (browser && veranstaltungsort?.koordinaten) {
    onMount(() => {
      (async () => {
        const { koordinaten } = veranstaltungsort;
        const { latitude: lat, longitude: long } = koordinaten;

        const L = await import('leaflet');
        const mymap = L.map('mapid').setView([lat, long], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
          maxZoom: 12
        }).addTo(mymap);
        L.marker([lat, long]).addTo(mymap);
      })();
    });
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
</svelte:head>

{#if veranstaltungsort?.koordinaten}
  <div id="mapid" style="height: 400px; width: 100%;" />
{/if}
