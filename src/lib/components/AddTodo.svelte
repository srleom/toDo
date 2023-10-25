<script>
	import { enhance } from '$app/forms';

	/**
	 * @type {string}
	 */
	export let todo = '';

	export let today = new Date();
	export let due_date = today.toISOString().slice(0, 10);

	export let list = '';

	/**
	 * @typedef {Object} listArray
	 * @property {number} id - list id
	 * @property {string} list_name - list name
	 */

	/**
	 * Array of lists for select option
	 * @type {listArray[]}
	 */
	export let listArray = [];

	$: {
		list = list || 'Inbox';
	}
</script>

<div class="rounded-lg border border-gray-500 px-8 py-4 focus-within:border-blue">
	<form method="POST" action="?/add" class="flex items-end justify-between space-x-6">
		<div class="flex items-start gap-6">
			<div>
				<input type="checkbox" class="mt-1 h-5 w-5" disabled />
			</div>
			<div class="flex flex-col space-y-3">
				<input
					type="text"
					name="todo"
					bind:value={todo}
					class="w-64 border-b border-b-gray-300 py-1 text-lg focus:border-b focus:border-b-blue focus:outline-none"
					placeholder="Todo"
				/>

				<div class="flex space-x-5">
					<input
						type="date"
						name="due_date"
						class="rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"
						bind:value={due_date}
					/>
					<select
						name="list"
						id="list"
						bind:value={list}
						class="rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"
					>
						{#each listArray as listItem, listId (listItem.id)}
							<option value={listItem.list_name}>{listItem.list_name}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>

		<button
			class="mt-8 rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black"
			type="submit">add todo</button
		>
	</form>
</div>
