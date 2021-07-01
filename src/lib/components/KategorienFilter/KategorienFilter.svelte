<script lang="ts">
  export let kategorien;
  import Toggle from '$lib/components/Toggle/Toggle.svelte';
</script>

<div class="flex flex-col lg:flex-row w-full gap-10 items-start">
  <div class="___red_card w-full lg:w-1/2 bg-ti_red_mat p-4 md:p-6 lg:p-8 bg-white text-black shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
    <h2 class="uppercase text-2xl tracking-wider font-bold text-white">Seminare filtern und sortieren</h2>
    {#if kategorien?.length}
      <form class="py-4 flex flex-col space-y-4">
        {#each kategorien as kategorie (kategorie.id)}
          {#if kategorie.seminare.length}
            <Toggle bind:kategorie />
          {/if}
          <hr class="block border border-ti_red_mat-dark w-full my-4" />
        {/each}
        <noscript>
          <button type="submit" class="px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Seminare filtern</button>
        </noscript>
      </form>
    {/if}
  </div>
</div>
