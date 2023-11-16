<script>
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	const {
		form: registerForm,
		errors,
		enhance,
		delayed
	} = superForm(data.registerForm, {
		resetForm: true,
		delayMs: 500,
		timeoutMs: 2000
	});

	$: if (form?.newUserRegistered) {
		toast.success('Registered successfully!');
	}
</script>

<Toaster />

<!-- <SuperDebug data={$form} /> -->
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<a href="/">
			<img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company" />
		</a>

		<h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">
			Register
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" action="?/register" method="POST" novalidate use:enhance>
			<div>
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
					>Email address</label
				>
				<div class="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						aria-invalid={$errors.email ? 'true' : undefined}
						bind:value={$registerForm.email}
						autocomplete="email"
						required
						class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					{#if $errors.email}<span class="text-sm font-light text-red-500">{$errors.email}</span
						>{/if}
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
						>Password</label
					>
					<!-- <div class="text-sm">
						<a href="#" class="text-indigo-600 hover:text-indigo-500">Forgot password?</a>
					</div> -->
				</div>
				<div class="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						aria-invalid={$errors.password ? 'true' : undefined}
						bind:value={$registerForm.password}
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
					>{#if $delayed}Registering...
					{:else if form?.newUserRegistered}Registered
					{:else}Register{/if}
				</button>

				{#if form?.newUserRegistered}
					<p class="mt-4 text-center text-sm text-indigo-600">
						Thank you for registering, please check your <span class="font-medium">email</span> for the
						confirmation link.
					</p>
				{/if}
			</div>
		</form>

		<p class="mt-10 text-center text-sm text-gray-500">
			Registered?
			<a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
				>Login here.</a
			>
		</p>
	</div>
</div>
