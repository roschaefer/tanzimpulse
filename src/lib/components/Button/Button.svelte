<script>
	export let buttonstyle = 'red'

  const mapping={
    red: 'text-ti_red_accent border-ti_red_accent', 
    blue: 'text-ti_blue_accent border-ti_blue_accent', 
  }  
</script>


<button class="___default_button {mapping[buttonstyle]} bg-white p-4 my-6 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase transition duration-300 ease-in-out">
  <slot></slot>
</button>
