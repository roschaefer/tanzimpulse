<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import { overbooked, dateFormat } from '$lib/helpers.ts';
  import { base } from '$app/paths';
  export let seminare = [];
  export let color = 'white';
</script>

{#each seminare as seminar (seminar.id)}
  <div class="flex flex-col md:flex-row lg:flex-row">
    <div class="flex-grow	pt-2 pb-2 pl-2 pr-4">
      <p class="text-lg font-bold uppercase tracking-wide leading-6">{seminar.titel}</p>
      <p class="text-lg font-extralight">{dateFormat.format(new Date(seminar.datum))}</p>

      {#if overbooked(seminar)}
        <p class="uppercase text-white text-sm font-bold tracking-wider pt-2">Anmeldung zur Warteliste</p>
      {:else}
        <p class="uppercase text-ti_green_accent-light font-bold text-sm tracking-wider pt-2">Noch Plätze frei!</p>
      {/if}
    </div>
    <div class="flex-grow-0 flex mx-auto items-center p-2">
      <a sveltekit:prefetch href={`${base}/${seminar.format}/${seminar.url}`}>
        <Button buttonstyle={color}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg></Button></a>
    </div>
  </div>
  <hr class="block border border-black w-full my-2 opacity-20" />
{/each}
