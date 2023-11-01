<script>
	import { enhance } from '$app/forms';

	export let todo = 'Todo';
	export let due_date = '2023-10-8';
	export let list = 'Inbox';
	export let completed = false;
	export let id = '';

	// Hover delete effect
	let showBin = false;

	/** @type {HTMLFormElement} form */
	let form;
</script>

<div
	class="mb-5 flex items-start space-x-6 rounded-lg border px-8 py-4"
	on:mouseenter={() => (showBin = true)}
	on:mouseleave={() => (showBin = false)}
	role="presentation"
>
	<form action="?/completeTodo" method="POST" bind:this={form} use:enhance>
		<input type="hidden" name="id" hidden value={id} />
		<input
			name="completed"
			type="checkbox"
			checked={completed}
			class="mt-1 h-5 w-5"
			on:change={() => form.requestSubmit()}
		/>
		<input type="hidden" name="completed" value="false" />
	</form>
	<div class="flex flex-col space-y-3">
		<div class="flex items-end space-x-5">
			<p class="text-lg" class:line-through={completed}>{todo}</p>
			<form action="?/deleteTodo" method="POST" use:enhance>
				<input type="hidden" name="id" hidden value={id} />
				<button>
					<img
						src="icons/bin.svg"
						alt="delete"
						class="h-4 cursor-pointer opacity-30 hover:opacity-100 {showBin ? 'block' : 'hidden'}"
					/>
				</button>
			</form>
		</div>

		<div class="flex space-x-5">
			<p class="rounded-lg border border-gray-300 px-2 text-sm">{due_date}</p>
			<p class="rounded-lg border border-gray-300 px-2 text-sm">{list}</p>
		</div>
	</div>
</div>
