<script context="module" lang="ts">
  import { base } from '$app/paths';
  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
</script>

<div class="relative ">
  <Carousel perPage="1" autoplay="8000" easing="ease-in-out">
    <span class="control" slot="left-control">
      <svg xmlns="http://www.w3.org/2000/svg" class="relative w-8 h-8 p-2 text-white rounded-full ti_slidehow_control transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </span>

    <div class="w-10/12 p-6 md:p-12 lg:p-20 md mx-auto relative text-center flex flex-col items-center">
      <cite class="mx-auto py-6 text-ti_blue_mat text-2xl lg:text-3xl font-light not-italic">„Die Ausbildungsjahre bei den Tanzimpulsen haben mich persönlich geprägt und meine Arbeit an der Schule als Lehrerin positiv beeinflusst und bereichert. Besonders die Improvisation ermöglicht es den Schülerinnen und Schülern kreativ, ideenreich und rücksichtsvoll gemeinsam oder alleine das Erarbeitete darzustellen.“</cite>
      <p class="mx-auto pt-6 uppercase font-bold tracking-widest text-gray-500 text-sm">Beate | Kursteilnehmerin</p>
    </div>

    <div class="w-10/12 p-6 md:p-12 lg:p-20 mx-auto relative text-center flex flex-col items-center">
      <cite class="mx-auto py-6 text-ti_blue_mat text-2xl lg:text-3xl font-light not-italic">„Denn ich denke gerade daran, mit wie viel Freude die Kinder immer mit mir in den Turnraum gegangen sind und auch schüchterne Kinder ganz anders wahrzunehmen waren.“ </cite>

      <p class="mx-auto pt-6 uppercase font-bold tracking-widest text-gray-500 text-sm">Frauke | Tanzpädagogin/Schwerpunkt Kindertanz + Kita-Leitung</p>
    </div>

    <div class="w-10/12 p-6 md:p-12 lg:p-20 md mx-auto relative text-center flex flex-col items-center">
      <cite class="mx-auto py-6 text-ti_blue_mat text-2xl lg:text-3xl font-light not-italic">„Ein riesengroßes Dankeschön für eure geleistete Arbeit im Vorfeld und euren Einsatz an dem Wochenende, für eure Liebe zur Tanzvermittlung und euren wertschätzenden Umgang mit uns Teilnehmerinnen.“</cite>
      <p class="mx-auto pt-6 uppercase font-bold tracking-widest text-gray-500 text-sm">Heike W. | Kursteilnehmerin</p>
    </div>

    <div class="w-10/12 p-6 md:p-12 lg:p-20 md mx-auto relative text-center flex flex-col items-center">
      <cite class="mx-auto py-6 text-ti_blue_mat text-2xl lg:text-3xl font-light not-italic">„Du kannst dir gar nicht vorstellen, wie diese Tanzausbildung mein Leben bereichert hat!“</cite>
      <p class="mx-auto pt-6 uppercase font-bold tracking-widest text-gray-500 text-sm">Corinna R. | Kursteilnehmerin</p>
    </div>

    <div class="w-10/12 p-6 md:p-12 lg:p-20 md mx-auto relative text-center flex flex-col items-center">
      <cite class="mx-auto py-6 text-ti_blue_mat text-2xl lg:text-3xl font-light not-italic">„Als ich 2002 mit der Ausbildung bei euch (Tanzimpulse-Grundstufe) begann, hätte ich im Leben nicht gedacht, welche Türen ich mir damit öffne. Rückblickend kann ich sagen, dass ich so ziemlich alle Bereiche, in der eine Tanzpädagogin tätig sein kann, erprobt habe und möchte keine davon missen.“</cite>
      <p class="mx-auto pt-6 uppercase font-bold tracking-widest text-gray-500 text-sm">Astrid | Kursteilnehmerin</p>
    </div>

    <div class="w-10/12 p-6 md:p-12 lg:p-20 md mx-auto relative text-center flex flex-col items-center">
      <cite class="mx-auto py-6 text-ti_blue_mat text-2xl lg:text-3xl font-light not-italic">„Am Anfang der Ausbildung waren die Begrifflichkeiten Bewegung + Tanz für mich getrennt. Jetzt hat sich mein Blickwinkel geändert und ein fließender Übergang ist entstanden. Bewegung ist Tanz! / Tanz ist Musik! / Bewegung, Tanz + Musik ist Lebensfreude!“</cite>
      <p class="mx-auto pt-6 uppercase font-bold tracking-widest text-gray-500 text-sm">Judith S. | Kursteilnehmerin</p>
    </div>

    <span class="control" slot="right-control">
      <svg xmlns="http://www.w3.org/2000/svg" class="relative w-8 h-8 p-2 text-white rounded-full ti_slidehow_control transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </Carousel>
</div>

<style>
  .ti_slidehow_control {
    background: rgba(0, 0, 0, 0.25);
  }

  .ti_slidehow_control:hover {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
