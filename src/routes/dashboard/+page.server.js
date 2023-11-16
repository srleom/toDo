import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import {
	loadRequiredTodo,
	loadAllList,
	insertTodo,
	completeTodo,
	insertList,
	deleteTodo,
	deleteList,
	loadUserProfile,
	getListIdFromName
} from '$lib/server/queries';
import { supabase } from '$lib/server/supabaseClient';

// Zod Schema

const today = new Date();
const todayISO = today.toISOString().split('T')[0];
const addTodoSchema = z.object({
	todo: z
		.string({ required_error: 'Task is required' })
		.min(2, { message: 'Task must be more than 1 character' })
		.max(128, { message: 'Task must be less than 128 characters' })
		.trim(),
	dueDate: z.string({ required_error: 'Date is required' }).default(todayISO),
	list: z.string({ required_error: 'List is required' }).default('Inbox'),
	listId: z.string(),
	ownerId: z.number()
});

const addListSchema = z.object({
	listName: z
		.string({ required_error: 'List is required' })
		.min(2, { message: 'List must be more than 1 character' })
		.max(49, { message: 'List must be less than 50 characters' })
		.trim(),
	ownerId: z.number()
});

// Load data

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, locals: { getSession } }) {
	// Get session
	const session = await getSession();

	if (!session) {
		throw redirect(301, '/login');
	}

	// Check for profile
	const profileData = await loadUserProfile(session.user.id);
	if (!profileData) {
		throw redirect(301, '/profile');
	}

	const profile = profileData[0];

	// Search params
	const listQueried = url.searchParams.get('list');
	let listIdQueried = null;
	if (listQueried) {
		listIdQueried = await getListIdFromName(profile.id, listQueried).then((list) => list[0].id);
	}

	try {
		const todo = await loadRequiredTodo(profile.id, listIdQueried);
		const list = await loadAllList(profile.id);
		console.log(list);
		const addTodoForm = await superValidate(addTodoSchema);
		const addListForm = await superValidate(addListSchema);

		return {
			listQueried,
			profile,
			todo,
			list,
			addTodoForm,
			addListForm
		};
	} catch (e) {
		// Handle any potential errors here
		return {
			error: e
		};
	}
}

// Form actions

/** @type {import('./$types').Actions} */
export const actions = {
	addTodo: async ({ request }) => {
		const addTodoForm = await superValidate(request, addTodoSchema);
		console.log('POST', addTodoForm);

		if (!addTodoForm.valid) {
			return fail(400, { addTodoForm });
		}

		// @ts-ignore
		delete addTodoForm.data.list;

		const insertedTodo = await insertTodo(addTodoForm.data);
		return { addTodoSuccess: true, addTodoForm, insertedTodo };
	},

	completeTodo: async ({ request }) => {
		const formData = await request.formData();
		let completed = formData.get('completed');
		if (completed === 'on') {
			// @ts-ignore
			completed = true;
		} else if (completed === 'off') {
			// @ts-ignore
			completed = false;
		}
		const id = formData.get('id');
		const completedTodo = { completed, id };

		if (!completedTodo) {
			return fail(400, { completedTodo });
		}

		// @ts-ignore
		const updatedTodo = await completeTodo(completedTodo);
		return { completeTodoSuccess: true, completed: updatedTodo[0].completed };
	},

	deleteTodo: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		if (!id) {
			return fail(400, { id });
		}

		// @ts-ignore
		const deletedTodo = await deleteTodo(id);
		return { deleteTodoSuccess: true, deletedTodo };
	},

	addList: async ({ request }) => {
		const addListForm = await superValidate(request, addListSchema);
		console.log('POST LIST', addListForm);

		if (!addListForm.valid) {
			return fail(400, { addListForm });
		}
		const insertedList = await insertList(addListForm.data);
		return { addListSuccess: true, addListForm, insertedList };
	},

	deleteList: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		if (!id) {
			return fail(400, { id });
		}

		// @ts-ignore
		const deletedList = await deleteList(id);
		throw redirect(301, '/dashboard');
		return { deleteListSuccess: true, deletedList };
	}
};
