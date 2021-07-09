<script lang="ts">
  export let query;
  const onInput = (e) => {
    query = e.target.value;
  };
</script>

<div class="mt-4 flex hover:shadow-ti focus:shadow-ti rounded-full">
  <input bind:value={query} on:input={onInput} class="w-full border-2 border-ti_red_mat-dark hover:border-white focus:border-white bg-ti_red_mat px-8 py-4 text-white text-xl rounded-full focus:outline-none focus:ring-0 placeholder-white transition duration-300 ease-in-out" type="text" placeholder="Nach Begriff suchen ..." />

</div>
