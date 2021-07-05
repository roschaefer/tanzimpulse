<script>
  import Carousel from '$lib/components/Carousel/Carousel.svelte';
</script>

<Carousel perPage="1" autoplay="100000" easing="ease-in-out">
  <span class="control" slot="left-control">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </span>
  <div class="slide-content">
    <img class="w-full" src="/images/slideshow/ausbildungen.jpg" alt="Ausbildungen" />
  </div>
  <div class="slide-content">
    <img class="w-full" src="/images/slideshow/tanzraum.jpg" alt="Tanzraum" />
  </div>
  <div class="slide-content">
    <img class="w-full" src="/images/slideshow/workshops.jpg" alt="Workshops" />
  </div>
  <span class="control" slot="right-control">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </span>
</Carousel>

<style>
  .slide-content {
    width: 100%;
  }
</style>
