import { setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail, redirect, error } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

const loginSchema = z.object({
	email: z.string({ required_error: 'Email is required' }).email({ message: 'Email is required' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(1, { message: 'Password is required' })
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { getSession } }) {
	const session = await getSession();

	if (session) {
		throw redirect(301, '/dashboard');
	}

	try {
		const loginForm = await superValidate(loginSchema);

		return {
			loginForm
		};
	} catch (e) {
		return {
			error: e
		};
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, url, locals: { supabase } }) => {
		const loginForm = await superValidate(request, loginSchema);
		console.log('POST', loginForm);

		if (!loginForm.valid) {
			loginForm.data.password = '';
			return fail(400, { loginForm });
		}

		const { data, error: err } = await supabase.auth.signInWithPassword({
			email: loginForm.data.email,
			password: loginForm.data.password
		});

		if (err) {
			const errMessage = err.toString().slice(14);
			if (err instanceof AuthApiError && err.status === 400) {
				console.log('Auth error: ', err);
				loginForm.data.password = '';
				return setError(loginForm, 'password', `${errMessage}`);
			}

			loginForm.data.password = '';
			console.log('Server error: ', err);
			return setError(
				loginForm,
				'password',
				`Server error: ${errMessage}. Please try again later.`
			);
		} else {
			throw redirect(301, '/dashboard')
			return { loginForm };
		}
	}
};
