<script>
  export let buttonstyle = 'blue';

  const mapping = {
    blue: 'text-ti_blue_accent-light border-ti_blue_accent-light hover:bg-ti_blue_mat-dark hover:text-white ',
    cyan: 'text-ti_cyan_accent-light border-ti_cyan_accent-light hover:bg-ti_cyan_mat-dark hover:text-white ',
    green: 'text-ti_green_accent-light border-ti_green_accent-light hover:bg-ti_green_mat-dark hover:text-white ',
    red: 'text-ti_red_accent-light border-ti_red_accent-light hover:bg-ti_red_mat-dark hover:text-white ',
    gray: 'text-gray-400 border-gray-400 cursor-not-allowed hover:text-gray-400'
  };
</script>

<button type="submit" class="___default_button {mapping[buttonstyle]} p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti transition duration-300 ease-in-out">
  <slot />
</button>
