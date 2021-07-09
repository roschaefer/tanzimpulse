<script context="module" lang="ts">
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';

  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import { base } from '$app/paths';
  import Map from '$lib/components/Map/Map.svelte';
  const mapAttributes = {
    class: '',
    style: 'width: 100%; height: 100%; min-height:500px; max-height:40vh;'
  };
</script>

<svelte:head>
  <title>Tanzraumvermietung</title>
</svelte:head>

<section>
  <div class="container flex flex-col">
    <div class="relative shadow-ti">
      <Carousel perPage="1" autoplay="100000" easing="ease-in-out">
        <span class="control" slot="left-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="relative w-12 h-12 p-2 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>

        <!-- single slide item -->
        <div class="slide-content relative flex items-end">
          <img class="object-cover w-full" src="/images/slideshow/tanzraum.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-end">
          <img class="object-cover w-full" src="/images/slideshow/tanzraum.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <span class="control" slot="right-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="relative w-12 h-12 p-2 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Carousel>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      <DefaultCard>
        <h1 class="ti_headline_blue_bold">Tanzraumvermietung</h1>
        <h2 class="ti_headline_blue_light mb-4">Ideal für Vorlesungen, Kurse, Workshops, etc.</h2>

        <p class="pb-4">Der Kursraum befindet sich in einem ruhigen Stadtteil von Köln und ist einfach zu erreichen – mit dem Auto, sowie mit öffentlichen Verkehrsmitteln.</p>
        <p class="pb-8">Größe? WLAN, Pizzaria, Übernachtungsmöglichkeiten vorhanden, Küche, Umkleide,</p>

        <p class="font-bold">Anschrift</p>
        <p class="py-2">
          Schweinheimer Straße 54<br />
          51067 Köln<br />
        </p>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />

        <h2 class="ti_headline_blue_bold">Anfahrt zum Tanzraum</h2>
        <h2 class="ti_headline_blue_light">Mit dem Auto</h2>
        <p class="py-2">
          A 3, Ausfahrt Bergisch Gladbach/Köln-Holweide/ Köln-Dellbrück<br />
          A 4, Ausfahrt Köln-Merheim, Richtung Köln-Holweide
        </p>
        <p class="py-2 mb-6">
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
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />

        <h2 class="ti_headline_blue_light mb-4">Freie Zeiten für fortlaufende Kurse</h2>

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
        <p class="pb-8">
          <span class="font-bold">Freitag, Samstag und Sonntag </span><br />
          ganztägig möglich – auf Anfrage<br />
          <br />
          In den Schulferien NRW gibt es vereinzelt noch freie Zeiten.<br />
        </p>

        <p>
          <a sveltekit:prefetch href="{base}/kontakt"> <Button buttonstyle={'blue'}>Jetzt anfragen</Button></a>
        </p>
      </DefaultCard>

      <DefaultCard>
        <Map {mapAttributes} />
      </DefaultCard>
    </div>
  </div>
</section>

<style>
  .slide-content {
    width: 100%;
    min-height: 300px;
    max-height: 40vh;
  }
</style>
