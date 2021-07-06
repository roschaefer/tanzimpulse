<script context="module" lang="ts">
  import SeminarPreviews from '$lib/components/SeminarPreviews/SeminarPreviews.svelte';
  import Slideshow from '$lib/components/Slideshow/Slideshow.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import { base } from '$app/paths';
  import { loadSeminare } from '$lib/routes';
  export const load = async (request): Load => {
    const loadAusbildungen = loadSeminare('ausbildung', 3);
    const loadWorkshops = loadSeminare('workshop', 3);
    const [propsAusbildungen, propsWorkshops] = await Promise.all([loadSeminare('ausbildung', 3)(request), loadSeminare('workshop', 3)(request)]);
    return {
      props: {
        kommende: {
          ausbildungen: propsAusbildungen.props.seminare,
          workshops: propsWorkshops.props.seminare
        }
      }
    };
  };

  export const prerender = true;
</script>

<script lang="ts">
  export let kommende = { ausbildungen: [], workshops: [] };
</script>

<svelte:head>
  <title>Start | Tanzimpulse</title>
</svelte:head>

<section>
  <div class="container mx-auto flex flex-col gap-10">
    <div class="___slideshow w-full h-3/6">
      <Slideshow />
    </div>

    <div class="___main_cards flex flex-col lg:flex-row w-full gap-10 items-start">
      <div class="___card1 bg-ti_blue_mat p-8 text-white flex-1 shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
        <h2 class="font-bold text-3xl uppercase tracking-wide">Die Ausbildungen</h2>
        <p class="pt-4 pb-8">Bilden Sie sich mit unseren Zusatzqualifikationen zur Tanzpädagogin oder zum Tanzpädagogen weiter. Weitere wichtige Tipps und Hinweise, die das Angebot schmackhaft machen.</p>
        <p class="pt-4 pb-8">
          <a sveltekit:prefetch href="{base}/ausbildungen"> <Button buttonstyle={'blue'}>Mehr erfahren</Button></a>
        </p>

        <SeminarPreviews seminare={kommende.ausbildungen} color="blue" />
      </div>

      <!-- card 2 -->
      <div class="___card2 bg-ti_cyan_mat p-8 text-white flex-1 shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
        <h2 class="font-bold text-3xl uppercase tracking-wide">Die Workshops</h2>
        <p class="pt-4 pb-8">Integrieren Sie neue tanzpädagogischeImpulse in Ihren Arbeitsalltag.Ideal für Erzieher, Lehrer, Therapeuten, Übungsleiter und viele mehr!</p>
        <p class="pt-4 pb-8">
          <a sveltekit:prefetch href="{base}/workshops"> <Button buttonstyle={'cyan'}>Mehr erfahren</Button></a>
        </p>
        <SeminarPreviews seminare={kommende.workshops} color="cyan" />
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
  </div>

  <div class="container mt-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div class="flex flex-col gap-10">
      <DefaultCard>
        <h2 class="font-bold text-3xl uppercase tracking-wide bg-ti_red_mat text-white p-2">Aktuelles</h2>
        <p class="py-4">Wir tanzen wieder in Präsenz!</p></DefaultCard
      >
    </div>

    <div>
      <DefaultCard>
        <h2 class="font-bold text-3xl uppercase tracking-wide text-ti_blue_accent">Tanzimpulse stellt auf hybride Lehr- und Lernformate um</h2>
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
