<script context="module" lang="ts">
  import SeminarPreviews from '$lib/components/SeminarPreviews/SeminarPreviews.svelte';
  import Slideshow from '$lib/components/Slideshow/Slideshow.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import { base } from '$app/paths';

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/index.json');

    if (res.ok) {
      const { data: props } = await res.json();
      return { props };
    }

    const {
      errors: [error]
    } = await res.json();

    return {
      status: res.status,
      error: new Error(error.message)
    };
  };

  export const prerender = true;
</script>

<script lang="ts">
  export let neuigkeiten = [];
  export let kommendeAusbildungen = [];
  export let kommendeWorkshops = [];
</script>

<svelte:head>
  <title>Start | Tanzimpulse</title>
</svelte:head>

<section>
  <div class="container flex flex-col">
    <Slideshow />

    <div class="cards my-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div class="flex items-start">
        <div class="bg-ti_blue_mat p-4 md:p-6 lg:p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
          <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Die Ausbildungen</h2>
          <p class="py-4">Bilden Sie sich mit unseren Zusatzqualifikationen zur Tanzpädagogin oder zum Tanzpädagogen weiter. Weitere wichtige Tipps und Hinweise, die das Angebot schmackhaft machen.</p>
          <p class="py-4">
            <Button href="{base}/ausbildungen" buttonstyle={'blue'}>Mehr erfahren</Button>
          </p>
          <SeminarPreviews seminare={kommendeAusbildungen} color="blue" />
        </div>
      </div>

      <div class="flex items-start">
        <div class="bg-ti_cyan_mat p-4 md:p-6 lg:p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
          <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Die Workshops</h2>
          <p class="py-4">Integrieren Sie neue tanzpädagogischeImpulse in Ihren Arbeitsalltag.Ideal für Erzieher, Lehrer, Therapeuten, Übungsleiter und viele mehr!</p>
          <p class="py-4">
            <Button href="{base}/workshops" buttonstyle={'cyan'}>Mehr erfahren</Button>
          </p>
          <SeminarPreviews seminare={kommendeWorkshops} color="cyan" />
        </div>
      </div>

      <div class="flex items-start">
        <div class="bg-ti_green_mat flex flex-col p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
          <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Der (Tanz-) Raum</h2>
          <p class="py-4">Alle Informationen zum Tanzraum. Den kann man nach Rücksprache auch mieten für Veranstaltungen, wie Lesungen, etc.</p>
          <p class="py-4">
            <Button href="{base}/tanzraum" buttonstyle={'green'}>Mehr erfahren</Button>
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- eyecatcher -->
      {#each neuigkeiten as neuigkeit (neuigkeit.id)}
        <DefaultCard>
          <div class="graphcms_card_startpage">
            <h2 class="ti_headline_blue_bold pb-4">{neuigkeit.ueberschrift}</h2>
            {@html neuigkeit.inhalt.html}
          </div>
        </DefaultCard>
      {/each}

      <DefaultCard>
        <h2 class="ti_headline_blue_bold">Tanzimpulse stellt auf hybride Lehr- und Lernformate um</h2>
        <p class="py-4">Hierfür erhalten wir eine Projekt-Förderung von:</p>
        <div class="flex flex-col md:flex-row w-full justify-items-center ">
          <div class="flex-1">
            <img class="mx-auto" src="{base}/images/BKM_Web_de.gif" alt="Logo Die Bundesbeauftragte der Bundesregierung für Kultur und Medien" />
          </div>
          <div class="flex-1">
            <img class="mx-auto" src="{base}/images/DVT.png" alt="Logo Dachverband Tanzen" />
          </div>
        </div>
      </DefaultCard>
    </div>
  </div>
</section>
