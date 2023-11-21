import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="mx-auto flex max-w-7xl flex-col p-6 pt-20 lg:px-16" data-svelte-h="svelte-1mtbduz"><a href="/"><img src="/favicon.png" alt="Icon" class="mb-5 w-10"></a> <h2>A simple todo app. Built with <a class="underline" href="https://svelte.dev/">SvelteKit</a> and <a class="underline" href="https://supabase.com/">Supabase</a>.</h2> <div class="mt-2 flex flex-col sm:space-x-10 sm:flex-row"><a href="/login" class="py-2">Login</a> <a href="/register" class="py-2">Register</a></div></main>`;
});
export {
  Page as default
};
