import { setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail, redirect, error } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

const emailSchema = z.object({
	email: z.string({ required_error: 'Email is required' }).email({ message: 'Email is required' })
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { getSession } }) {
	const session = await getSession();

	if (session) {
		throw redirect(301, '/dashboard');
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

/** @type {import('./$types').Actions} */
export const actions = {
	forgetPassword: async ({ request, locals: { supabase } }) => {
		const getEmailForm = await superValidate(request, emailSchema);
		console.log('POST', getEmailForm);

		if (!getEmailForm.valid) {
			return fail(400, { getEmailForm });
		}

		const { error: err } = await supabase.auth.resetPasswordForEmail(getEmailForm.data.email, {
			redirectTo: 'http://localhost:5173/auth/callback'
		});

		if (err) {
			return setError(
				getEmailForm,
				'email',
				'Something went wrong resetting your password. Please try again later.'
			);
		} else {
			return {
				getEmailForm,
				resetPasswordEmailSent: true
			};
		}
	}
};
