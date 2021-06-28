<script lang="ts">
  import Logo from '$lib/components/Logo/Logo.svelte';
</script>

<footer class="text-white bg-ti_blue_mat-dark body-font">
  <div class="container px-4 py-24 mx-auto flex items-center flex-col">
    <div class="___footer_row_1">
      <a href="#" class="flex outline-none focus:outline-none">
        <div class="flex flex-col items-center pa-6 text-center">
          <div class="w-48 text-ti_blue_accent">
            <Logo />
          </div>
          <p class="p-6">
            <span class="uppercase text-md lg:text-xl font-extralight tracking-wider text-ti_blue_accent"><span class="font-extrabold">Tanzimpulse</span> - Institut für Tanzpädagogik</span><br />
            <span class="font-light tracking-wide">Staatlich anerkanntes Weiterbildungsinstitut</span>
          </p>
        </div>
      </a>
    </div>

    <div class="flex flex-wrap flex-col md:flex-row ___footer_row_2">
      <div class="flex-auto text-sm px-12 lg:px-48 py-6 md:text-left text-center">
        <p>
          <span class="uppercase font-extrabold tracking-widest text-xs text-ti_blue_accent">Das Büro</span><br />
          Folwiese 20<br />
          51069 Köln<br />
          <br />
          Telefon: 0221 - 68 36 91<br />
          Fax: 0221 - 68 97 79 7<br />
          E-Mail: info@tanzimpulse.de<br />
          <br />
          <span class="uppercase tracking-widest text-xs">Bürozeiten</span><br />
          Montag bis Freitag:<br />8:30 - 13:00 Uhr<br />
          Dienstags und Donnerstags:<br />17:00 - 22:00 Uhr
        </p>
      </div>
      <div class="flex-auto text-sm px-12 lg:px-48 py-6 md:text-left text-center">
        <p>
          <span class="uppercase font-extrabold tracking-widest text-xs text-ti_blue_accent">Der Tanzraum</span><br />
          Schweinheimer Straße 54<br />
          51067 Köln<br />
          <br />

          <a href="#" aria-label="Impressum">Impressum</a><br />
          <a href="#" aria-label="Datenschutz">Datenschutz</a>
          <br /><br />
          © 2021
        </p>
        <div class="flex flex-wrap flex-row py-6 justify-center lg:justify-start ___social_media_icons">
          <a rel="noreferrer" aria-label="Facebook" target="_blank" href="https://www.facebook.com/Tanzimpulse/" class="text-white mr-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          <a rel="noreferrer" aria-label="Instagram" target="_blank" href="https://www.facebook.com/Tanzimpulse/" class="text-white">
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
