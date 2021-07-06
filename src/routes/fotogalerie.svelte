<script context="module" lang="ts">
  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
</script>

<svelte:head>
  <title>Fotogalerie</title>
</svelte:head>

<section>
  <div class="container">
    <div class="relative shadow-ti">
      <Carousel perPage="1" autoplay="100000" easing="ease-in-out">
        <span class="control" slot="left-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="relative w-18 h-18 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>

        <!-- single slide item -->
        <div class="slide-content relative flex">
          <img class="object-cover w-full" src="/images/slideshow/tanzraum.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex">
          <img class="object-cover w-full" src="/images/slideshow/tanzraum.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <span class="control" slot="right-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-18 h-18 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Carousel>
    </div>
  </div>
</section>

<style>
  .slide-content {
    width: 100%;
    min-height: 400px;
    max-height: 50vh;
  }

  .slide_text_box {
    background: rgba(198, 20, 54, 0.9);
  }
</style>
