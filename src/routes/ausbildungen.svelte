<script context="module" lang="ts">
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Cite from '$lib/components/Cite/Cite.svelte';
  import { loadSeminare } from '$lib/routes';
  export const load: Load = loadSeminare('ausbildung');
  export const prerender = true;

  import { slide } from "svelte/transition";
	export let entry
	let isOpen = false
	const toggle = () => isOpen = !isOpen
</script>

<script lang="ts">
  import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
  export let seminare = [];
  const specificImgAttributes = {
    src: 'https://www.kita-turnen.de/wp-content/uploads/2012/03/Haeschen-in-der-Grube-1.jpg',
    alt: 'Johi',
  }
</script>

<style>
	button {border: none; background: none;display:block; color: inherit; font-size: 36px; cursor: pointer; margin: 0; padding-bottom: 0.5em; padding-top: 0.5em}

	svg { transition: transform 0.2s ease-in;
	}

	[aria-expanded=true] svg { transform: rotate(0.25turn); }
</style>

<svelte:head>
  <title>Ausbildungen</title>
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container">
    <div class="flex w-full lg:w-1/2">
      <DefaultCard>
        <h2 class="uppercase text-3xl tracking-wider font-extrabold text-ti_blue_accent">Ausbildungen</h2>
        <h3 class="uppercase text-3xl tracking-wider font-light font-extralight text-ti_blue_mat mb-4">Zusatzqualifiktation zur Tanzpädagogin / zum Tanzpädagogen</h3>
        <p class="py-4">
          Unsere dreistufige Ausbildung zur Tanzpädagogin/zum Tanzpädagogen ist seit 1994 etabliert. Als die Experten für Pädagogik im Tanz vermittelt das Team der TANZIMPULSE, wie der Unterricht soziale Aspekte berücksichtigt, wie die individuellen Gestaltungs-und Bewegungsmöglichkeiten erlebt und erweitert werden können.
        </p>
        <p class="py-4">
          Wir verstehen Tanz als eine Kunstform, die ein Baustein der kulturellen Bildung darstellt. Zur erfolgreichen Umsetzung der Ausbildungsinhalte gehören Reflexion und Coaching durch das Ausbildungsteam.
        </p>
        <!-- accordion -->
        <hr>
        <button on:click={toggle} aria-expanded={isOpen}>nlvbnclgbjn</button>
        {#if isOpen}
        <ul transition:slide={{ duration: 300 }}>
          <li>suhodfksdnfksdjnf</li>
          <li>suhodfksdnfksdjnf</li>
        </ul>
        {/if}

        <!-- -->
      </DefaultCard>
    </div>


    <Cite imgAttributes={specificImgAttributes}>
      <div slot="name">Frauke | Tanzpädagogin/Schwerpunkt Kindertanz + Kita-Leitung</div>
      <div slot="cite">„Denn ich denke gerade daran, mit wie viel Freude die Kinder immer mit mir in den Turnraum gegangen sind und auch schüchterne Kinder ganz anders wahrzunehmen waren.“</div>
    </Cite>






  </div>
</section>



<SeminarDashboard {seminare} />
