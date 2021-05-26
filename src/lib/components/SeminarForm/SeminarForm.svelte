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
	<div class="flex flex-col space-y-6 mb-8">
		<label
			>Name
			<input
				class=" block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
				type="text"
				name="name"
				placeholder="Max Mustermann"
				required
			/>
		</label>
		<label
			>E-Mail Adresse
			<input
				class=" block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
				type="email"
				name="email"
				placeholder="max@mustermann.de"
				required
			/>
		</label>
		<label
			>Adresse
			<input
				class=" block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
				type="text"
				name="adresse"
				placeholder="Musterstrasse 42, 12345 Musterstadt"
				required
			/>
		</label>
		<label class="flex items-center">
			<input
				class="mr-2 h-6 w-6 rounded-md bg-gray-100 focus:ring-0"
				type="checkbox"
				name="datenverarbeitung"
				required
			/>
			Einwilligung zur Datenverarbeitung
		</label>
		<label class="flex items-center">
			<input
				class="mr-2 h-6 w-6 rounded-md bg-gray-100 focus:ring-0"
				type="checkbox"
				name="newsletter"
			/>
			Newsletter abonnieren
		</label>
	</div>
	<button
		type="submit"
		class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
		>Anmelden</button
	>
</form>
