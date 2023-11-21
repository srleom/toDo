<script>
	import { superForm } from 'sveltekit-superforms/client';
	import toast, { Toaster } from 'svelte-french-toast';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	const {
		form: updatePasswordForm,
		errors,
		enhance,
		delayed
	} = superForm(data.updatePasswordForm, {
		resetForm: true,
		delayMs: 500,
		timeoutMs: 2000
	});

	$: if (form?.passwordUpdated) {
		toast.success('Password updated!');
	}
</script>

<Toaster />

<!-- <SuperDebug data={$form} /> -->
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<a href="/">
			<span class="sr-only">Todo</span>
			<img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company" />
		</a>

		<h2 class="mt-5 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">
			Reset your password
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" action="?/updatePassword" method="POST" novalidate use:enhance>
			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
						>New Password</label
					>
				</div>
				<div class="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						aria-invalid={$errors.password ? 'true' : undefined}
						bind:value={$updatePasswordForm.password}
						autocomplete="new-password"
						required
						class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					{#if $errors.password}<span class="mt-0.5 text-sm font-light text-red-500"
							>{$errors.password}</span
						>{/if}
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="flex h-8 w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>{#if $delayed}Updating your new password...
					{:else if form?.passwordUpdated}Password updated
					{:else}Reset password{/if}
				</button>

				{#if form?.passwordUpdated}
					<p class="mt-4 text-center text-sm text-indigo-600">
						Your password has been updated. Return to the dashboard <a
							href="/dashboard"
							class="underline">here</a
						>.
					</p>
				{/if}
			</div>
		</form>
	</div>
</div>
