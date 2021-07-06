<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import { overbooked, dateFormat } from '$lib/helpers.ts';
  import { base } from '$app/paths';
  export let seminare = [];
  export let color = 'white';
</script>

{#each seminare as seminar (seminar.id)}
  <div class="___start_single_seminar_teaser flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center">
    <div class="___startpage_seminar_basics flex-1">
      <p class="___startpage_seminar_date">{dateFormat.format(new Date(seminar.datum))}</p>
      <p class="___startpage_seminar_title font-bold uppercase tracking-wider">{seminar.titel}</p>
      <p class="___startpage_seminar_status py-2 uppercase text-ti_green_accent-light text-sm font-extrabold tracking-wider">
        {#if overbooked(seminar)}
          Anmeldung zur Warteliste
        {:else}
          Noch Plätze frei!
        {/if}
      </p>
    </div>

    <p class="pt-4 pb-8">
      <a sveltekit:prefetch href={`${base}/${seminar.format}/${seminar.url}`}>
        <Button buttonstyle={color}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg></Button
        ></a
      >
    </p>
  </div>
{/each}
<hr class="block border border-ti_cyan_mat-dark w-full my-4" />
