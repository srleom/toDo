import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { s as superForm } from "../../../chunks/index3.js";
/* empty css                                                        */import { t as toast } from "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { T as Toaster } from "../../../chunks/Toaster.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $registerForm, $$unsubscribe_registerForm;
  let $delayed, $$unsubscribe_delayed;
  let { data } = $$props;
  let { form } = $$props;
  const { form: registerForm, errors, enhance, delayed } = superForm(data.registerForm, {
    resetForm: true,
    delayMs: 500,
    timeoutMs: 2e3
  });
  $$unsubscribe_registerForm = subscribe(registerForm, (value) => $registerForm = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_delayed = subscribe(delayed, (value) => $delayed = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form?.newUserRegistered) {
      toast.success("Registered successfully!");
    }
  }
  $$unsubscribe_errors();
  $$unsubscribe_registerForm();
  $$unsubscribe_delayed();
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-1n0nx7s"><a href="/"><img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company"></a> <h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">Register</h2></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="?/register" method="POST" novalidate><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900" data-svelte-h="svelte-tvuni8">Email address</label> <div class="mt-2"><input id="email" name="email" type="email"${add_attribute("aria-invalid", $errors.email ? "true" : void 0, 0)} autocomplete="email" required class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", $registerForm.email, 0)}> ${$errors.email ? `<span class="text-sm font-light text-red-500">${escape($errors.email)}</span>` : ``}</div></div> <div><div class="flex items-center justify-between" data-svelte-h="svelte-kusm33"><label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label></div> <div class="mt-2"><input id="password" name="password" type="password"${add_attribute("aria-invalid", $errors.password ? "true" : void 0, 0)} autocomplete="new-password" required class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", $registerForm.password, 0)}> ${$errors.password ? `<span class="mt-0.5 text-sm font-light text-red-500">${escape($errors.password)}</span>` : ``}</div></div> <div><button type="submit" class="flex h-8 w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${$delayed ? `Registering...` : `${form?.newUserRegistered ? `Registered` : `Register`}`}</button> ${form?.newUserRegistered ? `<p class="mt-4 text-center text-sm text-indigo-600" data-svelte-h="svelte-1i43cn2">Thank you for registering, please check your <span class="font-medium">email</span> for the
						confirmation link.</p>` : ``}</div></form> <p class="mt-10 text-center text-sm text-gray-500" data-svelte-h="svelte-13288hu">Registered?
			<a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login here.</a></p></div></div>`;
});
export {
  Page as default
};
