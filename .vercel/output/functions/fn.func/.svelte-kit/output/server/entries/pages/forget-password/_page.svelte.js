import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { s as superForm } from "../../../chunks/index3.js";
import { t as toast } from "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { T as Toaster } from "../../../chunks/Toaster.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $getEmailForm, $$unsubscribe_getEmailForm;
  let $delayed, $$unsubscribe_delayed;
  let { data } = $$props;
  let { form } = $$props;
  const { form: getEmailForm, errors, enhance, delayed } = superForm(data.getEmailForm, {
    resetForm: true,
    delayMs: 500,
    timeoutMs: 2e3
  });
  $$unsubscribe_getEmailForm = subscribe(getEmailForm, (value) => $getEmailForm = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_delayed = subscribe(delayed, (value) => $delayed = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form?.resetPasswordEmailSent) {
      toast.success("Email sent!");
    }
  }
  $$unsubscribe_errors();
  $$unsubscribe_getEmailForm();
  $$unsubscribe_delayed();
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})} <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-1juwgyd"><a href="/"><span class="sr-only">Todo</span> <img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company"></a> <h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">Reset your password</h2></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="?/forgetPassword" method="POST" novalidate><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900" data-svelte-h="svelte-tvuni8">Email address</label> <div class="mt-2"><input id="email" name="email" type="email"${add_attribute("aria-invalid", $errors.email ? "true" : void 0, 0)} autocomplete="email" required class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", $getEmailForm.email, 0)}> ${$errors.email ? `<span class="text-sm font-light text-red-500">${escape($errors.email)}</span>` : ``}</div></div> <div><button type="submit" class="flex h-8 w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${$delayed ? `Sending your request...` : `${form?.resetPasswordEmailSent ? `Email sent` : `Reset password`}`}</button> ${form?.resetPasswordEmailSent ? `<p class="mt-4 text-center text-sm text-indigo-600" data-svelte-h="svelte-1iu754l">Please check your email for a link to reset your password.</p>` : ``}</div></form> <p class="mt-10 text-center text-sm text-gray-500" data-svelte-h="svelte-7t4816">Don&#39;t have an account?
			<a href="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here.</a></p></div></div>`;
});
export {
  Page as default
};