import { s as superValidate, a as setError } from "../../../chunks/superValidate.js";
import { z } from "zod";
import { f as fail } from "../../../chunks/index2.js";
const passwordSchema = z.object({
  password: z.string({ required_error: "Password is required" }).refine(
    (password) => {
      const lengthRegex = /^.{8,}$/;
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const digitRegex = /\d/;
      return lengthRegex.test(password) && uppercaseRegex.test(password) && lowercaseRegex.test(password) && digitRegex.test(password);
    },
    {
      message: "The password must be at least 8 characters long, have at least one uppercase letter, one lowercase letter and one digit."
    }
  )
});
async function load({ locals: { getSession } }) {
  await getSession();
  try {
    const updatePasswordForm = await superValidate(passwordSchema);
    return {
      updatePasswordForm
    };
  } catch (e) {
    return {
      error: e
    };
  }
}
const actions = {
  updatePassword: async ({ request, locals: { supabase } }) => {
    const updatePasswordForm = await superValidate(request, passwordSchema);
    console.log("POST", updatePasswordForm);
    if (!updatePasswordForm.valid) {
      return fail(400, { updatePasswordForm });
    }
    const { error: err } = await supabase.auth.updateUser({
      password: updatePasswordForm.data.password
    });
    if (err) {
      const errMessage = err.toString().slice(14);
      return setError(updatePasswordForm, "password", `${errMessage}`);
    } else {
      return {
        updatePasswordForm,
        passwordUpdated: true
      };
    }
  }
};
export {
  actions,
  load
};
