<script lang="ts">
  export let query;
  const onInput = (e) => {
    query = e.target.value;
  };
</script>

<div class="mt-4 flex hover:shadow-ti focus:shadow-ti rounded-full">
  <div class="relative w-full">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <button aria-label="Nach Begriff suchen und sortieren" type="submit" class="flex items-center px-4 py-4 focus:outline-none focus:shadow-outline">
        <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </span>
    <input bind:value={query} on:input={onInput} class="w-full border-2 border-ti_red_mat-dark hover:border-white focus:border-white bg-ti_red_mat pl-14 pr-8 py-4 text-white text-xl rounded-full focus:outline-none focus:ring-0 placeholder-white transition duration-300 ease-in-out" type="text" placeholder="Nach Begriff suchen ..." />
  </div>
</div>
