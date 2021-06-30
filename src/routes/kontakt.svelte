<script context="module" lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>


<script>
  import * as L from 'leaflet';
  // If you're playing with this in the Svelte REPL, import the CSS using the
  // syntax in svelte:head instead. For normal development, this is better.
  import 'leaflet/dist/leaflet.css';
  let map;

  function createMap(container) {
    let m = L.map(container).setView([51.505, -0.09], 13);
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
          &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
        subdomains: 'abcd',
        maxZoom: 14,
      }
    ).addTo(m);

    return m;
  }

  function mapAction(container) {
    map = createMap(container);
    return {
      destroy: () => {
        map.remove();
      },
    };
  }
</script>



<svelte:head>
  <title>Kontakt und Anfahrt</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
</svelte:head>


<section>
  <div class="container">
    <div class="grid grid-cols-1 gap-10">

      <div class="___leafleat w-full h-2/3 border-2">
       <div style="height:400px;width:100%" use:mapAction />
      </div>
  

    <DefaultCard>
      <h2 class="text-2xl uppercase font-extrabold text-ti_blue_accent tracking-wide text-center mb-4">Anfahrt</h2>

    </DefaultCard>




</div>


  </div>
</section>


