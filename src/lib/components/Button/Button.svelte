<script>
	export let buttonstyle = 'blue'

  const mapping={
    blue: 'text-ti_blue_mat border-ti_blue_mat hover:border-ti_blue_accent hover:text-ti_blue_accent', 
    red: 'text-ti_red_mat border-ti_red_mat hover:border-ti_red_accent hover:text-ti_red_accent',  
    green: 'text-ti_green_mat border-ti_green_mat hover:border-ti_green_accent hover:text-ti_green_accent',
    gray: 'text-gray-400 border-gray-400 cursor-not-allowed', 
 
  }  
</script>


<button type="submit" class="___default_button {mapping[buttonstyle]} bg-white p-4 my-6 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none focus:outline-none transition duration-300 ease-in-out">
  <slot></slot>
</button>
