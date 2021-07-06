<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Slideshow from '$lib/components/Slideshow/Slideshow.svelte';
  import Map from '$lib/components/Map/Map.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  const mapAttributes = {
    class: 'shadow-ti',
    style: 'width: 100%; height: 100%; min-height:300px; max-height:50vh;'
  };
</script>


<svelte:head>
  <title>Tanzraumvermietung</title>
</svelte:head>

<section>
  <div class="container">
    <div class="flex flex-col gap-10">
      <div class="___slideshow w-full h-3/6">
        <Slideshow></Slideshow>
      </div>
      <div class="flex flex-col-reverse lg:flex-row gap-10 w-full">
        <div class="flex w-full lg:w-1/2">
          <DefaultCard>
            <h1 class="uppercase text-3xl tracking-wider font-bold text-ti_blue_accent">Tanzraumvermietung</h1>
            <h2 class="text-3xl uppercase font-extralight text-ti_blue_mat tracking-wide mb-4">Ideal für Vorlesungen, Kurse, Workshops, etc.</h2>


            <p class="pb-4">Der Kursraum befindet sich in einem ruhigen Stadtteil von Köln und ist einfach zu erreichen – mit dem Auto, sowie mit öffentlichen Verkehrsmitteln. </p>
            <p class="pb-8">Größe? WLAN, Pizzaria, Übernachtungsmöglichkeiten vorhanden, Küche, Umkleide, </p>

            <p class="font-bold">Anschrift</p>
            <p class="py-2">
              Schweinheimer Straße 54<br />
              51067 Köln<br />
            </p>
            <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />


            <h2 class="uppercase text-3xl tracking-wider font-bold text-ti_blue_accent">Anfahrt zum Tanzraum</h2>
            <h2 class="uppercase text-3xl tracking-wider font-extralight text-ti_blue_mat">Mit dem Auto</h2>
            <p class="py-2">
              A 3, Ausfahrt Bergisch Gladbach/Köln-Holweide/ Köln-Dellbrück<br />
              A 4, Ausfahrt Köln-Merheim, Richtung Köln-Holweide
            </p>
            <p class="py-2 mb-6">
              Direkt vor dem Tanzraum befinden sich 3 bis 4 hauseigene Stellplätze. <br />
              Weitere Parkmöglichkeiten finden Sie in den angrenzenden Straßen: Kochwiesenstraße, Burgwiesenstraße oder Ferdinand-Stücker-Straße.
            </p>
            <h2 class="uppercase text-3xl tracking-wider font-extralight text-ti_blue_mat">Mit den öffentlichen Verkehrsmitteln</h2>
            <p class="py-2">
              Linie 18 ab Köln Hbf<br />
              Linie 3 ab Bahnhof Deutz/Messe<br />
              bis Haltestelle Maria-Himmelfahrt-Straße in Köln-Holweide
            </p>
            <p class="py-2">Von dort ca. 5 Min. bis zur Schweinheimer Straße 54, 51067 Köln-Holweide</p>
            <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />

            <h2 class="text-3xl uppercase font-extralight text-ti_blue_mat tracking-wide mb-4">Freie Zeiten für fortlaufende Kurse</h2>
      
            <p class="pb-4">
              <span class="font-bold">Montag</span><br />
              Vormittag ab 8:00 bis 16 Uhr<br />
              Abends ab 20:00 bis 21:30 Uhr (14 tägig)
            </p>
            <p class="py-4">
              <span class="font-bold">Dienstag</span><br />
              vor 9:30 Uhr oder nach 10:30 Uhr bis 16 Uhr
            </p>
            <p class="py-4">
              <span class="font-bold">Mittwoch</span><br />
              Vormittag ab 11:00 bis 16:00 Uhr
            </p>
            <p class="py-4">
              <span class="font-bold">Donnerstag</span><br />
             ????





            </p>
            <p>
              <span class="font-bold">Freitag, Samstag und Sonntag </span><br />
              ganztägig möglich – auf Anfrage<br />
               <br />
              In den Schulferien NRW gibt es vereinzelt noch freie Zeiten.<br />
            </p>


            <p class="py-8">
              <a sveltekit:prefetch href="{base}/kontakt"> <Button buttonstyle={'blue'}>Jetzt anfragen</Button></a>
            </p>
          </DefaultCard>
        </div>

        <div class="flex w-full lg:w-1/2">
          <Map {mapAttributes} />
        </div>
        



      </div>
    </div>
  </div>
</section>
