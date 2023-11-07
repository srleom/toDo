<script>
	import { enhance } from '$app/forms';

	/**
	 * @typedef {Object} List
	 * @property {string} id - The ID of the object.
	 * @property {string} listName - The task to be done.
	 * @property {Date} createdAt - Created at.
	 */

	/**
	 * @type {List[]}
	 */

	export let listArray = [];

	let showIcons = false;
</script>

<div class="mt-3">
	<ul class=" flex flex-col text-lg">
		<a href="/" data-sveltekit-preload-data>All lists</a>
		{#each listArray as listItem, listId (listItem.id)}
			<div
				role="presentation"
				class="mb-1 flex items-center justify-between gap-3"
				on:mouseenter={() => (showIcons = true)}
				on:mouseleave={() => (showIcons = false)}
			>
				<a
					href="/{listItem.listName.toLowerCase()}"
					class="hover:text-blue"
					data-sveltekit-preload-data>{listItem.listName}</a
				>
				<div class="flex gap-1 {showIcons ? 'block' : 'hidden'}">
					<form action="?/deleteList" method="POST" use:enhance>
						<input type="hidden" name="id" hidden value={listItem.id} />
						<button>
							<img
								src="icons/bin.svg"
								alt="delete list"
								class="h-4 cursor-pointer opacity-30 hover:opacity-100"
							/>
						</button>
					</form>
				</div>
			</div>
		{/each}
	</ul>
</div>
