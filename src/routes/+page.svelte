<script>
	import AddTodo from '$lib/components/AddTodo.svelte';
	import Todo from '$lib/components/Todo.svelte';
	import List from '$lib/components/List.svelte';

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
	$: todo = data.todo;
	$: list = data.list;

	let isAddTodoOpen = false;

	function openAddTodo() {
		isAddTodoOpen = !isAddTodoOpen;
	}
</script>

<div class="border border-t-0">
	<div class="mx-auto grid grid-cols-9">
		<div class="col-span-2 flex flex-col">
			<div class="border-b px-20 py-10">
				<h2 class=" text-2xl">SRLEOM</h2>
			</div>

			<div class="border-b px-20 py-10">
				<List listArray={data.list} />
			</div>
		</div>
		<div class="col-span-7 border-l px-20 py-10">
			<h2 class="text-2xl">Todo</h2>
			<div class="mb-5 mt-5 h-[1px] bg-black" />

			<button class="mb-5 rounded-lg bg-indigo-600 px-4 py-2 text-white" on:click={openAddTodo}
				>+ New Task</button
			>

			<div class="mb-5 {isAddTodoOpen ? 'block' : 'hidden'}">
				<AddTodo data={data.addTodoForm} listArray={list} />
			</div>

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
