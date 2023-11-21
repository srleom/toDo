import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail, redirect, error } from '@sveltejs/kit';
import { insertList, insertProfile } from '$lib/server/queries';

const createProfileSchema = z.object({
	username: z
		.string({ required_error: 'Username is required' })
		.refine((data) => /^[a-z]+$/.test(data), {
			message: 'Username must be all lowercase'
		})
		.refine((data) => !/\s/.test(data), {
			message: 'Username must not contain spaces'
		})
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { getSession } }) {
	const session = await getSession();

	if (!session) {
		throw error(401, 'Must be logged in to update profile');
	}

	try {
		const createProfileForm = await superValidate(createProfileSchema);

		return {
			createProfileForm
		};
	} catch (e) {
		return {
			error: e
		};
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	createProfile: async ({ request, locals: { getSession } }) => {
		const updateProfileForm = await superValidate(request, createProfileSchema);
		console.log('POST', updateProfileForm);

		if (!updateProfileForm.valid) {
			return fail(400, { updateProfileForm });
		}

		// create the user
		const session = await getSession();

		if (!session) {
			throw error(401, 'Must be logged in to update profile');
		}

		const newProfile = {
			user_id: session.user.id,
			username: updateProfileForm.data.username,
			email: session.user.email
		};

		const insertedProfile = await insertProfile(newProfile);

		// Onboard user
		const createInboxList = await insertList({
			list_name: 'Inbox',
			owner_id: insertedProfile?.[0].id
		});

		throw redirect(303, '/dashboard');
		return { updateProfileForm, insertedProfile };
	}
};
