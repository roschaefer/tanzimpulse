<script context="module" lang="ts">
  import { base } from '$app/paths';
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
        status,
        error
      }
    };
  }
</script>

<script>
  export let title;
  export let status;
  export let error;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="w-9/12 m-auto flex items-center justify-center">
  <div class="bg-white p-12 shadow-ti overflow-hidden text-center">
    <h2 class="text-2xl uppercase font-extrabold text-ti_blue_accent tracking-wide text-center mb-2">Error {status}</h2>
    <p class="font-bold">{error.message}</p>
  </div>
</div>
