<script lang="ts">
  export let query;
  const onInput = (e) => {
    query = e.target.value;
  };
</script>

<div class="flex hover:shadow-ti focus:shadow-ti rounded-full">
  <input bind:value={query} on:input={onInput} class="w-full border-2 border-ti_red_mat-dark hover:border-white focus:border-white bg-ti_red_mat px-2 md:px-8 py-4 text-white text-xl rounded-l-full focus:outline-none focus:ring-0 placeholder-white transition duration-300 ease-in-out" type="text" placeholder="Nach Begriff suchen ..." />
  <button class="w-auto flex justify-end items-center border-2 border-black bg-black text-white pl-4 pr-6 rounded-r-full hover:bg-ti_red_accent hover:border-white focus:border-white focus:outline-none focus:ring-0 transition duration-300 ease-in-out">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>
</div>
