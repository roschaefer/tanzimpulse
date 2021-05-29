<script lang="ts">
	import SeminarCard from '$lib/components/SeminarCard/SeminarCard.svelte';
	export let seminare: [];
	import { base } from '$app/paths';
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap -m-4">
			{#each seminare as seminar (seminar.id)}
				<SeminarCard {seminar} link={`${base}/${seminar.format}/${seminar.url}`} />
			{/each}
		</div>
	</div>
</section>
