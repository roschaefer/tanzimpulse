<script lang="ts">
	import SeminarDeck from '$lib/components/SeminarDeck/SeminarDeck.svelte';
	import KategorienFilter from '$lib/components/KategorienFilter/KategorienFilter.svelte';
	export let seminare: [];
	export let selectedKategorieIds = [];
	const onlyUnique = (k, index, kategorien) => kategorien.map((k) => k.id).indexOf(k.id) === index;
	const computeSelected = (kategorie) =>
		selectedKategorieIds?.length
			? { ...kategorie, selected: selectedKategorieIds.includes(kategorie.id) }
			: { ...kategorie, selected: true };
	let kategorien = seminare
		.map((s) => s.kategorien)
		.flat()
		.filter(onlyUnique)
		.map(computeSelected);
	$: gefilterteSeminare = seminare.filter((s) => {
		const seminarKategorieIds = s.kategorien.map((k) => k.id);
		const kategorieIds = kategorien.filter((k) => k.selected).map((k) => k.id);
		return seminarKategorieIds.some((id) => kategorieIds.includes(id));
	});
</script>

<KategorienFilter bind:kategorien />
<SeminarDeck seminare={gefilterteSeminare} />
