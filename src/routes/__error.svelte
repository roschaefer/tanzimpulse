<script context="module" lang="ts">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
				status,
				error
			}
		};
	}
</script>

<script>
	export let title;
	export let status;
	export let error;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="w-9/12 m-auto py-16 flex items-center justify-center">
	<div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
		<div class="border-t border-gray-200 text-center pt-8">
			<h1 class="text-9xl font-bold text-purple-400">{status}</h1>
			<h1 class="text-6xl font-medium py-8">Upsi!</h1>
			<p class="text-2xl pb-8 px-12 font-medium">{error.message}</p>
		</div>
	</div>
</div>
