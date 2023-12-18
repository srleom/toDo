<script>
</script>

<main class="mx-auto flex max-w-7xl flex-col p-6 pt-20 lg:px-16">
	<a href="/"><img src="/favicon.png" alt="Icon" class="mb-5 w-10" /></a>
	<h2>A simple todo app.</h2>
	<h2>
		Built with <a class="underline" href="https://svelte.dev/" target="_blank">SvelteKit</a> and
		<a class="underline" href="https://supabase.com/" target="_blank">Supabase</a>.
	</h2>
	<h2>
		Open sourced on <a class="underline" href="https://github.com/srleom/toDo" target="_blank"
			>Github</a
		>.
	</h2>
	<h2>By SRLEOM.</h2>
	<div class="mt-6 flex flex-col items-start space-y-1.5 sm:flex-row sm:space-x-5 sm:space-y-0">
		<a
			href="/login"
			class="rounded-lg border border-gray-500 px-2.5 py-0.5"
			data-sveltekit-preload-data>Login</a
		>
		<a
			href="/register"
			class="rounded-lg border border-gray-500 bg-indigo-600 px-2.5 py-0.5 text-white"
			data-sveltekit-preload-data>Register</a
		>
	</div>
</main>
