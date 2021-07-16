<script lang="ts">
  import Logo from '$lib/components/Logo/Logo.svelte';
  import { base } from '$app/paths';
</script>

<footer class="relative text-white bg-ti_blue_mat-dark body-font z-10">
  <div class="container py-24 mx-auto flex flex-col">
    <div class="___logoandtitle pb-10">
      <a sveltekit:prefetch href="{base}/" class="outline-none focus:outline-none text-center text-ti_blue_accent hover:text-white transition duration-300 ease-in-out">
        <div class="w-36 md:w-48 mb-10 mx-auto">
          <Logo />
        </div>
        <h1 class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extralight uppercase tracking-wider">
          <span class="font-bold">Tanzimpulse</span> – Institut für Tanzpädagogik
        </h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide">Staatlich anerkanntes Weiterbildungsinstitut</p>
      </a>
    </div>
    <div class="grid grid-flow-col grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-10 lg:gap-32">
      <p class="text-center md:text-right">
        <span class="uppercase font-extrabold tracking-widest text-xs text-ti_blue_accent">Das Büro</span><br />
        Folwiese 20<br />
        51069 Köln<br />
        <br />
        Telefon: 0221 - 68 36 91<br />
        Fax: 0221 - 68 97 797<br />
        E-Mail: <a href="mailto:info@tanzimpulse.de" class="hover:text-ti_blue_accent ease-in-out transition-all duration-300">info@tanzimpulse.de</a><br />
        <br />
        <span class="uppercase tracking-widest text-xs">Bürozeiten</span><br />
        Montag bis Freitag: 8:30 - 13:00 Uhr<br />
        Dienstags und Donnerstags: 20:30 - 22:00 Uhr
      </p>
      <div class="text-center md:text-left">
        <p>
          <span class="uppercase font-extrabold tracking-widest text-xs text-ti_blue_accent">Der Tanzraum</span><br />
          Schweinheimer Straße 54<br />
          51067 Köln<br />
          <br />
          <a href="{base}/impressum" aria-label="Impressum" class="hover:text-ti_blue_accent ease-in-out transition-all duration-300">Impressum</a><br />
          <a href="{base}/datenschutz" aria-label="Datenschutz" class="hover:text-ti_blue_accent ease-in-out transition-all duration-300">Datenschutz</a>
          <br /><br />
          © 2021
        </p>
        <div class="___social_media_icons flex flex-wrap flex-row py-6 justify-center lg:justify-start">
          <a rel="noreferrer" aria-label="Facebook" target="_blank" href="https://www.facebook.com/Tanzimpulse/" class="text-white mr-4 hover:text-ti_blue_accent ease-in-out transition-all duration-300">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a rel="noreferrer" aria-label="Instagram" target="_blank" href="https://www.instagram.com/tanzimpulse_koeln/" class="text-white hover:text-ti_blue_accent ease-in-out transition-all duration-300">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
