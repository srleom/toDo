import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { s as superForm } from "../../../chunks/index3.js";
import { t as toast } from "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
/* empty css                                                        */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const { form, errors, enhance } = superForm(data.loginForm, {
    onResult({ result }) {
      if (result.type === "redirect") {
        toast.success("Login successful!");
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  return ` <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-1f8im6r"><a href="/"><span class="sr-only">Todo</span> <img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company"></a> <h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">Login</h2></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="?/login" method="POST" novalidate><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900" data-svelte-h="svelte-tvuni8">Email address</label> <div class="mt-2"><input id="email" name="email" type="email"${add_attribute("aria-invalid", $errors.email ? "true" : void 0, 0)} autocomplete="email" required class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", $form.email, 0)}> ${$errors.email ? `<span class="text-sm font-light text-red-500">${escape($errors.email)}</span>` : ``}</div></div> <div><div class="flex items-center justify-between" data-svelte-h="svelte-1uydn9p"><label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label> <a href="/forget-password" class="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a></div> <div class="mt-2"><input id="password" name="password" type="password"${add_attribute("aria-invalid", $errors.password ? "true" : void 0, 0)} autocomplete="current-password" required class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", $form.password, 0)}> ${$errors.password ? `<span class="mt-0.5 text-sm font-light text-red-500">${escape($errors.password)}</span>` : ``}</div></div> <div data-svelte-h="svelte-1ytel4p"><button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button></div></form> <p class="mt-10 text-center text-sm text-gray-500" data-svelte-h="svelte-7t4816">Don&#39;t have an account?
			<a href="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here.</a></p></div></div>`;
});
export {
  Page as default
};
