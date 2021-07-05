<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import Map from '$lib/components/Map/Map.svelte';
  const mapAttributes = {
    class: 'shadow-ti',
    style: 'width: 100%; height: 38vh; min-height:300px;'
  };
</script>

<svelte:head>
  <title>Tanztrainings</title>
</svelte:head>

<section class="text-gray-600 body-font">


  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div>
      <DefaultCard>
        <h2 class="text-3xl uppercase font-bold text-ti_blue_accent tracking-wide">Tanztrainings</h2>
        <h2 class="text-3xl uppercase text-ti_blue_mat font-extralight tracking-wide mb-4">Yoga / Gymnastik / Kindertanz</h2>
        <p class="pb-8">Die wöchentlichen Kursangebote werden von den Referenten/innen selbst organisiert. Zur Probestunde bitte bei den Referenten/innen anmelden.</p>
        <p class="font-bold">Unterrichtsort</p>
        <p class="py-2">
          Schweinheimer Straße 54<br />
          51067 Köln<br />
        </p>
        <p class="pb-10">Erreichbar mit den Linien 3 + 18 bis Haltestelle Maria-Himmelfahrt-Straße.</p>

        <div class="___leafleat w-full h-2/3">
          <Map {mapAttributes} />
        </div>
      </DefaultCard>

      <div class="bg-ti_green_mat mt-10 sm:p-6 md:p-8 lg:p-10 bg-white text-black shadow-ti">
        <h2 class="text-3xl uppercase text-white font-bold tracking-wide mb-4 ">Vermietung des (Tanz-) Raumes</h2>
        <p class="text-white">Benötigen Sie einen großzügigen Raum mit Atmosphäre für einen Kurs oder Workshop, für eine Ausstellung oder Lesung?</p>
        <p class="pt-10">
          <a sveltekit:prefetch href="{base}/tanzraum" >  <Button buttonstyle={'green'}>Jetzt den (Tanz-) Raum mieten</Button></a>
          </p>
      </div>


    </div>
    <div class="flex flex-col gap-10">
      <DefaultCard>
        <h2 class="uppercase text-3xl font-extralight tracking-wider text-ti_blue_mat pb-4">Montag</h2>
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Moderner Tanz für Kinder + Jugendliche mit Behinderung</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">16:45 - 17:45 Uhr</p>
        <p class="pb-8">Referentin: Ute Seddig, Anmeldung + Info: 0221 . 68 02 729</p>

        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />

        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">5 Rhythmen NEU! 14tägig</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">20:15 - 21:45 Uhr</p>
        <p class="pb-8">Referentin: Susanne Kehrein, Info: <a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" rel="noreferrer" href="mailto:Susanlight@web.de">Susanlight@web.de</a></p>

      </DefaultCard>

      <DefaultCard>
        <h2 class="uppercase text-3xl font-extralight tracking-wider text-ti_blue_mat pb-4">Dienstag</h2>

        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Von Kopf bis Fuß - Gymnastik</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">9:30 - 10:30 Uhr</p>
        <p class="pb-8">Referentin: Ute Seddig, Anmeldung + Info: 0221 - 68 02 729</p>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Moderner Kindertanz für 6-8jährige</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">16:15-17:15 Uhr</p>
        <p>Referentin: Stephanie Blömer, Anmeldung+Info</p>
        <a class="font-bold pt-2 pb-8 uppercase text-xs tracking-wide hover:text-ti_blue_accent ease-in-out transition-all duration-300" rel="”noreferrer”" href="https://www.stephanie-bloemer.de/" target="_blank">stephanie-bloemer.de</a>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Jazz Dance Training & Choreos: Lyrical, Modern, Contemporary Style</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">20:00 - 21:30 Uhr</p>
        <p>Referentin: Susanne Krell, Anmeldung + Info: 0179 . 44 44 347</p>
        <span class="text-3xl text-ti_red_accent uppercase font-bold tracking-wide hover:border-ti_red_accent">!!!!!</span><a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" href="http://www.gib.nrw.de/beratertool/" rel="noreferrer" target="_blank">falscher link</a>
      </DefaultCard>

          <DefaultCard>

        <h2 class="uppercase text-3xl font-extralight tracking-wider text-ti_blue_mat pb-4">Mittwoch</h2>

        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Sufi-Bewegungsmeditation 14tägig</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">8:30 - 9:45 Uhr</p>
        <p class="pb-8">Referentin: Jutta Kuhlmann, Anmeldung+Info: <a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" rel="noreferrer" href="mailto:juttakuhlmann@freenet.de">juttakuhlmann@freenet.de</a></p>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Fit in den Tag - Faszien-Fitness zum Wohlfühlen</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">10:00 - 11:00 Uhr</p>
        <p class="pb-8">Referentin: Nina Buttler, Info: <a class="font-bold pt-2 uppercase text-xs tracking-wider hover:text-ti_blue_accent ease-in-out transition-all duration-300" rel="noreferrer" href="mailto:info@sichtartundweise.de">info@sichtartundweise.de</a></p>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Kreativer Kindertanz für 4 bis 6jährige</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">16:15 - 17:15 Uhr</p>
        <p>Referentin: Stephanie Blömer, Anmeldung+Info</p>
        <a class="font-bold pt-2 pb-8 uppercase text-xs tracking-wide hover:text-ti_blue_accent ease-in-out transition-all duration-300" rel="”noreferrer”" href="https://www.stephanie-bloemer.de/" target="_blank">stephanie-bloemer.de</a>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Moderner Tanz- Training</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">18:15 - 19:45 Uhr</p>
        <p class="pb-8">Referentin: Suna Göncü, Anmeldung + Info: 0173 . 53 59 599</p>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Jazzdance + Balancetraining</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">20:00 - 21:30 Uhr</p>
        <p>Referentin: Sabrina Wöhler, Anmeldung + Info: 0175 . 41 94 029</p>
        <a class="font-bold pt-2 pb-8 uppercase text-xs tracking-wide hover:text-ti_blue_accent ease-in-out transition-all duration-300" rel="”noreferrer”" href="https://www.tanz-kommunikation.de/" target="_blank">tanz-kommunikation.de</a>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Afrikanischer Tanz mit Susanne + Christoph (Trommelbegleitung)</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">derzeit pausiert</p>
        <p>Gelegentliche Mini-Workshops. Referentin: Susanne Peters, Anmeldung+Info: 0160 . 94 65 98 94</p>
        <a class="font-bold pt-2 pb-8 uppercase text-xs tracking-wide hover:text-ti_blue_accent ease-in-out transition-all duration-300" rel="”noreferrer”" href="http://www.praxis-susanne-peters.de/" target="_blank">praxis-susanne-peters.de</a>

      </DefaultCard>

      <DefaultCard>
        <h2 class="uppercase text-3xl font-extralight tracking-wider text-ti_blue_mat pb-4">Donnerstag</h2>
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Von Kopf bis Fuß - Gymnastik</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">17:30 - 18:30 Uhr</p>
        <p class="pb-8">Referentin: Ute Seddig, Anmeldung + Info: 0221 . 68 02 729</p>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Moderner Tanz - Training für Einsteiger/innen</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">18:30 - 20:00 Uhr</p>
        <p class="pb-8">Referentin: Suna Göncü, Anmeldung + Info: 0173 . 53 59 599</p>
        <hr class="block border border-coolGray-100 w-full mt-8 mb-6" />
        <h2 class="text-2xl uppercase font-bold text-ti_blue_accent tracking-wide">Moderner Tanz - Training für Fortgeschrittene</h2>
        <p class="text-2xl text-ti_blue_mat font-light uppercase prose-sm">20:00 - 21:30 Uhr</p>
        <p class="pb-8">Referentin: Suna Göncü, Anmeldung + Info: 0173 . 53 59 599</p>

      </DefaultCard>
    </div>
  </div>

 
</section>
