<script lang="ts">
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
    content="Tanzimpulse bieten eine Berufs begleitende Zusatzqualifikation zur Tanzpädagogin / zum Tanzpädagogen an - eine Weiterbildung für LehrerInnen aller Schulformen, für ErzieherInnen, SozialpädagogInnen und alle, die als therapeutisch tätig sind, wie beispielsweise Logopäden, Physiotherapeuten, Tanztherapeuten oder Übungsleiter aus Vereinen, Referenten aus der Erwachsenenbildung, die Tanz in ihre Arbeit einbeziehen."
  />
</svelte:head>

<Header />


<main class="bg-coolGray-50 w-full">
    <div class="flex-grow container mx-auto">
    <slot />
  </div>
</main>

<Footer />
