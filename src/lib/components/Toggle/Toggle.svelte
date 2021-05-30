<script lang="ts">
  export let kategorie;
  export let checked = false;
</script>

<div class="flex items-center w-full">
  <label class="flex items-center cursor-pointer">
    <div class="relative">
      <input
        type="checkbox"
        name="kategorie"
        value={kategorie.id}
        bind:checked={kategorie.selected}
        class="sr-only"
      />
      <div class="dot-background block bg-gray-600 w-14 h-8 rounded-full transition" />
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
    </div>
    <div class="ml-3 text-gray-700 font-medium">{kategorie.name} ({kategorie.seminare.length})</div>
  </label>
</div>

<style>
  input:checked ~ .dot {
    transform: translateX(100%);
  }
  input:checked ~ .dot-background {
    background-color: #48bb78;
  }
</style>
