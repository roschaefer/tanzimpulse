<script lang="ts">
  export let kategorie;
  export let checked = false;
</script>

<div class="flex items-center w-full">
  <label class="flex cursor-pointer flex-row-reverse w-full">
    <div class="relative flex-0">
      <input type="checkbox" name="kategorie" value={kategorie.id} bind:checked={kategorie.selected} class="sr-only" />
      <div class="dot-background block bg-ti_red_mat border-2 w-14 h-8 rounded-full transition" />
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
    </div>
    <div class="text-2xl text-white font-extralight tracking-wide flex-1  transition duration-300 ease-in-out">{kategorie.name} ({kategorie.seminare.length})</div>
  </label>
</div>

<style>
  input:checked ~ .dot {
    transform: translateX(100%);
  }
  input:checked ~ .dot-background {
    background-color: #539827;
  }
</style>
