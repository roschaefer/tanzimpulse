<script context="module" lang="ts">
  import { loadSeminare } from '$lib/routes';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';

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
  <div class="container border-2">
    <div class="flex w-1/2">
      <DefaultCard>
        <h2 class="uppercase text-3xl tracking-wider font-black text-ti_blue_accent">Ausbildungen</h2>
        <h3 class="uppercase text-3xl tracking-wider font-light text-ti_blue_mat mb-4">Zusatzqualifiktation zur Tanzpädagogin / zum Tanzpädagogen</h3>
        <p class="py-4">
          Unsere dreistufige Ausbildung zur Tanzpädagogin/zum Tanzpädagogen ist seit 1994 etabliert. Als die Experten für Pädagogik im Tanz vermittelt das Team der TANZIMPULSE, wie der Unterricht soziale Aspekte berücksichtigt, wie die individuellen Gestaltungs-und Bewegungsmöglichkeiten erlebt und erweitert werden können. 
        </p>
        <p class="py-4">
          Wir verstehen Tanz als eine Kunstform, die ein Baustein der kulturellen Bildung darstellt. Zur erfolgreichen Umsetzung der Ausbildungsinhalte gehören Reflexion und Coaching durch das Ausbildungsteam. 
        </p>
      </DefaultCard>
    </div>

    <!-- cite -->
    <div class="___cite flex flex-col w-full py-12">
      <img class="w-20 h-20 mx-auto mb-6 rounded-full shadow-md" src="./images/employees/woehler_sabrina.jpg" alt="Sabrina Wöhler | Tanzimpulse" />

      <p class="___author mx-auto uppercase tracking-widest text-warmGray-500 text-sm">Frauke | Tanzpädagogin/Schwerpunkt Kindertanz + Kita-Leitung</p>
      <cite class="mx-auto px-8 py-4 text-ti_blue_mat text-3xl font-light not-italic">
        „Denn ich denke gerade daran, mit wie viel Freude die Kinder immer mit mir in den Turnraum gegangen sind und auch schüchterne Kinder ganz anders wahrzunehmen waren.“
      </cite>
    </div>
    <!-- end cite -->


  </div>
</section>

<SeminarDashboard {seminare} />
