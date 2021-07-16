<script>
  // TODO: remove once this issue is resolved https://github.com/beyonk-adventures/svelte-carousel/issues/68
  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import { base } from '$app/paths';
</script>

<div class="relative">
  <Carousel perPage="1" autoplay="100000" easing="ease-in-out">
    <span class="control" slot="left-control">
      <svg xmlns="http://www.w3.org/2000/svg" class="relative w-10 h-10 p-2 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </span>

    <!-- single slide item -->
    <div class="slide-content relative flex items-center">
      <img class="object-cover w-full shadow-ti" src="/images/slideshow/ausbildungen.jpg" alt="Ausbildungen bei Tanzimpulse" />
      <!-- text box -->
      <div class="absolute w-full h-full top-0 left-0">
        <div class="slide_text_box absolute bottom-0 mx-20 mb-14 p-4">
          <div class="flex flex-row items-center">
            <div class="pr-6">
              <h2 class="text-xl md:text-2xl lg:text-3xl uppercase font-bold text-white tracking-wide">Ausbildungen</h2>
              <p class="text-white pb-2 hidden md:inline-block">Integrieren Sie Tanzpädagogik in Ihren Berufsalltag</p>
            </div>
            <a sveltekit:prefetch href="{base}/ausbildungen">
              <Button buttonstyle={'white'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></Button
              ></a
            >
          </div>
        </div>
      </div>
      <!-- -->
    </div>
    <!-- -->

    <!-- single slide item -->
    <div class="slide-content relative flex items-center">
      <img class="object-cover w-full shadow-ti" src="/images/slideshow/workshops.jpg" alt="Workshops bei Tanzimpule" />
      <!-- text box -->
      <div class="absolute w-full h-full top-0 left-0">
        <div class="slide_text_box absolute bottom-0 mx-20 mb-14 p-4">
          <div class="flex flex-row items-center">
            <div class="pr-6">
              <h2 class="text-xl md:text-2xl lg:text-3xl uppercase font-bold text-white tracking-wide">Workshops</h2>
              <p class="text-white pb-2 hidden md:inline-block">Gymnastik, Kindertanzen, Sufi – entdecken Sie unser Angebot</p>
            </div>
            <a sveltekit:prefetch href="{base}/workshops">
              <Button buttonstyle={'white'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></Button
              ></a
            >
          </div>
        </div>
      </div>
      <!-- -->
    </div>
    <!-- -->

    <!-- single slide item -->
    <div class="slide-content relative flex items-center">
      <img class="object-cover w-full shadow-ti" src="/images/slideshow/tanzraum.jpg" alt="Der Tanzraum von Tanzimpulse" />
      <!-- text box -->
      <div class="absolute w-full h-full top-0 left-0">
        <div class="slide_text_box absolute bottom-0 mx-20 mb-14 p-4">
          <div class="flex flex-row items-center">
            <div class="pr-6">
              <h2 class="text-xl md:text-2xl lg:text-3xl uppercase font-bold text-white tracking-wide">Tanzraum mieten</h2>
              <p class="text-white pb-2 hidden md:inline-block">Ideal für Lesungen, Kurse, Ausstellungen, etc.</p>
            </div>
            <a sveltekit:prefetch href="{base}/tanzraum">
              <Button buttonstyle={'white'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></Button
              ></a
            >
          </div>
        </div>
      </div>
      <!-- -->
    </div>
    <!-- -->




    <span class="control" slot="right-control">
      <svg xmlns="http://www.w3.org/2000/svg" class="relative w-10 h-10 p-2 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </Carousel>
</div>

<style>
  .slide-content {
    width: 100%;
    min-height:300px;
    max-height:40vh;
  }

  .slide_text_box {   
    background: rgba(198, 20, 54, 0.9);
  }

</style>
