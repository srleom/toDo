import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { s as superForm } from "../../../chunks/index3.js";
import { t as toast } from "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { T as Toaster } from "../../../chunks/Toaster.js";
/* empty css                                                        */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $updatePasswordForm, $$unsubscribe_updatePasswordForm;
  let $delayed, $$unsubscribe_delayed;
  let { data } = $$props;
  let { form } = $$props;
  const { form: updatePasswordForm, errors, enhance, delayed } = superForm(data.updatePasswordForm, {
    resetForm: true,
    delayMs: 500,
    timeoutMs: 2e3
  });
  $$unsubscribe_updatePasswordForm = subscribe(updatePasswordForm, (value) => $updatePasswordForm = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_delayed = subscribe(delayed, (value) => $delayed = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form?.passwordUpdated) {
      toast.success("Password updated!");
    }
  }
  $$unsubscribe_errors();
  $$unsubscribe_updatePasswordForm();
  $$unsubscribe_delayed();
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-1juwgyd"><a href="/"><span class="sr-only">Todo</span> <img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company"></a> <h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">Reset your password</h2></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="?/updatePassword" method="POST" novalidate><div><div class="flex items-center justify-between" data-svelte-h="svelte-1em2ynd"><label for="password" class="block text-sm font-medium leading-6 text-gray-900">New Password</label></div> <div class="mt-2"><input id="password" name="password" type="password"${add_attribute("aria-invalid", $errors.password ? "true" : void 0, 0)} autocomplete="new-password" required class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", $updatePasswordForm.password, 0)}> ${$errors.password ? `<span class="mt-0.5 text-sm font-light text-red-500">${escape($errors.password)}</span>` : ``}</div></div> <div><button type="submit" class="flex h-8 w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${$delayed ? `Updating your new password...` : `${form?.passwordUpdated ? `Password updated` : `Reset password`}`}</button> ${form?.passwordUpdated ? `<p class="mt-4 text-center text-sm text-indigo-600" data-svelte-h="svelte-2o3kzk">Your password has been updated. Return to the dashboard <a href="/dashboard" class="underline">here</a>.</p>` : ``}</div></form></div></div>`;
});
export {
  Page as default
};
