<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main class="flex-grow container mx-auto bg-white mt-24 md:mt-18">
	<slot />
</main>

<Footer />
