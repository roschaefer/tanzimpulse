<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>


<DefaultCard>
  <div role="alert">
    <div class="bg-ti_red_mat text-white font-bold  px-4 py-2">Fehler</div>
    <div class="text-red-700">
      <p>Da ist etwas schief gegangen.</p>
    </div>
  </div>
</DefaultCard>
