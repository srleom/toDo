<script>
	import { page } from '$app/stores';
</script>

<main class="mx-auto flex max-w-7xl flex-col p-6 pt-20 lg:px-16">
	<a href="/"><img src="/favicon.png" alt="Icon" class="mb-5 w-10" /></a>
    <h1 class='text-lg'>{$page.status}: {$page.error?.message}</h1>
	<div class="mt-2 flex flex-col sm:space-x-10 sm:flex-row">
		<a href="/login" class="py-2">Login</a>
		<a href="/register" class="py-2">Register</a>
	</div>
</main>

