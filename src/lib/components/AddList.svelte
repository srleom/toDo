<script>
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { isAddListOpen } from '../stores';

	export let data;

	/** @type {number} */
	export let owner_id;

	const { form, errors, enhance } = superForm(data, {
		resetForm: true,
		warnings: {
			duplicateId: false
		},
		onResult({ result }) {
			if (result.type === 'success') {
				isAddListOpen.set(false);
			}
		}
	});
</script>

<!-- <SuperDebug data={$form} /> -->
<form method="POST" action="?/addList" class="mt-5 flex flex-col items-start space-y-3" use:enhance>
	<input type="hidden" name="owner_id" value={owner_id} />
	<input
		type="text"
		name="list_name"
		aria-invalid={$errors.list ? 'true' : undefined}
		bind:value={$form.list_name}
		placeholder="Add list"
		class="flex-1 border-b border-b-gray-300 bg-transparent py-1 focus:border-b focus:border-b-blue focus:outline-none"
		required
	/>
	{#if $errors.list_name}<span class="text-sm font-light">{$errors.list_name}</span>{/if}
	<button
		type="submit"
		class="w-auto rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black"
		>add list</button
	>
</form>
