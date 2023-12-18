<script>
	import { superForm } from 'sveltekit-superforms/client';
	import { isAddTodoOpen } from '../stores';

	export let data;

	/** @type {number | undefined} */
	export let owner_id;

	const { form, errors, enhance } = superForm(data, {
		resetForm: true,
		onResult({ result }) {
			if (result.type === 'success') {
				isAddTodoOpen.set(false);
			}
		}
	});

	/**
	 * @typedef {Object} listArray
	 * @property {string} created_at
	 * @property {string} id
	 * @property {string} list_name
	 * @property {number} owner_id
	 */

	/**
	 * An array of list objects
	 * @type {listArray[]}
	 */

	export let listArray = [];

	let list_id = '';
	function selectListId() {
		const selectedList = listArray.find((listArray) => listArray.list_name === $form.list_name);
		if (selectedList) {
			list_id = selectedList.id;
		}
	}

	$: if ($isAddTodoOpen) {
		selectListId();
	}
</script>

<div class="rounded-lg border border-gray-500 px-6 py-4 focus-within:border-blue sm:px-8">
	<form
		method="POST"
		action="?/addTodo"
		class="flex flex-col items-start justify-between space-x-4 xs:space-x-6 sm:flex-row sm:items-end"
		use:enhance
	>
		<div class="flex items-start gap-6">
			<div>
				<input type="checkbox" class="mt-1 h-5 w-5" disabled />
				<input type="hidden" name="owner_id" value={owner_id} />
			</div>
			<div class="flex flex-col items-start space-y-3">
				<input
					type="text"
					name="todo"
					aria-invalid={$errors.todo ? 'true' : undefined}
					bind:value={$form.todo}
					class="w-full border-b border-b-gray-300 py-1 text-lg focus:border-b focus:border-b-blue focus:outline-none xs:w-64"
					placeholder="Todo"
				/>
				{#if $errors.todo}<span class="text-sm font-light">{$errors.todo}</span>{/if}

				<div
					class="flex flex-col items-start space-y-2 xs:flex-row xs:items-stretch xs:space-x-5 xs:space-y-0"
				>
					<input
						type="date"
						name="due_date"
						aria-invalid={$errors.due_date ? 'true' : undefined}
						class="rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"
						bind:value={$form.due_date}
					/>
					{#if $errors.dueDate}<span class="text-sm font-light">{$errors.due_date}</span>{/if}
					<select
						name="list"
						aria-invalid={$errors.list_name ? 'true' : undefined}
						id="list"
						bind:value={$form.list_name}
						class="rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"
						on:change={selectListId}
					>
						{#each listArray as listItem (listItem.id)}
							<option value={listItem.list_name}>{listItem.list_name}</option>
						{/each}
					</select>
					{#if $errors.list_name}<span class="text-sm font-light">{$errors.list_name}</span>{/if}
					<input type="hidden" name="list_id" value={list_id} />
				</div>
				<button
					class="block rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black sm:hidden"
					type="submit">add todo</button
				>
			</div>
		</div>
		<button
			class="hidden rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black sm:block"
			type="submit">add todo</button
		>
	</form>
</div>
