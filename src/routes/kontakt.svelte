<script>
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Map from '$lib/components/Map/Map.svelte';
  const mapAttributes = {
    class: 'shadow-ti',
    style: 'width: 100%; height: 40vh; min-height:300px;'
  };
  export const prerender = true;
</script>

<svelte:head>
  <title>Kontakt und Anfahrt</title>
</svelte:head>

<section>
  <div class="container">
    <div class="grid grid-cols-1 gap-10">
      <div class="___leafleat w-full h-2/3">
        <Map {mapAttributes} />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="flex items-start">
          <div class="w-full p-4 sm:p-6 md:p-8 lg:p-10 bg-ti_green_mat text-white shadow-ti">
            <h2 class="uppercase text-2xl lg:text-3xl tracking-wider font-bold text-white mb-4">Anschrift</h2>
            <h2 class="uppercase text-2xl lg:text-3xl tracking-wider font-extralight text-white">Büro</h2>
            <p class="py-2">
              Folwiese 20<br />
              51069 Köln
            </p>

            <p class="pt-2 pb-4">
              Telefon: 0221 - 68 36 91
              <br />
              Fax: 0221 - 68 97 797
              <br />
              E-Mail: <a class="font-bold pt-2 uppercase text-xs tracking-widest hover:text-black ease-in-out transition-all duration-300" href="mailto:info@tanzimpulse-koeln.de">info@tanzimpulse-koeln.de</a>
            </p>
            <p class="mb-8">
              <span class="uppercase tracking-widest text-xs">Bürozeiten</span><br />
              Montag bis Freitag: 8:30 - 13:00 Uhr<br />
              Dienstags und Donnerstags: 20:30 - 22:00 Uhr
            </p>
            <h2 class="uppercase text-2xl lg:text-3xl tracking-wider font-extralight text-white">Tanzraum</h2>
            <p class="py-2">
              Schweinheimer Straße 54<br />
              51067 Köln<br />
            </p>
          </div>
        </div>

        <div class="flex items-start">
          <DefaultCard>
            <h2 class="ti_headline_blue_bold mb-4">Anfahrt zum Tanzraum</h2>
            <h2 class="ti_headline_blue_light">Mit dem Auto</h2>
            <p class="py-2">
              A 3, Ausfahrt Bergisch Gladbach/Köln-Holweide/ Köln-Dellbrück<br />
              A 4, Ausfahrt Köln-Merheim, Richtung Köln-Holweide
            </p>
            <p class="py-2 mb-10">
              Direkt vor dem Tanzraum befinden sich 3 bis 4 hauseigene Stellplätze. <br />
              Weitere Parkmöglichkeiten finden Sie in den angrenzenden Straßen: Kochwiesenstraße, Burgwiesenstraße oder Ferdinand-Stücker-Straße.
            </p>
            <h2 class="ti_headline_blue_light">Mit den öffentlichen Verkehrsmitteln</h2>
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
