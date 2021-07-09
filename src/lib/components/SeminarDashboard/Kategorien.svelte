<script lang="ts">
  export let kategorien;
  import Toggle from '$lib/components/Toggle/Toggle.svelte';
  import Button from '$lib/components/Button/Button.svelte';
</script>

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
      <Button buttonstyle={'white'} type="submit" class="px-3 py-4 text-white rounded-md focus:outline-none">Seminare filtern</Button>
    </noscript>
  </form>
{/if}
