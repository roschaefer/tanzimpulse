<script context="module" lang="ts">
	import { enhance } from '$lib/form';
	import type { Load } from '@sveltejs/kit';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/todos.json');

		if (res.ok) {
			const todos = await res.json();

			return {
				props: { todos }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	type Todo = {
		uid: string;
		created_at: Date;
		text: string;
		done: boolean;
	};

	export let todos: Todo[];

	async function patch(res: Response) {
		const todo = await res.json();

		todos = todos.map((t) => {
			if (t.uid === todo.uid) return todo;
			return t;
		});
	}
</script>

<svelte:head>
	<title>Todos</title>
</svelte:head>

<div class="todos">
	<h1>Todos</h1>

	<form
		class="new"
		action="/todos.json"
		method="post"
		use:enhance={{
			result: async (res, form) => {
				const created = await res.json();
				todos = [...todos, created];

				form.reset();
			}
		}}
	>
		<input name="text" aria-label="Add todo" placeholder="+ tap to add a todo" />
	</form>

	{#each todos as todo (todo.uid)}
		<div
			class="todo"
			class:done={todo.done}
			transition:scale|local={{ start: 0.7 }}
			animate:flip={{ duration: 200 }}
		>
			<form
				action="/todos/{todo.uid}.json?_method=patch"
				method="post"
				use:enhance={{
					pending: (data) => {
						todo.done = !!data.get('done');
					},
					result: patch
				}}
			>
				<input type="hidden" name="done" value={todo.done ? '' : 'true'} />
				<button class="toggle" aria-label="Mark todo as {todo.done ? 'not done' : 'done'}" />
			</form>

			<form
				class="text"
				action="/todos/{todo.uid}.json?_method=patch"
				method="post"
				use:enhance={{
					result: patch
				}}
			>
				<input aria-label="Edit todo" type="text" name="text" value={todo.text} />
				<button class="save" aria-label="Save todo" />
			</form>

			<form
				action="/todos/{todo.uid}.json?_method=delete"
				method="post"
				use:enhance={{
					result: () => {
						todos = todos.filter((t) => t.uid !== todo.uid);
					}
				}}
			>
				<button class="delete" aria-label="Delete todo" />
			</form>
		</div>
	{/each}
</div>
