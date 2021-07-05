<script>
  export let buttonstyle = 'blue';

  const mapping = {
    blue: 'text-ti_blue_accent-light border-ti_blue_accent-light hover:bg-ti_blue_mat-dark',
    cyan: 'text-ti_cyan_accent-light border-ti_cyan_accent-light hover:bg-ti_cyan_mat-dark',
    green: 'text-ti_green_accent-light border-ti_green_accent-light hover:bg-ti_green_mat-dark',
    red: 'text-ti_red_accent-light border-ti_red_accent-light hover:bg-ti_red_mat-dark',
    gray: 'text-gray-400 border-gray-400 cursor-not-allowed'
  };
</script>

<button type="submit" class="___default_button {mapping[buttonstyle]} p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti hover:text-white focus:outline-none transition duration-300 ease-in-out">
  <slot />
</button>
