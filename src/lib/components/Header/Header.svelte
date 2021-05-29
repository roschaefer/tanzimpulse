<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { browser } from '$app/env';

	const linkClass = (path, pge) => {
		const defaults = 'inline-block no-underline py-2 px-4';
		const active = 'text-white';
		const inactive = 'text-gray-600 hover:text-gray-200 hover:text-underline';
		return `${pge.path === path ? active : inactive} ${defaults}`;
	};

	let links = [
		{ path: `${base}/ueber-uns`, label: 'Über uns' },
		{ path: `${base}/workshops`, label: 'Workshops' },
		{ path: `${base}/ausbildungen`, label: 'Ausbildungen' }
	];
	let open = !browser;
	const toggleMenu = () => {
		open = !open;
	};

	$: styledLinks = links.map((link) => {
		return { ...link, class: linkClass(link.path, $page) };
	});
</script>

<header class="sticky top-0 z-10">
	<nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<a
				class="flex items-center text-white no-underline hover:text-white hover:no-underline"
				sveltekit:prefetch
				href="{base}/"
			>
				<div class="w-12 border-2"><Logo /></div>
				<span class="text-2xl pl-2">Tanzimpulse</span>
			</a>
		</div>

		<div class="block lg:hidden">
			<button
				on:click={toggleMenu}
				class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
			>
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
					><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
				>
			</button>
		</div>

		<div
			class:hidden={!open}
			class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0"
		>
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				{#each styledLinks as link (link.path)}
					<li class="mr-3">
						<a class={link.class} sveltekit:prefetch href={link.path}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</header>
