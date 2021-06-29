<script context="module" lang="ts">
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';  
  import Button from '$lib/components/Button/Button.svelte';
  import Cite from '$lib/components/Cite/Cite.svelte';
  import { loadSeminare } from '$lib/routes';
  import { base } from '$app/paths';

  export const load: Load = loadSeminare('workshop');
  export const prerender = true;
</script>

<script lang="ts">
  import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
  export let seminare = [];
</script>

<svelte:head>
  <title>Workshops</title>
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container">
    <div class="flex w-full lg:w-1/2">
      <DefaultCard>
        <h2 class="uppercase text-3xl tracking-wider font-extrabold text-ti_blue_accent">Workshops</h2>
        <h3 class="uppercase text-3xl tracking-wider font-light font-extralight text-ti_blue_mat mb-4">Für Multiplikatoren/innen und Interessierte</h3>
        <p class="py-4">
          Sie können unabhängig von einer Teilnahme an den Ausbildungsreihen besucht werden. Aktuelle Tanzthemen und zeitgemäße Unterrichtsmethoden werden von praxiserfahrenen Referentinnen und Referenten vermittelt.</p>
      </DefaultCard>
    </div>





    <Cite>
     

      <img {src} slot="image" />
      <div slot="name">Frauke | Tanzpädagogin/Schwerpunkt Kindertanz + Kita-Leitung</div>
      <div slot="cite">„Denn ich denke gerade daran, mit wie viel Freude die Kinder immer mit mir in den Turnraum gegangen sind und auch schüchterne Kinder ganz anders wahrzunehmen waren.“</div>
    </Cite>






  </div>
</section>

<SeminarDashboard {seminare} />
