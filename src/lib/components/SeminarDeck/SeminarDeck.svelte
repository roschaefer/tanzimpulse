<script lang="ts">
  import SeminarCard from '$lib/components/SeminarCard/SeminarCard.svelte';
  export let seminare: [];
  import { base } from '$app/paths';
</script>

<section>
  <div class="container my-10">
    <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {#each seminare as seminar (seminar.id)}
        <SeminarCard {seminar} link={`${base}/${seminar.format}/${seminar.url}`} />
      {/each}
    </div>
  </div>
</section>
