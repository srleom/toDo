<script>
	import { invalidateAll } from '$app/navigation';
	import AddTodo from '$lib/components/AddTodo.svelte';
	import Todo from '$lib/components/Todo.svelte';
	import { supabase } from '$lib/supabaseClient';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	/**
	 * @typedef {Object} Todo
	 * @property {string} id - The ID of the object.
	 * @property {Date} created_at - The creation date.
	 * @property {string} todo - The task to be done.
	 * @property {string} due_date - The due date of the task (as a string).
	 * @property {string} list - The list to which the task belongs.
	 * @property {boolean} completed - Whether the task is completed.
	 */

	/**
	 * An array of Todo objects.
	 * @type {Todo[]}
	 */

	// @ts-ignore
	const { todo } = data;
	const { list } = data;

	let isAddTodoOpen = false;

	function openAddTodo() {
		isAddTodoOpen = !isAddTodoOpen;
	}

	const toDo = supabase
		.channel('todo')
		.on('postgres_changes', { event: '*', schema: 'public', table: 'toDo' }, (payload) => {
			console.log('Change received!', payload);
		})
		.subscribe();
</script>

<div class="border">
	<div class="mx-auto grid max-w-7xl grid-cols-9">
		<div class="col-span-2 px-20 py-10">
			<div class="flex border">
				<h2 class="text-2xl">SRLEOM</h2>
			</div>
		</div>
		<div class="col-span-7 border-l px-20 py-10">
			<h2 class="text-2xl">Todo</h2>
			<div class="mb-5 mt-5 h-[1px] bg-black" />

			<button class="mb-5 rounded-lg bg-indigo-600 px-4 py-2 text-white" on:click={openAddTodo}
				>+ New Task</button
			>

			<div class="mb-5 {isAddTodoOpen ? 'block' : 'hidden'}">
				<AddTodo listArray={list} />
			</div>

			{#if form?.success}
				<p>Success</p>
			{/if}

			{#each todo as todoItem (todoItem.id)}
				<Todo
					todo={todoItem.todo}
					due_date={todoItem.due_date}
					list={todoItem.list}
					completed={todoItem.completed}
					id={todoItem.id}
				/>
			{/each}
		</div>
	</div>
</div>
