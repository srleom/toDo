<script>
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// @ts-ignore
	const { form, errors, enhance } = superForm(data.createProfileForm);
</script>

<!-- <SuperDebug data={$form} /> -->
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<a href="/">
			<img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company" />
		</a>

		<h2 class="mt-5 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">
			Create profile
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" action="?/createProfile" method="POST" novalidate use:enhance>
			<div>
				<label for="username" class="block text-sm font-medium leading-6 text-gray-900"
					>Username</label
				>
				<div class="mt-2">
					<input
						id="username"
						name="username"
						type="text"
						aria-invalid={$errors.username ? 'true' : undefined}
						bind:value={$form.username}
						autocomplete="given-name"
						required
						class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					{#if $errors.username}<span class="text-sm font-light text-red-500"
							>{$errors.username}</span
						>{/if}
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Create profile</button
				>
			</div>
		</form>
	</div>
</div>
