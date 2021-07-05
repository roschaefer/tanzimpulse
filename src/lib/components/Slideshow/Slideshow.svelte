<script>
  // TODO: remove once this issue is resolved https://github.com/beyonk-adventures/svelte-carousel/issues/68
  import * as Siema from 'siema';
  import Carousel from '@beyonk/svelte-carousel/src/Carousel.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import { base } from '$app/paths';
</script>

<div class="relative shadow-ti">
  <Carousel perPage="1" autoplay="100000" easing="ease-in-out">
    <span class="control" slot="left-control">
      <svg xmlns="http://www.w3.org/2000/svg" class="relative w-18 h-18 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </span>

    <!-- single slide item -->
    <div class="slide-content relative">
      <img class="object-cover h-1/4 w-full" src="/images/slideshow/ausbildungen.jpg" alt="Ausbildungen" />
      <!-- text box -->
      <div class="slide_text_box_wrapper">
        <div class="slide_text_box absolute left-20 bottom-10 p-4 w-9/12 md:w-min">
          <div class="flex flex-col md:flex-row items-center">
            <div class="pr-6">
              <h2 class="text-3xl uppercase font-bold text-white tracking-wide">Ausbildungen</h2>
              <p class="text-white pb-2">Integrieren Sie Tanzpädagogik in Ihren Berufsalltag</p>
            </div>
            <a sveltekit:prefetch href="{base}/ausbildungen">
              <Button buttonstyle={'white'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h4 md:h-6 w-4 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <div class="slide-content relative">
      <img class="object-cover h-1/4 w-full" src="/images/slideshow/workshops.jpg" alt="Workshops" />
      <!-- text box -->
      <div class="slide_text_box_wrapper">
        <div class="slide_text_box absolute left-20 bottom-10 p-4 w-9/12 md:w-min">
          <div class="flex flex-col md:flex-row items-center">
            <div class="pr-6">
              <h2 class="text-3xl uppercase font-bold text-white tracking-wide">Workshops</h2>
              <p class="text-white pb-2">Kindertanzen, Yoga, Sufi – entdecken Sie unser vielfältiges Angebot</p>
            </div>
            <a sveltekit:prefetch href="{base}/workshops">
              <Button buttonstyle={'white'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h4 md:h-6 w-4 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <div class="slide-content relative">
      <img class="object-cover   h-1/4 w-full" src="/images/slideshow/tanzraum.jpg" alt="Tanzraum" />
      <!-- text box -->
      <div class="slide_text_box_wrapper">
        <div class="slide_text_box absolute left-20 bottom-10 p-4 w-9/12 md:w-min">
          <div class="flex flex-col md:flex-row items-center">
            <div class="pr-6">
              <h2 class="text-3xl uppercase font-bold text-white tracking-wide">Tanzraum mieten</h2>
              <p class="text-white pb-2">Ideal für Kurse, Workshops, Ausstellungen, Lesungen. etc.</p>
            </div>
            <a sveltekit:prefetch href="{base}/tanzraum">
              <Button buttonstyle={'white'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h4 md:h-6 w-4 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg xmlns="http://www.w3.org/2000/svg" class="w-18 h-18 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </Carousel>
</div>

<style>
  .slide-content {
    width: 100%;
    max-height:40vh;
  }

  .slide_text_box_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .slide_text_box {   
    background: rgba(198, 20, 54, 0.9);
  }



</style>
