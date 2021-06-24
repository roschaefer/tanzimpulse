<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Start | Tanzimpulse</title>
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col gap-10">
    <div class="___slideshow flex flex-row w-full h-3/6  p-6 bg-ti_red_mat text-white">
      Hier kommt die Slideshow
    </div>

    <div class="___main_cards flex flex-col lg:flex-row w-full gap-10 items-start">
      <div class="___card1 bg-ti_blue_mat p-8 text-white shadow-sm hover:shadow-lg flex-1">
        <h2 class="text-ti_blue_accent font-bold text-2xl uppercase tracking-wide">
          Die Ausbildungen
        </h2>
        <p class="pt-4 pb-8">
          Bilden Sie sich mit unseren Zusatzqualifikationen zur Tanzpädagogin oder zum Tanzpädagogen
          weiter. Weitere wichtige Tipps und Hinweise, die das Angebot schmackhaft machen.
        </p>
        <button
          class="p-4 mb-12 w-full rounded-full border-2 border-ti_blue_accent text-ti_blue_accent font-black text-sm tracking-widest uppercase hover:border-ti_blue_accent-light hover:text-ti_blue_accent-light hover:bg-ti_blue_mat-dark transition duration-300 ease-in-out"
          >Mehr erfahren</button
        >

        <!-- startpage single seminar -->
        <div
          class="___start_single_seminar_teaser flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center"
        >
          <div class="___startpage_seminar_basics flex-1">
            <p class="___startpage_seminar_date">2. August - 11:00 Uhr bis 12:00 Uhr</p>
            <p class="___startpage_seminar_title font-bold uppercase tracking-wider">
              Titel der Ausbildung
            </p>
            <p
              class="___startpage_seminar_status py-2 uppercase text-ti_green_accent-light text-sm font-black tracking-wider"
            >
              Noch Plätze frei
            </p>
          </div>
          <div class="___startpage_seminar_more_icon flex-0 self-align-center">
            <button
              class="rounded-full h-12 w-12 flex items-center justify-center border-2 border-ti_blue_accent text-ti_blue_accent font-bold text-sm tracking-wide uppercase hover:border-ti_blue_accent-light hover:text-ti_blue_accent-light hover:bg-ti_blue_mat-dark transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr class="block border border-ti_blue_mat-dark w-full my-4" />
        <!-- end -->

        <!-- startpage single seminar -->
        <div
          class="___start_single_seminar_teaser flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center"
        >
          <div class="___startpage_seminar_basics flex-1">
            <p class="___startpage_seminar_date">4. August - 11:00 Uhr bis 12:00 Uhr</p>
            <p class="___startpage_seminar_title font-bold uppercase tracking-wider">
              Titel der Ausbildung
            </p>
            <p class="___startpage_seminar_status py-2 uppercase text-sm font-bold tracking-wider">
              – Warteliste -
            </p>
          </div>
          <div class="___startpage_seminar_more_icon flex-0 self-align-center">
            <button
              class="rounded-full h-12 w-12 flex items-center justify-center border-2 border-ti_blue_accent text-ti_blue_accent font-bold text-sm tracking-wide uppercase hover:border-ti_blue_accent-light hover:text-ti_blue_accent-light hover:bg-ti_blue_mat-dark transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr class="block border border-ti_blue_mat-dark w-full my-4" />
        <!-- end -->

        <!-- startpage single seminar -->
        <div
          class="___start_single_seminar_teaser flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center"
        >
          <div class="___startpage_seminar_basics flex-1">
            <p class="___startpage_seminar_date">2. September - 11:00 Uhr bis 12:00 Uhr</p>
            <p class="___startpage_seminar_title font-bold uppercase tracking-wider">
              Titel der Ausbildung
            </p>
            <p
              class="___startpage_seminar_status py-2 uppercase text-ti_green_accent-light text-sm font-black tracking-wider"
            >
              Noch Plätze frei
            </p>
          </div>
          <div class="___startpage_seminar_more_icon flex-0 self-align-center">
            <button
              class="rounded-full h-12 w-12 flex items-center justify-center border-2 border-ti_blue_accent text-ti_blue_accent font-bold text-sm tracking-wide uppercase hover:border-ti_blue_accent-light hover:text-ti_blue_accent-light hover:bg-ti_blue_mat-dark transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr class="block border border-ti_blue_mat-dark w-full my-4" />
        <!-- end -->
      </div>

      <div class="___card2 bg-ti_cyan_mat p-8 text-white shadow-sm hover:shadow-lg flex-1">
        <h2 class="text-ti_cyan_accent font-bold text-2xl uppercase tracking-wide">
          Die Workshops
        </h2>
        <p class="pt-4 pb-8">
          Integrieren Sie neue tanzpädagogischeImpulse in Ihren Arbeitsalltag.Ideal für Erzieher,
          Lehrer, Therapeuten, Übunugsleiter und viele mehr!
        </p>
        <button
          class="p-4 mb-12 w-full rounded-full border-2 border-ti_cyan_accent text-ti_cyan_accent font-black text-sm tracking-widest uppercase hover:border-ti_blue_cyan-light hover:text-ti_cyan_accent-light hover:bg-ti_cyan_mat-dark transition duration-300 ease-in-out"
          >Mehr erfahren</button
        >

        <!-- startpage single seminar -->
        <div
          class="___start_single_seminar_teaser flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center"
        >
          <div class="___startpage_seminar_basics flex-1">
            <p class="___startpage_seminar_date">2. August - 11:00 Uhr bis 12:00 Uhr</p>
            <p class="___startpage_seminar_title font-bold uppercase tracking-wider">
              Titel der Ausbildung
            </p>
            <p
              class="___startpage_seminar_status py-2 uppercase text-ti_green_accent-light text-sm font-black tracking-wider"
            >
              Noch Plätze frei
            </p>
          </div>
          <div class="___startpage_seminar_more_icon flex-0 self-align-center">
            <button
              class="rounded-full h-12 w-12 flex items-center justify-center border-2 border-ti_cyan_accent text-ti_cyan_accent font-bold text-sm tracking-wide uppercase hover:border-ti_cyan_accent-light hover:text-ti_cyan_accent-light hover:bg-ti_cyan_mat-dark transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr class="block border border-ti_cyan_mat-dark w-full my-4" />
        <!-- end -->

        <!-- startpage single seminar -->
        <div
          class="___start_single_seminar_teaser flex flex-row lg:flex-col xl:flex-row gap-x-4 items-center"
        >
          <div class="___startpage_seminar_basics flex-1">
            <p class="___startpage_seminar_date">2. August - 11:00 Uhr bis 12:00 Uhr</p>
            <p class="___startpage_seminar_title font-bold uppercase tracking-wider">
              Titel der Ausbildung
            </p>
            <p class="___startpage_seminar_status py-2 uppercase text-sm font-bold tracking-wider">
              – Warteliste -
            </p>
          </div>
          <div class="___startpage_seminar_more_icon flex-0 self-align-center">
            <button
              class="rounded-full h-12 w-12 flex items-center justify-center border-2 border-ti_cyan_accent text-ti_cyan_accent font-bold text-sm tracking-wide uppercase hover:border-ti_cyan_accent-light hover:text-ti_cyan_accent-light hover:bg-ti_cyan_mat-dark transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr class="block border border-ti_cyan_mat-dark w-full my-4" />
        <!-- end -->
      </div>

      <div class="___card3 bg-ti_green_mat p-8 text-white shadow-sm hover:shadow-lg flex-1">
        <h2 class="text-ti_green_accent font-bold text-2xl uppercase tracking-wide">
          Der (Tanz-) Raum
        </h2>
        <p class="pt-4 pb-8">
          Alle Informationen zum Tanzraum. Den kann man nach Rücksprache auch mieten für
          Veranstaltungen, wie Lesungen, etc.
        </p>
        <button
          class="p-4 w-full rounded-full border-2 border-ti_green_accent text-ti_green_accent font-black text-sm tracking-widest uppercase hover:border-ti_blue_green-light hover:text-ti_green_accent-light hover:bg-ti_green_mat-dark transition duration-300 ease-in-out"
          >Mehr erfahren</button
        >
      </div>
    </div>

    <div
      class="___default_card p-8 bg-white text-black shadow-sm hover:shadow-lg transition duration-300 ease-in-out"
    >
      <h2 class="___default_h2_headline font-bold text-md lg:text-2xl text-ti_blue_mat">
        Default Headline h2
      </h2>
      <p class="___default_plain_text">Lorem ipsum</p>
      <p
        class="___default_status py-2 uppercase text-ti_green_accent text-sm font-black tracking-wider"
      >
        Noch Plätze frei
      </p>
      <button
        class="___default_button p-4 my-6 w-full rounded-full border-2 border-ti_blue_mat text-ti_blue_mat font-black text-sm tracking-widest uppercase hover:border-ti_blue_accent-light hover:text-ti_blue_accent-light hover:bg-ti_blue_mat-dark transition duration-300 ease-in-out"
        >Mehr erfahren</button
      >
    </div>
  </div>
</section>
