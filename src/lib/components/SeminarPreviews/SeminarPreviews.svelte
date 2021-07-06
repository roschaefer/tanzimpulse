<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import { overbooked, dateFormat } from '$lib/helpers.ts';
  import { base } from '$app/paths';
  export let seminare = [];
  export let color = 'white';
</script>

{#each seminare as seminar (seminar.id)}
  <div class="flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center">
    <div class="flex-1">
      <p class="text-lg">{dateFormat.format(new Date(seminar.datum))}</p>

      <p class="text-lg font-bold uppercase tracking-wide">{seminar.titel}</p>
      
        {#if overbooked(seminar)}
        <p class="uppercase text-white text-sm tracking-wide">Anmeldung zur Warteliste </p>
        {:else}
        <p class="uppercase text-ti_green_accent-light text-sm tracking-wide">Noch Plätze frei!</p>
        {/if}
     
    </div>

    <p>
      <a sveltekit:prefetch href={`${base}/${seminar.format}/${seminar.url}`}>
        <Button buttonstyle={color}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg></Button
        ></a
      >
    </p>

  </div>
  <hr class="block border border-black w-full my-4 opacity-20" />
{/each}

