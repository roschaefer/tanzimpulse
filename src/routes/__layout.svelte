<script lang="ts">
  import Logo from '$lib/components/Logo/Logo.svelte';
  import "@fontsource/poppins/300.css"
  import "@fontsource/poppins/400.css"
  import "@fontsource/poppins/700.css"
  import "@fontsource/poppins/900.css"
  import Header from '$lib/components/Header/Header.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <meta
    name="description"
    content="Tanzimpulse bieten eine Berufs begleitende Zusatzqualifikation zur Tanzpädagogin / zum Tanzpädagogen an – eine Weiterbildung für LehrerInnen aller Schulformen, für ErzieherInnen, SozialpädagogInnen und alle, die als therapeutisch tätig sind, wie beispielsweise Logopäden, Physiotherapeuten, Tanztherapeuten oder Übungsleiter aus Vereinen, Referenten aus der Erwachsenenbildung, die Tanz in ihre Arbeit einbeziehen."
  />
  <link rel="apple-touch-icon" sizes="57x57" href="./icons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="./icons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="./icons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="./icons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="./icons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="./icons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="./icons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="./icons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="./icons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="./icons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="./icons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./icons/favicon-16x16.png">
  <link rel="manifest" href="./icons/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="./icons/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">
</svelte:head>

<Header />

<main class="bg-warmGray-200 w-full top-0">
    <div class="___logoheader flex-1 h-2/5 flex bg-white pt-14 pb-48">
      <div class="container mx-auto flex flex-col md:flex-row items-center px-0 md:px-6">
        <div class="___logo w-48 md:w-64 text-ti_blue_mat mb-6 md:mb-0">
          <Logo />
        </div>
        <div class="___title px-8">
          <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-ti_blue_mat tracking-wider"><span class="font-black">Tanzimpulse</span> – Institut für Tanzpädagogik</h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-ti_blue_accent tracking-wide font-light">Staatlich anerkanntes Weiterbildungsinstitut</p>
        </div>
     </div>
    </div>
    <div class="flex-grow container mx-auto">
      <div class="___inner_main -mt-32 mb-20 px-6">
        <slot />
      </div>
  </div>
</main>

<Footer />
