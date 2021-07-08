<script context="module" lang="ts">
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';

  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import { base } from '$app/paths';
  import Map from '$lib/components/Map/Map.svelte';
  const mapAttributes = {
    class: 'shadow-ti',
    style: 'width: 100%; height: 100%; min-height:500px; max-height:40vh;'
  };
</script>

<svelte:head>
  <title>Tanzraumvermietung</title>
</svelte:head>

<section>
  <div class="container grid grid-rows-2 gap-10">

    <div class="slideshow border-2">

      top
    </div>

    <div class="slideshow border-2">

      bottom
    </div>


  </div>





</section>

<style>
  .slide-content {
    width: 100%;
    min-height: 400px;
    max-height: 50vh;
  }
</style>
