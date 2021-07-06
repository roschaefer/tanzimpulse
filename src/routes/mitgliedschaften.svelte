<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>

<svelte:head>
  <title>Mitgliedschaften</title>
</svelte:head>

<section>
  <div class="container">
    <div class="grid grid-cols-1 gap-10">
      <DefaultCard>
        <h2 class="text-3xl uppercase font-bold text-ti_blue_accent tracking-wide">Mitgliedschaften</h2>
      
        <ul class="py-4 mb-4">
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://www.dbt-remscheid.de/" rel="noreferrer" target="_blank">Deutschen Bundesverband Tanz</a></li>
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://www.lag-tanz-nrw.de/" rel="noreferrer" target="_blank"> Landesarbeitsgemeinschaft Tanz NRW</a></li>
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://www.weiterbildung-koeln.de/" rel="noreferrer" target="_blank">Qualitätsgemeinschaft Berufliche Bildung Region Köln e.V.</a></li>
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="https://aktiontanz.de/" rel="noreferrer" target="_blank"> AktionTanz - Bundesverband Tanz in Bildung und Gesellschaft e.V.</a></li>
        </ul>

        <h2 class="text-3xl uppercase font-bold text-ti_blue_accent tracking-wide">Kooperationspartner</h2>
        <ul class="py-4 mb-4">
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://www.neues-lernen.info/home.html" rel="noreferrer" target="_blank">Bildungswerk neues lernen</a></li>
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://www.sk-kultur.de/tanz/" rel="noreferrer" target="_blank">Deutsches Tanzarchiv Köln / SK-Stiftung Kultur</a></li>
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://www.landesbuerotanz.de/tanzvermittlung/" rel="noreferrer" target="_blank">Tanzvermittlung | Landesbüro Tanz NRW</a></li>
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="https://ursulaneumann.de" rel="noreferrer" target="_blank">Ursula Neumann | Unternehmensberatung</a></li>
        <li><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://www.musenkuss-koeln.de/" rel="noreferrer" target="_blank">Musenkuss Köln</a></li>
        <li>  <span class="text-3xl text-ti_red_accent uppercase font-bold tracking-wide hover:border-ti_red_accent">!!!!!</span>  <a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://tanzlehrer-berufsausbildungsakademie.de/index.php/kindertanzlehrer-in" target="_blank">Tanzschule Latus</a></li>
        </ul>
        <p class="py-2">TANZIMPULSE sind nach § 9 AWBG als staatliches Weiterbildungs-Institut anerkannt. Sonder- oder <a href="http://www.bildungsurlaub.de/bildungsurlaub_nrw.html" rel="noreferrer" target="_blank">Bildungsurlaub</a> kann somit beantragt werden.</p>
        <p class="py-2">Hier kann unser <a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="{base}/content/Zertifikat_2018_IHK.pdf" target="_blank"> Zertifikat der Qualitätsgemeinschaft Berufliche Bildung Region Köln e.V.</a> heruntergeladen werden.</p>
      </DefaultCard>

      
    </div>
  </div>
</section>
