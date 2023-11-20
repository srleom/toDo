import { setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail, redirect, error } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

const passwordSchema = z.object({
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

/** @type {import('./$types').Actions} */
export const actions = {
	updatePassword: async ({ request, locals: { supabase } }) => {
		const updatePasswordForm = await superValidate(request, passwordSchema);
		console.log('POST', updatePasswordForm);

		if (!updatePasswordForm.valid) {
			return fail(400, { updatePasswordForm });
		}

		const { error: err } = await supabase.auth.updateUser({
			password: updatePasswordForm.data.password
		});

		if (err) {
			const errMessage = err.toString().slice(14);
			return setError(updatePasswordForm, 'password', `${errMessage}`);
		} else {
			return {
				updatePasswordForm,
				passwordUpdated: true
			};
		}
	}
};
