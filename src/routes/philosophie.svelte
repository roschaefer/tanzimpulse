<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>

<svelte:head>
  <title>Philosophie</title>
</svelte:head>

<section>
  <div class="container">
    <div class="grid grid-cols-1 gap-10">
      <DefaultCard>
        <h2 class="text-3xl uppercase font-bold text-ti_blue_accent tracking-wide mb-4">Philosophie</h2>
      </DefaultCard>
    </div>
  </div>
</section>
