<script lang="ts">
	import { enhance } from '$lib/form.ts';

	export let action;
	export let result;
	export let error = () => {};
	export let pending = () => {};
</script>

<form {action} method="post" use:enhance={{ result, error, pending }}>
	<div class="text-center">
		<h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Anmeldeformular</h1>
		<p class="text-gray-400 dark:text-gray-400">Für dieses Seminar anmelden.</p>
	</div>
	<div class="flex flex-col space-y-6 mb-12">
		<label for="name"
			>Name
			<input
				class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
				type="text"
				name="name"
				id="name"
				placeholder="Max Mustermann"
				required
			/>
		</label>
		<label for="email"
			>E-Mail Adresse
			<input
				class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
				type="email"
				name="email"
				id="email"
				placeholder="max@mustermann.de"
				required
			/>
		</label>
		<label for="adresse"
			>Adresse
			<input
				class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
				type="text"
				name="adresse"
				id="adresse"
				placeholder="Musterstrasse 42, 12345 Musterstadt"
				required
			/>
		</label>
	</div>
	<button
		type="submit"
		class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
		>Anmelden</button
	>
</form>
