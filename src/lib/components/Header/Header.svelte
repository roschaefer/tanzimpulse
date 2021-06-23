<script lang="ts">
  import Logo from '$lib/components/Logo/Logo.svelte';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { browser } from '$app/env';

  const linkClass = (path, pge) => {
    const defaults = 'inline-block no-underline py-2 px-4';
    const active = 'text-white';
    const inactive = 'text-white hover:text-gray-200 hover:text-underline';
    return `${pge.path === path ? active : inactive} ${defaults}`;
  };

  let links = [
    { path: `${base}/ueber-uns`, label: 'Über uns' },
    { path: `${base}/workshops`, label: 'Workshops' },
    { path: `${base}/ausbildungen`, label: 'Ausbildungen' }
  ];
  let open = !browser;
  const toggleMenu = () => {
    open = !open;
  };

  $: styledLinks = links.map((link) => {
    return { ...link, class: linkClass(link.path, $page) };
  });


	import { fly } from 'svelte/transition';
	let visible = true;


</script>

<header class="sticky top-0 z-50 bg-ti_blue_mat shadow-lg">
  <nav class="container flex items-center justify-end flex-wrap px-6 py-4 mx-auto w-full">


    <div class="block self-align-end">
      <button
        on:click={toggleMenu}
        class="flex items-center px-2 py-2 focus:outline-none focus:border-0 text-white hover:text-ti_blue_accent"
      >
        <span class="uppercase font-bold px-2">Menu</span>
        <svg
          class="fill-current h-6 w-6 text-ti_blue_accent"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
        >
      </button>
    </div>
  </nav>
</header>

<div
  id="drawer"
  class:hidden={!open}
  on:click={toggleMenu}
  class="absolute top-0 bg-ti_blue_mat-dark w-full h-screen z-50"
>
  <div class="container flex flex-col flex-wrap px-6 py-4 mx-auto w-full">
    <div class="flex justify-end w-full block">
      <button
        
        class="flex items-center px-2 py-2 focus:outline-none focus:border-0 text-white hover:text-ti_blue_accent"
      >
        <span class="uppercase font-bold px-2">Schliessen</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current h-6 w-6 text-ti_blue_accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <hr class="border-black my-2 lg:my-4" />
    <h3 class="text-xs text-ti_blue_accent font-bold uppercase tracking-widest pb-2">
      Tanzpädagogik
    </h3>
    <p>
      <a href="ausbildungen" class="text-white hover:text-ti_blue_accent">Ausbildungen</a><br />
      <a href="workshops" class="text-white hover:text-ti_blue_accent">Workshops</a><br />
      <a href="#" class="text-white hover:text-ti_blue_accent">Tanztrainings</a><br />
    </p>
    <hr class="border-black my-2 lg:my-4" />
    <h3 class="text-xs text-ti_blue_accent font-bold uppercase tracking-widest pb-2">Eindrücke</h3>
    <p>
      <a href="#" class="text-white hover:text-ti_blue_accent">Fotogalerie</a><br />
      <a href="#" class="text-white hover:text-ti_blue_accent">Videos</a><br />
    </p>
    <hr class="border-black my-2 lg:my-4" />
    <h3 class="text-xs text-ti_blue_accent font-bold uppercase tracking-widest pb-2">Kontakt</h3>
    <p>
      <a href="#" class="text-white hover:text-ti_blue_accent">Kontakt und Anfahrt</a><br />
      <a href="team" class="text-white hover:text-ti_blue_accent">Team</a><br />
      <a href="#" class="text-white hover:text-ti_blue_accent">Mitgliedschaften</a><br />
      <a href="#" class="text-white hover:text-ti_blue_accent">Newsletter</a><br />
      <a href="#" class="text-white hover:text-ti_blue_accent">Philosophie</a><br />
    </p>
    <hr class="border-black my-2 lg:my-4" />
    <p>
      <a href="#" class="text-white hover:text-ti_blue_accent">Anmelden</a><br />
    </p>
    <hr class="border-black my-2 lg:my-4" />
    <p>
      <a href="#" class="text-white hover:text-ti_blue_accent">Der (Tanz-) Raum</a><br />
    </p>


    <label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p transition:fly="{{ x: 200, duration: 2000 }}">
		Flies in and out
	</p>
{/if}



  </div>
</div>