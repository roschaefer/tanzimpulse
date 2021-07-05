<script context="module" lang="ts">
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Slideshow from '$lib/components/Slideshow/Slideshow.svelte';


  import Button from '$lib/components/Button/Button.svelte';
  import { base } from '$app/paths';

  export const prerender = true;
</script>

<svelte:head>
  <title>Start | Tanzimpulse</title>
</svelte:head>

<section>
  <div class="container mx-auto flex flex-col gap-10">
    <div class="___slideshow w-full h-3/6">
      <Slideshow></Slideshow>
    </div>

    <div class="___main_cards flex flex-col lg:flex-row w-full gap-10 items-start">
      <div class="___card1 bg-ti_blue_mat p-8 text-white flex-1 shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
        <h2 class="font-bold text-3xl uppercase tracking-wide">Die Ausbildungen</h2>
        <p class="pt-4 pb-8">Bilden Sie sich mit unseren Zusatzqualifikationen zur Tanzpädagogin oder zum Tanzpädagogen weiter. Weitere wichtige Tipps und Hinweise, die das Angebot schmackhaft machen.</p>
        <p class="pt-4 pb-8">
          <a sveltekit:prefetch href="{base}/ausbildungen"> <Button buttonstyle={'blue'}>Mehr erfahren</Button></a>
        </p>

        <div class="___start_single_seminar_teaser flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center">
          <!-- one single seminar -->
          <div class="___startpage_seminar_basics flex-1">
            <p class="___startpage_seminar_date">2. August - 11:00 Uhr bis 12:00 Uhr</p>
            <p class="___startpage_seminar_title font-bold uppercase tracking-wider">Titel der Ausbildung</p>
            <p class="___startpage_seminar_status py-2 uppercase text-ti_green_accent-light text-sm font-bold tracking-wider">Noch Plätze frei</p>
          </div>
          <p class="pt-4 pb-8">
            <a sveltekit:prefetch href="{base}/ausbildungen">
              <Button buttonstyle={'blue'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></Button
              ></a
            >
          </p>
        </div>
        <hr class="block border border-ti_blue_mat-dark w-full my-4" />
        <!-- end of one single seminar -->
      </div>

      <!-- card 2 -->
      <div class="___card2 bg-ti_cyan_mat p-8 text-white flex-1 shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
        <h2 class="font-bold text-3xl uppercase tracking-wide">Die Workshops</h2>
        <p class="pt-4 pb-8">Integrieren Sie neue tanzpädagogischeImpulse in Ihren Arbeitsalltag.Ideal für Erzieher, Lehrer, Therapeuten, Übungsleiter und viele mehr!</p>
        <p class="pt-4 pb-8">
          <a sveltekit:prefetch href="{base}/workshops"> <Button buttonstyle={'cyan'}>Mehr erfahren</Button></a>
        </p>
        <!-- one single seminar -->
        <div class="___start_single_seminar_teaser flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center">
          <div class="___startpage_seminar_basics flex-1">
            <p class="___startpage_seminar_date">2. August - 11:00 Uhr bis 12:00 Uhr</p>
            <p class="___startpage_seminar_title font-bold uppercase tracking-wider">Titel der Ausbildung</p>
            <p class="___startpage_seminar_status py-2 uppercase text-ti_green_accent-light text-sm font-extrabold tracking-wider">Noch Plätze frei</p>
          </div>

          <p class="pt-4 pb-8">
            <a sveltekit:prefetch href="{base}/workshops">
              <Button buttonstyle={'cyan'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></Button
              ></a
            >
          </p>
        </div>
        <hr class="block border border-ti_cyan_mat-dark w-full my-4" />
        <!-- end of one single seminar -->
      </div>
      <!-- end of card 2 -->

      <!-- card 3 -->
      <div class="___card3 bg-ti_green_mat p-8 text-white flex-1 shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
        <h2 class="font-bold text-3xl uppercase tracking-wide">Der (Tanz-) Raum</h2>
        <p class="pt-4 pb-8">Alle Informationen zum Tanzraum. Den kann man nach Rücksprache auch mieten für Veranstaltungen, wie Lesungen, etc.</p>
        <p class="pt-4 pb-8">
          <a sveltekit:prefetch href="{base}/tanzraum"> <Button buttonstyle={'green'}>Mehr erfahren</Button></a>
        </p>
      </div>
      <!-- end of card 3 -->
    </div>


</section>
