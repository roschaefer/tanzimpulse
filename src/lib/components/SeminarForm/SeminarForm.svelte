<script lang="ts">
  import { base } from '$app/paths';
  import { enhance } from '$lib/form.ts';
  import Button from '$lib/components/Button/Button.svelte';

  export let action;
  export let result;
  export let error = () => {};
  export let pending = () => {};
</script>

<div class="flex flex-col p-4 md:p-6 lg:p-8 overflow-hidden bg-white shadow-ti transition duration-300 ease-in-out">
  <form {action} method="post" use:enhance={{ result, error, pending }}>
    <h2 class="ti_headline_blue_bold mb-4">Anmeldeformular</h2>

    <div class="flex flex-col space-y-6 mb-8">
      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >Name
        <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="name" placeholder="Max Mustermann" required />
      </label>
      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >E-Mail Adresse
        <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="email" name="email" placeholder="max@mustermann.de" required />
      </label>
      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >Adresse
        <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="adresse" placeholder="Musterstrasse 42, 12345 Musterstadt" required />
      </label>

      <div class="___registration checkboxes flex flex-col space-y-6 mb-8">
        <label class="flex mt-4">
          <input class="mr-4 h-6 w-6 block bg-white border-2 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0" type="checkbox" name="datenverarbeitung" required />
          <p>Ich habe die <a class="hyperlink" href="{base}/content/AGB_2020.pdf" target="_blank">AGBs</a>, die <a class="hyperlink" href="{base}/content/Widerrufsbelehrung_2020.pdf" target="_blank">Widerrufsbelehrung</a> sowie die Maßnahmen zum <a class="hyperlink" sveltekit:prefetch href="{base}/datenschutz">Datenschutz</a> gelesen und akzeptiert</p>
       
        </label>
        <label class="flex items-center">
          <input class="mr-4 h-6 w-6 block bg-white border-2 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0" type="checkbox" name="fotoveroeffentlichung" />
          Ich willige ein, dass Kursfotos von mir später auf der Webseite veröffentlicht werden dürfen
        </label>
        <label class="flex items-center">
          <input class="mr-4 h-6 w-6 block bg-white border-2 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0" type="checkbox" name="newsletter" />
          Newsletter abonnieren
        </label>
      </div>
    </div>

    <Button buttonstyle={'blue'}>Anmelden</Button>

    <!--

    TODO: wie kann man oben den 'type' übergeben?

  <button type="submit" class="___default_button p-4 my-6 w-full rounded-full border-2 border-ti_blue_accent-dark text-ti_blue_accent-dark font-extrabold text-sm tracking-widest uppercase outline-none focus:outline-none hover:border-ti_blue_accent-light hover:text-ti_blue_accent-light hover:bg-white focus:border-ti_red_accent focus:text-ti_red_accent focus:bg-white focus:ring-0 transition duration-300 ease-in-out">Anmelden</button>
  -->
  </form>
</div>
