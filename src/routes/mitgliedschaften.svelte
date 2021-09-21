<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  export const prerender = true;
</script>

<svelte:head>
  <title>Mitgliedschaften</title>
</svelte:head>

<section>
  <div class="container">
    <div class="grid grid-cols-2 gap-10">
      <DefaultCard>
        <h2 class="ti_headline_blue_bold">Mitgliedschaften</h2>

        <ul class="py-4 mb-4">
          <li><a class="hyperlink" href="http://www.lag-tanz-nrw.de/" rel="noreferrer" target="_blank"> Landesarbeitsgemeinschaft Tanz NRW</a></li>
          <li><a class="hyperlink" href="http://www.weiterbildung-koeln.de/" rel="noreferrer" target="_blank">Qualitätsgemeinschaft Berufliche Bildung Region Köln e.V.</a></li>
          <li><a class="hyperlink" href="https://aktiontanz.de/" rel="noreferrer" target="_blank"> AktionTanz - Bundesverband Tanz in Bildung und Gesellschaft e.V.</a></li>
        </ul>

        <h2 class="ti_headline_blue_bold">Kooperationspartner</h2>
        <ul class="py-4 mb-4">
          <li><a class="hyperlink" href="http://www.neues-lernen.info/home.html" rel="noreferrer" target="_blank">Bildungswerk neues lernen</a></li>
          <li><a class="hyperlink" href="http://www.sk-kultur.de/tanz/" rel="noreferrer" target="_blank">Deutsches Tanzarchiv Köln / SK-Stiftung Kultur</a></li>
          <li><a class="hyperlink" href="http://www.landesbuerotanz.de/tanzvermittlung/" rel="noreferrer" target="_blank">Tanzvermittlung | Landesbüro Tanz NRW</a></li>
          <li><a class="hyperlink" href="https://ursulaneumann.de" rel="noreferrer" target="_blank">Ursula Neumann | Unternehmensberatung</a></li>
          <li><a class="hyperlink" href="http://www.musenkuss-koeln.de/" rel="noreferrer" target="_blank">Musenkuss Köln</a></li>
          <li><a class="hyperlink" href="https://tanzschule-latus.de/" target="_blank">Tanzschule Latus</a></li>
        </ul>
        <p class="py-2">TANZIMPULSE sind nach § 9 AWBG als staatliches Weiterbildungs-Institut anerkannt. <a class="hyperlink" href="https://www.bildungsurlaub.de/bildungsurlaub_nrw.html" rel="noreferrer" target="_blank">Sonder- oder Bildungsurlaub</a> kann somit beantragt werden.</p>
        <p class="py-2"><a class="hyperlink" href="{base}/content/Zertifikat_2021_IHK.pdf" target="_blank">Zertifikat der Qualitätsgemeinschaft Berufliche Bildung Region Köln e.V. (PDF, 1,3MB)</a></p>
      </DefaultCard>
    </div>
  </div>
</section>
