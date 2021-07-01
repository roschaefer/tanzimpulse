<script>
  import { slide } from 'svelte/transition';
  import { hslide } from './hslide.js';

  let slides = [
    { content: 'Ausbildungen im Bereich Tanzpädagogik', target: 'ausbildungen', bg: '../slideshow/ausbildungen.jpg' },
    { content: 'Workshops und Fortbildungen', target: 'workshops', bg: '../slideshow/ausbildungen.jpg' },
    { content: 'Vermietung des Tanzraums', target: 'tanzraum', bg: '../slideshow/ausbildungen.jpg' }
  ];

  let cur = 0;

  function changeSlide(slide) {
    cur = slide;
  }

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max);
  const transition_args = {
    duration: 2000
  };

  function prev(e) {
    cur = clamp(--cur, 0, slides.length - 1);
  }

  function next(e) {
    cur = clamp(++cur, 0, slides.length - 1);
  }

  const ARROW_LEFT = 37;
  const ARROW_RIGHT = 39;
  function handleShortcut(e) {
    if (e.keyCode === ARROW_LEFT) {
      prev();
    }
    if (e.keyCode === ARROW_RIGHT) {
      next();
    }
  }
</script>

<svelte:window on:keyup={handleShortcut} />

<div class="extra-outer-wrapper">
  <div class="outer-wrapper">
    <div class="inner-wrapper ">
      {#each slides as slide, id}
        {#if id === cur}
          <div style="background:'{slide.bg}'" class="slide" in:hslide={transition_args} out:hslide={transition_args}>
            <div class="___inner_text_wrap overflow-hidden border-2 flex p-8 mb-12">
              <a class="absolute flex w-full flex items-center text-white" href={slide.target}>
                <span class="___inner_text text-3xl px-6">{slide.content}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        {/if}
      {/each}
      <div class="controls">
        <button class="w-12 h-12 text-3xl hover:text-white" on:click={() => prev()}> &lt; </button>
        <button class="w-12 h-12 text-3xl hover:text-white" on:click={() => next()}> &gt; </button>
      </div>
    </div>
  </div>
</div>

<div class="dots">
  {#each slides as slide, i}
    <button on:click={() => changeSlide(i)} class="dot" class:selected={cur == i}>{i + 1}</button>
  {/each}
</div>

<style>
  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dot {
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 100%;
    font-size: 0;
    margin: 0.3rem;
    opacity: 0.3;
  }

  .dot.selected {
    opacity: 1;
  }

  .extra-outer-wrapper {
    width: 100%;
    margin: 0 auto;
  }

  .outer-wrapper {
    width: 100%;
    padding: 0 0 38.25%;
    position: relative;
  }

  .inner-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
  }

  .controls button:first-child {
    position: absolute;
    left: 0;
    top: calc(50% - 1.2rem);
  }

  .controls button:last-child {
    position: absolute;
    right: 0;
    top: calc(50% - 1.2rem);
  }

  .slide {
    flex: 1 0 auto;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: left;
    display: flex;
  }

  .controls {
    text-align: center;
    width: 100%;
    display: block;
  }
  .___inner_text_wrap {
    background: rgba(191, 0, 46, 0.8);
  }
</style>
