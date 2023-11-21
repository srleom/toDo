import { s as superValidate, a as setError } from "../../../chunks/superValidate.js";
import { z } from "zod";
import { r as redirect, f as fail } from "../../../chunks/index2.js";
const emailSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Email is required" })
});
async function load({ locals: { getSession } }) {
  const session = await getSession();
  if (session) {
    throw redirect(301, "/dashboard");
  }
  try {
    const getEmailForm = await superValidate(emailSchema);
    return {
      getEmailForm
    };
  } catch (e) {
    return {
      error: e
    };
  }
}
const actions = {
  forgetPassword: async ({ request, locals: { supabase } }) => {
    const getEmailForm = await superValidate(request, emailSchema);
    console.log("POST", getEmailForm);
    if (!getEmailForm.valid) {
      return fail(400, { getEmailForm });
    }
    const { error: err } = await supabase.auth.resetPasswordForEmail(getEmailForm.data.email, {
      redirectTo: "http://localhost:5173/auth/callback"
    });
    if (err) {
      return setError(
        getEmailForm,
        "email",
        "Something went wrong resetting your password. Please try again later."
      );
    } else {
      return {
        getEmailForm,
        resetPasswordEmailSent: true
      };
    }
  }
};
export {
  actions,
  load
};
