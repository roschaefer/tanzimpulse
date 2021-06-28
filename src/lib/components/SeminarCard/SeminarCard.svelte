<script lang="ts">
  import { overbooked } from '$lib/helpers';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  export let seminar: {};
  export let link = '#';
</script>

<a class="" sveltekit:prefetch href={link}>
  <div class="flex flex-col h-full">
    <div class="seminar_card_img flex-1">
      {#if seminar.bild}
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={seminar.bild.medium} alt={seminar.bild.fileName || 'Fehlendes Bild'} />
      {/if}
    </div>

    <div class="seminar_card_content pt-4 flex-1">
      <h4 class="uppercase tracking-wide text-xs title-font font-medium text-gray-400 mb-1">- {seminar.format} -</h4>
      <h1 class="text-2xl uppercase font-extrabold text-ti_blue_accent tracking-wide">{seminar.titel}</h1>
      <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">22.8.2020 von 10:00 bis 19:00 Uhr</p>
      <p class="text-ti_green_accent-dark font-extrabold uppercase tracking-wide text-lg prose-sm py-4">Noch Plätze frei</p>

      <hr class="block border border-coolGray-100 w-full mt-2 mb-4" />

      <div class="___pills py-2">
        {#each seminar.kategorien as kategorie (kategorie.id)}
          <span class="text-white text-xs tracking-wide bg-ti_green_accent-dark inline-flex px-2 py-1 rounded-full mb-2 mr-2">
            {kategorie.name}
          </span>
        {/each}
      </div>

      <slot name="beschreibung">
        <p class="text-black pt-6 pb-4">
          {seminar.kurzbeschreibung}
        </p>
      </slot>
    </div>

    <div class="seminar_card_content px-6 flex-0">
      {#if link && link !== '#'}
        <button class="___default_button p-4 my-6 w-full rounded-full border-2 border-ti_blue_accent-dark text-ti_blue_accent-dark font-extrabold text-sm tracking-widest uppercase hover:border-ti_blue_accent-light hover:text-ti_blue_accent-light hover:bg-white outline-none focus:outline-none transition duration-300 ease-in-out">Mehr erfahren</button>
      {/if}
    </div>
  </div>
</a>

<!--
      <h3 class="tracking-widest text-xs title-font font-medium mb-1 {overbooked(seminar) ? 'text-red-400' : 'text-gray-500'}">
        {#if seminar.maximaleAnzahlTeilnehmer}
          {seminar.teilnehmer.length}/{seminar.maximaleAnzahlTeilnehmer} Teilnehmer
        {:else}
          {seminar.teilnehmer.length} Teilnehmer
        {/if}
      </h3>
-->
