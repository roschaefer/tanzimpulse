<script lang="ts">
  export let kategorien;
  import Toggle from '$lib/components/Toggle/Toggle.svelte';
  import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="flex flex-col lg:flex-row w-full gap-10 items-start">
  <div class="___red_card w-full lg:w-1/2 bg-ti_red_mat p-4 md:p-6 lg:p-8 bg-white text-black shadow-ti">
    <h2 class="uppercase text-2xl tracking-wider font-bold text-white">Seminare filtern und sortieren</h2>
    {#if kategorien?.length}
      <form class="py-4 flex flex-col space-y-4">
        {#each kategorien as kategorie (kategorie.id)}
          {#if kategorie.seminare.length}
            <Toggle bind:kategorie />
          {/if}
          <hr class="block border border-ti_red_mat-dark focus:text-ti_red_mat-dark w-full my-4" />
        {/each}
        <noscript>
          <Button buttonstyle={"white"} type="submit" class="px-3 py-4 text-white rounded-md focus:outline-none">Seminare filtern</Button>
        </noscript>
      </form>
    {/if}

<!-- search -->

<div class="flex hover:shadow-ti focus:shadow-ti rounded-full">
  <input class="w-full border-2 border-ti_red_mat-dark hover:border-white focus:border-white bg-ti_red_mat px-2 md:px-8 py-4 text-white text-xl rounded-l-full focus:outline-none focus:ring-0 placeholder-white transition duration-300 ease-in-out" type="text" placeholder="Nach Begriff suchen ...">
  <button class="w-auto flex justify-end items-center border-2 border-black bg-black text-white pl-4 pr-6 rounded-r-full hover:bg-ti_red_accent hover:border-white focus:border-white focus:outline-none focus:ring-0 transition duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
  </button>
</div>



<!-- -->


  </div>
</div>
