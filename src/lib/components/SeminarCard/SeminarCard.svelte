<script lang="ts">
  import { overbooked } from '$lib/helpers';
  export let seminar: {};
  export let link = '#';
</script>

<a class="p-4 md:w-1/3" sveltekit:prefetch href={link}>
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    {#if seminar.bild}
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={seminar.bild.medium} alt={seminar.bild.fileName || 'Fehlendes Bild'} />
    {/if}
    <div class="p-6">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        {seminar.format}
      </h2>
      <h3 class="tracking-widest text-xs title-font font-medium mb-1 {overbooked(seminar) ? 'text-red-400' : 'text-gray-500'}">
        {#if seminar.maximaleAnzahlTeilnehmer}
          {seminar.teilnehmer.length}/{seminar.maximaleAnzahlTeilnehmer} Teilnehmer
        {:else}
          {seminar.teilnehmer.length} Teilnehmer
        {/if}
      </h3>
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{seminar.titel}</h1>
      {#each seminar.kategorien as kategorie (kategorie.id)}
        <span class="pr-1 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
          {kategorie.name}
        </span>
      {/each}
      <slot name="beschreibung">
        <p class="leading-relaxed mb-3 prose-sm">
          {seminar.kurzbeschreibung}
        </p>
      </slot>
      {#if link && link !== '#'}
        <div class="flex items-center flex-wrap ">
          <span class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >Mehr
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </span>
          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>6
          </span>
        </div>
      {/if}
    </div>
  </div>
</a>
