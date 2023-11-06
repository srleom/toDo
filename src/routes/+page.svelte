<script>
	import Todo from '$lib/components/Todo.svelte';
	import List from '$lib/components/List.svelte';
	import AddTodo from '$lib/components/AddTodo.svelte';
	import AddList from '$lib/components/AddList.svelte';
	import { isAddTodoOpen, isAddListOpen } from '../stores';
	import toast, { Toaster } from 'svelte-french-toast';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	/**
	 * @typedef {Object} Todo
	 * @property {string} id - The ID of the object.
	 * @property {Date} createdAt - The creation date.
	 * @property {string} todo - The task to be done.
	 * @property {string} dueDate - The due date of the task (as a string).
	 * @property {string} list - The list to which the task belongs.
	 * @property {boolean} completed - Whether the task is completed.
	 */

	/**
	 * An array of Todo objects.
	 * @type {Todo[]}
	 */

	// @ts-ignore
	$: todo = data.todo;

	/**
	 * @typedef {Object} List
	 * @property {string} id - The ID of the object.
	 * @property {string} listName - The task to be done.
	 * @property {Date} createdAt - Created at.
	 */

	/**
	 * An array of List objects.
	 * @type {List[]}
	 */
	// @ts-ignore
	$: list = data.list;

	function toggleAddTodo() {
		isAddTodoOpen.set(!$isAddTodoOpen);
	}

	function toggleAddList() {
		isAddListOpen.set(!$isAddListOpen);
	}

	$: if (form?.addTodoSuccess) {
		toast.success('Todo added!');
	} else if (form?.completeTodoSuccess && form?.completed) {
		toast.success('Todo completed!');
	} else if (form?.completeTodoSuccess && !form?.completed) {
		toast.success('Todo un-completed!');
	} else if (form?.deleteTodoSuccess) {
		toast.success('Todo deleted!');
	} else if (form?.addListSuccess) {
		toast.success('List added!');
	} else if (form?.deleteListSuccess) {
		toast.success('List deleted!');
	}
</script>

<Toaster />

<div class="border border-t-0">
	<div class="mx-auto grid grid-cols-9">
		<div class="col-span-2 flex flex-col">
			<div class="border-b px-20 py-10">
				<h2 class=" text-2xl">SRLEOM</h2>
			</div>

			<div class="px-20 py-10">
				<div class="flex justify-between">
					<h2 class="mb-2 text-2xl font-medium">Lists</h2>
					<button
						class="relative mb-2 text-2xl transition ease-in-out hover:rotate-45 hover:scale-110 hover:text-blue hover:duration-100"
						on:click={toggleAddList}>+</button
					>
				</div>
				<List listArray={list} />

				<div class="mb-5 {$isAddListOpen ? 'block' : 'hidden'}">
					<AddList data={data.addListForm} />
				</div>
			</div>
		</div>
		<div class="col-span-7 border-l px-20 py-10">
			<h2 class="text-2xl">Todo</h2>
			<div class="mb-5 mt-5 h-[1px] bg-black" />

			<button class="mb-5 rounded-lg bg-indigo-600 px-4 py-2 text-white" on:click={toggleAddTodo}
				>+ New Task</button
			>

			<div class="mb-5 {$isAddTodoOpen ? 'block' : 'hidden'}">
				<AddTodo data={data.addTodoForm} listArray={list} />
			</div>

			{#each todo as todoItem (todoItem.id)}
				<Todo
					todo={todoItem.todo}
					dueDate={todoItem.dueDate}
					list={todoItem.list}
					completed={todoItem.completed}
					id={todoItem.id}
				/>
			{/each}
		</div>
	</div>
</div>
