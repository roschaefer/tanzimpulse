<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>

<svelte:head>
  <title>Videos</title>
</svelte:head>

<section>
  <div class="container">
    <div class="grid grid-cols-1 gap-10">
      <DefaultCard>
        <h2 class="text-3xl uppercase font-bold text-ti_blue_accent tracking-wide mb-4">Videos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/sReA6W5qvIk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div>

          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/mngbGH_dJmE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/6EEsllb_gxc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>


      </DefaultCard>
    </div>
  </div>
</section>
