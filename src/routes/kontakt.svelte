<script>
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import { onMount } from 'svelte';
  let map;
  onMount(() => {
    loadMap();
    return () => {
      map.remove();
    };
  });

  async function loadMap() {
    await import('leaflet');
    const myIcon = L.icon({
      iconUrl: '../images/mapmarker.png',
      iconSize: [40, 50],
      iconAnchor: [20, 50]
    });
    const map = L.map('map').setView([50.96745443190281, 7.049317359924316], 13);
    L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ', {
      attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
      maxZoom: 19
    }).addTo(map);
    L.marker([50.96745443190281, 7.049317359924316], { icon: myIcon }).addTo(map);
  }
</script>

<svelte:head>
  <title>Kontakt und Anfahrt</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
</svelte:head>

<section>
  <div class="container">
    <div class="grid grid-cols-1 gap-10">
      <div class="___leafleat w-full h-2/3">
        <div id="map" class="shadow-ti" style="width: 100%; height: 38vh; min-height:300px;" />
      </div>

      <div class="flex flex-col md:flex-row gap-10">
        <div class="w-full md:w-2/4 lg:w-1/3 p-4 sm:p-6 md:p-8 lg:p-10 bg-ti_green_mat text-white shadow-ti">
          <h2 class="uppercase text-3xl tracking-wider font-bold text-white mb-4">Anschrift</h2>
          <h2 class="uppercase text-3xl tracking-wider font-extralight text-white">Büro</h2>
          <p class="py-2">
            Folwiese 20<br />
            51069 Köln
          </p>
          <p class="py-2 mb-6">
            Telefon: 0221 - 68 36 91
            <br />
            Fax: 0221 - 68 97 797
            <br />
            E-Mail: <a class="font-bold pt-2 uppercase text-xs tracking-widest hover:text-black ease-in-out transition-all duration-300" href="mailto:info@tanzimpulse-koeln.de">info@tanzimpulse-koeln.de</a>
          </p>
          <h2 class="uppercase text-3xl tracking-wider font-extralight text-white">Tanzraum</h2>
          <p class="py-2">
            Schweinheimer Straße 54<br />
            51067 Köln<br />
          </p>
        </div>

        <div class="w-full md:w-2/4 lg:w-2/3">
          <DefaultCard>
            <h2 class="uppercase text-3xl tracking-wider font-bold text-ti_blue_accent mb-4">Anfahrt</h2>
            <h2 class="uppercase text-3xl tracking-wider font-extralight text-ti_blue_mat">Mit dem Auto</h2>
            <p class="py-2">
              A 3, Ausfahrt Bergisch Gladbach/Köln-Holweide/ Köln-Dellbrück<br />
              A 4, Ausfahrt Köln-Merheim, Richtung Köln-Holweide
            </p>
            <p class="py-2 mb-6">
              Direkt vor dem Tanzraum befinden sich 3 bis 4 hauseigene Stellplätze. <br />
              Weitere Parkmöglichkeiten finden Sie in den angrenzenden Straßen: Kochwiesenstraße, Burgwiesenstraße oder Ferdinand-Stücker-Straße.
            </p>
            <h2 class="uppercase text-3xl tracking-wider font-extralight text-ti_blue_mat">Mit den öffentlichen Verkehrsmitteln</h2>
            <p class="py-2">
              Linie 18 ab Köln Hbf<br />
              Linie 3 ab Bahnhof Deutz/Messe<br />
              bis Haltestelle Maria-Himmelfahrt-Straße in Köln-Holweide
            </p>
            <p class="py-2">Von dort ca. 5 Min. bis zur Schweinheimer Straße 54, 51067 Köln-Holweide</p>
          </DefaultCard>
        </div>
      </div>
    </div>
  </div>
</section>
