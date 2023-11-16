import { superValidate, setError } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

const registerNewUserSchema = z.object({
	email: z.string({ required_error: 'Email is required' }).email({ message: 'Email is required' }),
	password: z.string({ required_error: 'Password is required' }).refine(
		(password) => {
			// Regular expressions for checking password requirements
			const lengthRegex = /^.{8,}$/;
			const uppercaseRegex = /[A-Z]/;
			const lowercaseRegex = /[a-z]/;
			const digitRegex = /\d/;

			return (
				lengthRegex.test(password) &&
				uppercaseRegex.test(password) &&
				lowercaseRegex.test(password) &&
				digitRegex.test(password)
			);
		},
		{
			message:
				'The password must be at least 8 characters long, have at least one uppercase letter, one lowercase letter and one digit.'
		}
	)
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { getSession } }) {
	const session = await getSession();

	if (session) {
		throw redirect(301, '/dashboard');
	}

	try {
		const registerForm = await superValidate(registerNewUserSchema);

		return {
			registerForm
		};
	} catch (e) {
		// Handle any potential errors here
		return {
			error: e
		};
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ request, url, locals: { supabase } }) => {
		const registerNewUserForm = await superValidate(request, registerNewUserSchema);
		console.log('REGISTER NEW USER', registerNewUserForm);

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
				return setError(registerNewUserForm, 'password', 'Invalid email or password.');
			}
			return setError(registerNewUserForm, 'password', 'Server error. Please try again later.');
		} else {
			return {
				registerNewUserForm,
				newUserRegistered: true
			};
		}
	}
};
