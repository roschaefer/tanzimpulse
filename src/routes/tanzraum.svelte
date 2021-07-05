<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Slideshow from '$lib/components/Slideshow/Slideshow.svelte';

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
      <div class="flex flex-col lg:flex-row gap-10 w-full">
        <div class="flex flex-1 w-2/4">
          <DefaultCard>
            <h1 class="uppercase text-3xl tracking-wider font-bold text-ti_blue_accent pb-4">Tanzraumvermietung</h1>
            <p class="font-bold">Benötigen Sie einen großzügigen Raum mit Atmosphäre für einen Kurs oder Workshop, für eine Ausstellung oder Lesung?</p>
            <p class="py-6">Freie Zeiten für fortlaufende Kurse:</p>
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
            <p>
              <span class="text-3xl text-ti_red_accent uppercase font-bold tracking-wide hover:border-ti_red_accent">!!!!!</span>
              <span class="font-bold">Freitag, Samstag und Sonntag </span><br />
              ganztägig möglich – auf Anfrage<br />
               <br />
              In den Schulferien NRW gibt es vereinzelt noch freie Zeiten.<br />
            </p>
          </DefaultCard>
        </div>

        
        



      </div>
    </div>
  </div>
</section>
