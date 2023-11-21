import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ locals: { supabase } }) => {
	const { error: err } = await supabase.auth.signOut();

	if (err) {
		throw error(500, 'Something went wrong logging you out.');
	}

	throw redirect(303, '/');
};
