<script lang="ts">
	const selected = ['ckp5emleokgvf0b06z69zjxlp'];
	export let kategorien;
	import Toggle from '$lib/components/Toggle/Toggle.svelte';
</script>

{#if kategorien?.length}
	<form class="py-4 flex flex-col space-y-4">
		{#each kategorien as kategorie (kategorie.id)}
			{#if kategorie.seminare.length}
				<Toggle bind:kategorie />
			{/if}
		{/each}
		<noscript>
			<button
				type="submit"
				class="px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
				>Seminare filtern</button
			>
		</noscript>
	</form>
{/if}
