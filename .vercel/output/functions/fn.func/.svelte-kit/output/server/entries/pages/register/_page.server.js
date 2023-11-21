import { s as superValidate, a as setError } from "../../../chunks/superValidate.js";
import { z } from "zod";
import { r as redirect, f as fail } from "../../../chunks/index2.js";
import { AuthApiError } from "@supabase/supabase-js";
const registerNewUserSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Email is required" }),
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
  const session = await getSession();
  if (session) {
    throw redirect(301, "/dashboard");
  }
  try {
    const registerForm = await superValidate(registerNewUserSchema);
    return {
      registerForm
    };
  } catch (e) {
    return {
      error: e
    };
  }
}
const actions = {
  register: async ({ request, url, locals: { supabase } }) => {
    const registerNewUserForm = await superValidate(request, registerNewUserSchema);
    console.log("REGISTER NEW USER", registerNewUserForm);
    if (!registerNewUserForm.valid) {
      return fail(400, { registerNewUserForm });
    }
    const { data, error: err } = await supabase.auth.signUp({
      email: registerNewUserForm.data.email,
      password: registerNewUserForm.data.password
    });
    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
        console.log(err);
        return setError(registerNewUserForm, "password", "Invalid email or password.");
      }
      return setError(registerNewUserForm, "password", "Server error. Please try again later.");
    } else {
      return {
        registerNewUserForm,
        newUserRegistered: true
      };
    }
  }
};
export {
  actions,
  load
};
