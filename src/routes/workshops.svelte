<script context="module" lang="ts">
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
<<<<<<< HEAD
=======
  import Button from '$lib/components/Button/Button.svelte';
>>>>>>> 9adf0235a5cf98e7f4424c4347bbebb2a9ac99a4
  import Cite from '$lib/components/Cite/Cite.svelte';
  import { loadSeminare } from '$lib/routes';
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
        <h2 class="uppercase text-3xl tracking-wider font-bold text-ti_blue_accent">Workshops</h2>
        <h3 class="uppercase text-3xl tracking-wider font-light font-extralight text-ti_blue_mat mb-4">Für Multiplikatoren/innen und Interessierte</h3>
        <p class="py-4">für Multiplikatoren/innen und Interessierte. Sie können unabhängig von einer Teilnahme an den Ausbildungsreihen besucht werden. Aktuelle Tanzthemen und zeitgemäße Unterrichtsmethoden werden von praxiserfahrenen Referentinnen und Referenten vermittelt.</p>

      </DefaultCard>
    </div>

    <Cite>
      <div slot="name">Heike W. | Kursteilnehmerin</div>
      <div slot="cite">„Ein riesengroßes Dankeschön für eure geleistete Arbeit im Vorfeld und euren Einsatz an dem Wochenende, für eure Liebe zur Tanzvermittlung und euren wertschätzenden Umgang mit uns Teilnehmerinnen. “</div>
    </Cite>
  </div>
</section>

<SeminarDashboard {seminare} />
