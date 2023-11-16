<script>
	import { enhance } from '$app/forms';
	import { isSideBarOpen } from '$lib/stores';

	export let listArray = [];

	let showBinIcon = false;
	let idListHovered = '';
</script>

<div class="mt-3">
	<ul class=" flex flex-col text-lg">
		<a href="/dashboard" data-sveltekit-preload-data on:click={() => isSideBarOpen.set(false)}
			>All lists</a
		>
		<a
			href="/dashboard?list=Inbox"
			data-sveltekit-preload-data
			on:click={() => isSideBarOpen.set(false)}>Inbox</a
		>
		{#each listArray as listItem (listItem.id)}
			<div
				role="presentation"
				class="mb-1 flex items-center justify-between gap-3"
				on:mouseenter={() => {
					showBinIcon = true;
					idListHovered = listItem.id;
				}}
				on:mouseleave={() => {
					showBinIcon = true;
					idListHovered = '';
				}}
			>
				<a
					href="/dashboard?list={listItem.list_name}"
					class="hover:text-blue"
					data-sveltekit-preload-data
					on:click={() => isSideBarOpen.set(false)}>{listItem.list_name}</a
				>
				<div class="flex gap-1 {showBinIcon && idListHovered === listItem.id ? 'block' : 'hidden'}">
					<form action="?/deleteList" method="POST" use:enhance>
						<input type="hidden" name="owner_id" hidden value={listItem.owner_id} />
						<input type="hidden" name="list_id" hidden value={listItem.id} />
						<button>
							<img
								src="/icons/bin.svg"
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
