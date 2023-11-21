import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { s as superForm } from "../../../chunks/index3.js";
/* empty css                                                        */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const { form, errors, enhance } = superForm(data.createProfileForm);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  return ` <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-a8kx4k"><a href="/"><img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company"></a> <h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">Create profile</h2></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="?/createProfile" method="POST" novalidate><div><label for="username" class="block text-sm font-medium leading-6 text-gray-900" data-svelte-h="svelte-n76fj0">Username</label> <div class="mt-2"><input id="username" name="username" type="text"${add_attribute("aria-invalid", $errors.username ? "true" : void 0, 0)} autocomplete="given-name" required class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", $form.username, 0)}> ${$errors.username ? `<span class="text-sm font-light text-red-500">${escape($errors.username)}</span>` : ``}</div></div> <div data-svelte-h="svelte-zf0804"><button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create profile</button></div></form></div></div>`;
});
export {
  Page as default
};
