<script lang="ts">
  import { overbooked } from '$lib/helpers';
  import Button from '$lib/components/Button/Button.svelte';

  export let seminar: {};
  export let link = '#';
</script>

<div class="flex items-start">
  <div class="flex w-full flex-col items-start bg-white shadow-ti">
    <div class="seminar_card_img w-full flex-0">
      {#if seminar.bild}
        <img class="h-32 sm:h-40 md:h-48 lg:h-60 w-full object-cover object-center" src={seminar.bild.medium} alt={seminar.bild.fileName || 'Fehlendes Bild'} />
      {/if}
    </div>

    <div class="seminar_card_content w-full flex-1 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10">
      <h4 class="uppercase tracking-widest text-xs title-font font-medium text-gray-600 pb-1">- {seminar.format} -</h4>
      <h1 class="ti_headline_blue_bold">{seminar.titel}</h1>
      <p class="ti_headline_blue_light">22.8.2020 von 10:00 bis 19:00 Uhr</p>

      {#if overbooked(seminar)}
        <p class="font-bold text-lg prose-sm text-gray-600 py-4">Anmeldung zur Warteliste</p>
      {:else}
        <p class="text-ti_green_accent font-bold uppercase tracking-wide text-lg prose-sm py-4">Noch Plätze frei</p>
      {/if}
      <hr class="block border border-coolGray-100 w-full mt-2 mb-4" />

      <div class="___pills py-2">
        {#each seminar.kategorien as kategorie (kategorie.id)}
          <span class="text-xs border border-gray-400 text-gray-600 inline-flex px-2 py-1 rounded-full mb-2 mr-2">
            {kategorie.name}
          </span>
        {/each}
      </div>
      <hr class="block border border-coolGray-100 w-full mt-2 mb-4" />
      <slot name="beschreibung">
        <p class="text-black pt-2 pb-4">
          {seminar.kurzbeschreibung}
        </p>
        <p class="text-black py-2">
          <span class="uppercase tracking-widest text-xs title-font font-medium text-gray-600">Kursgebühr</span><br>{seminar.preis} Euro
        </p>
        <p class="pt-2 pb-8">
          <span class="uppercase tracking-widest text-xs title-font font-medium text-gray-600">Veranstaltungsort</span><br>{seminar.veranstaltungsort.adresse}
        </p>

      </slot>





      <div class="seminar_card_content flex-0">
        {#if link && link !== '#'}

            <Button href={link} buttonstyle={'blue'}>Mehr erfahren</Button>
  
        {/if}
      </div>
    </div>
  </div>
</div>
