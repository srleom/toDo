<script>
	import Todo from '$lib/components/Todo.svelte';
	import List from '$lib/components/List.svelte';
	import AddTodo from '$lib/components/AddTodo.svelte';
	import AddList from '$lib/components/AddList.svelte';
	import { isAddTodoOpen, isAddListOpen, isSideBarOpen } from '../../lib/stores';
	import toast, { Toaster } from 'svelte-french-toast';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	$: todo = data.todo;

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

<main>
	<div class="mx-auto grid grid-cols-9">
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="{$isSideBarOpen ? 'block' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-50" />
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/dashboard" class="-m-1.5 p-1.5" on:click={() => isSideBarOpen.set(false)}>
						<span class="sr-only">Your Company</span>
						<img class="h-8 w-auto" src="/favicon.png" alt="" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						on:click={() => isSideBarOpen.set(false)}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="flow-root">
					<div class="border-b py-8">
						<div>
							<p class="font-mono text-xs">WELCOME BACK,</p>
							<a href="/dashboard" class="text-2xl">{data.profile?.username}</a>
						</div>
					</div>

					<div class="mt-8">
						<div class="flex justify-between">
							<h2 class="mb-2 text-2xl font-medium">Lists</h2>
							<button
								class="relative mb-2 text-2xl transition ease-in-out hover:rotate-45 hover:scale-110 hover:text-blue hover:duration-100"
								on:click={toggleAddList}>+</button
							>
						</div>
						<List listArray={list} />

						<div class="mb-5 {$isAddListOpen ? 'block' : 'hidden'}">
							<AddList data={data.addListForm} ownerId={data.profile?.id} />
						</div>
						<form action="/logout" method="POST">
							<button
								type="submit"
								class="mt-4 rounded-lg border border-gray-500 px-1 py-0.5 font-mono text-xs"
								>Logout</button
							>
						</form>
					</div>
				</div>
			</div>
		</div>

		<!-- Desktop menu, show/hide based on device size. -->
		<div class="hidden lg:col-span-2 lg:flex lg:flex-col">
			<div class="border-b px-20 py-10">
				<a href="/"><img src="/favicon.png" class="mb-4 h-10 w-auto" alt="Logo" /></a>
				<div>
					<p class="font-mono text-xs">WELCOME BACK,</p>
					<a href="/dashboard" class="text-2xl">{data.profile?.username}</a>
				</div>
				<form action="/logout" method="POST">
					<button
						type="submit"
						class="mt-4 rounded-lg border border-gray-500 px-1 py-0.5 font-mono text-xs"
						>Logout</button
					>
				</form>
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
					<AddList data={data.addListForm} ownerId={data.profile?.id} />
				</div>
			</div>
		</div>

		<div class="col-span-9 border-l px-20 py-10 lg:col-span-7">
			<div class="flex justify-between">
				<h2 class="text-2xl">{data.listQueried ? `Todos in ${data.listQueried}` : 'All todos'}</h2>

				<!-- Menu Icon -->
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						on:click={() => isSideBarOpen.set(true)}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div class="mb-5 mt-5 h-[1px] bg-black" />

			<button class="mb-5 rounded-lg bg-indigo-600 px-4 py-2 text-white" on:click={toggleAddTodo}
				>+ New Task</button
			>

			<div class="mb-5 {$isAddTodoOpen ? 'block' : 'hidden'}">
				<AddTodo data={data.addTodoForm} listArray={list} ownerId={data.profile?.id} />
			</div>

			{#if todo.length === 0}
				<p class="rounded-lg border px-8 py-4 text-lg">No todos here. Hooray! 🎉</p>
			{/if}

			{#each todo as todoItem (todoItem.id)}
				<Todo
					todo={todoItem.todo}
					dueDate={todoItem.due_date}
					list={todoItem.list.list_name}
					completed={todoItem.completed}
					id={todoItem.id}
				/>
			{/each}
		</div>
	</div>
</main>