<script>
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { isAddTodoOpen } from '../stores';
	import { onMount } from 'svelte';

	export let data;

	/** @type {number | undefined} */
	export let ownerId;

	const { form, errors, enhance } = superForm(data, {
		resetForm: true,
		onResult({ result }) {
			if (result.type === 'success') {
				isAddTodoOpen.set(false);
			}
		}
	});

	/**
	 * @typedef {Object} List
	 * @property {string} id - The ID of the object.
	 * @property {string} listName - The task to be done.
	 */

	/**
	 * An array of List objects.
	 * @type {List[]}
	 */
	export let listArray = [];

	let listId = '';
	function selectListId() {
		const selectedList = listArray.find((listArray) => listArray.listName === $form.list);
		if (selectedList) {
			listId = selectedList.id;
		}
	}

	onMount(() => selectListId());
</script>

<!-- <SuperDebug data={$form} /> -->
<div class="rounded-lg border border-gray-500 px-8 py-4 focus-within:border-blue">
	<form
		method="POST"
		action="?/addTodo"
		class="flex items-end justify-between space-x-6"
		use:enhance
	>
		<div class="flex items-start gap-6">
			<div>
				<input type="checkbox" class="mt-1 h-5 w-5" disabled />
				<input type="hidden" name="ownerId" value={ownerId} />
			</div>
			<div class="flex flex-col space-y-3">
				<input
					type="text"
					name="todo"
					aria-invalid={$errors.todo ? 'true' : undefined}
					bind:value={$form.todo}
					class="w-64 border-b border-b-gray-300 py-1 text-lg focus:border-b focus:border-b-blue focus:outline-none"
					placeholder="Todo"
				/>
				{#if $errors.todo}<span class="text-sm font-light">{$errors.todo}</span>{/if}

				<div class="flex space-x-5">
					<input
						type="date"
						name="dueDate"
						aria-invalid={$errors.dueDate ? 'true' : undefined}
						class="rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"
						bind:value={$form.dueDate}
					/>
					{#if $errors.dueDate}<span class="text-sm font-light">{$errors.dueDate}</span>{/if}
					<select
						name="list"
						aria-invalid={$errors.list ? 'true' : undefined}
						id="list"
						bind:value={$form.list}
						class="rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"
						on:change={selectListId}
					>
						{#each listArray as listItem (listItem.id)}
							<option value={listItem.listName}>{listItem.listName}</option>
						{/each}
					</select>
					{#if $errors.list}<span class="text-sm font-light">{$errors.list}</span>{/if}
					<input type="hidden" name="listId" bind:value={listId} />
				</div>
			</div>
		</div>

		<button
			class="mt-8 rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black"
			type="submit">add todo</button
		>
	</form>
</div>
