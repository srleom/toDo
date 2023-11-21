import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main class="mx-auto flex max-w-7xl flex-col p-6 pt-20 lg:px-16"><a href="/" data-svelte-h="svelte-1o7ap1m"><img src="/favicon.png" alt="Icon" class="mb-5 w-10"></a> <h1 class="text-lg">${escape($page.status)}: ${escape($page.error?.message)}</h1> <div class="mt-2 flex flex-col sm:space-x-10 sm:flex-row" data-svelte-h="svelte-pf5v5c"><a href="/login" class="py-2">Login</a> <a href="/register" class="py-2">Register</a></div></main>`;
});
export {
  Error as default
};
