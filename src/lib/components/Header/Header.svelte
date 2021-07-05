<script lang="ts">
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
</script>

<header class="sticky top-0 z-50 bg-ti_blue_mat shadow-ti_hover">
  <nav class="container flex items-center justify-end flex-wrap px-6 py-4 mx-auto w-full">
    <div class="block self-align-end">
      <button on:click={toggleMenu} class="flex items-center px-2 py-2 focus:border-0 text-white tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">
        <span class="uppercase font-bold px-2 ">Menu</span>
        <svg class="fill-current h-6 w-6 text-ti_blue_accent" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
  </nav>
</header>

<aside id="drawer" style="opacity:0.99;" on:click={toggleMenu} class="{open ? 'translate-x-0' : 'translate-x-full'} transform bg-ti_blue_mat-dark top-0 left-0 w-full fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50">
  <div class="container flex flex-col flex-wrap px-6 py-4 mx-auto w-full">
    <div class="flex justify-end w-full block">
      <button class="flex items-center px-2 py-2 focus:border-0 text-white uppercase font-bold tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">
        <span class="uppercase font-bold px-2">Schliessen</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 w-6 text-ti_blue_accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <hr class="border-black my-2 lg:my-4" />
    <p>
      <a sveltekit:prefetch href="{base}/" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Start</a><br />
    </p>
    <hr class="border-black my-2 lg:my-4" />
    <h3 class="text-xs text-ti_blue_accent font-bold uppercase tracking-widest pb-2">Tanzpädagogik</h3>
    <p>
      <a sveltekit:prefetch href="{base}/ausbildungen" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Ausbildungen</a><br />
      <a sveltekit:prefetch href="{base}/workshops" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Workshops</a><br />
      <a href="{base}/tanztrainings" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Tanztrainings</a><br />
    </p>
    <hr class="border-black my-2 lg:my-4" />
    <h3 class="text-xs text-ti_blue_accent font-bold uppercase tracking-widest pb-2">Eindrücke</h3>
    <p>
      <a href="{base}/fotogalerie" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Fotogalerie</a><br />
      <a href="{base}/videos" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Videos</a><br />
    </p>
    <hr class="border-black my-2 lg:my-4" />
    <h3 class="text-xs text-ti_blue_accent font-bold uppercase tracking-widest pb-2">Kontakt</h3>
    <p>
      <a href="{base}/kontakt" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Kontakt und Anfahrt</a><br />
      <a href="{base}/team" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Team</a><br />
      <a href="{base}/mitgliedschaften" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Mitgliedschaften</a><br />
      <!--<a href="{base}/newsletter" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Newsletter</a><br />-->
      <a href="{base}/philosophie" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Philosophie</a><br />
    </p>
    <hr class="border-black my-2 lg:my-4" />
    <p>
      <a sveltekit:prefetch href="{base}/tanzraum" class="text-white hover:text-ti_blue_accent text-base lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent transition duration-300 ease-in-out">Der (Tanz-) Raum</a><br />
    </p>
  </div>
</aside>
