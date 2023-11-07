import { fail } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import {
	loadSpecificTodo,
	loadList,
	insertTodo,
	completeTodo,
	insertList,
	deleteTodo,
	deleteList
} from '$lib/server/queries';
import { toPascalCase } from '$lib/utils';

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
	list: z.string({ required_error: 'List is required' }).default('Inbox')
});

const addListSchema = z.object({
	listName: z
		.string({ required_error: 'List is required' })
		.min(2, { message: 'List must be more than 1 character' })
		.max(49, { message: 'List must be less than 50 characters' })
		.trim()
});

// Load data

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const pageName = toPascalCase(params.list);

	try {
		const todo = await loadSpecificTodo(pageName);
		const list = await loadList();
		const addTodoForm = await superValidate(addTodoSchema);
		const addListForm = await superValidate(addListSchema);

		return {
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

export const actions = {
	addTodo: async ({ request }) => {
		try {
			const addTodoForm = await superValidate(request, addTodoSchema);
			console.log('POST', addTodoForm);

			if (!addTodoForm.valid) {
				return fail(400, { addTodoForm });
			}
			const insertedTodo = await insertTodo(addTodoForm.data);
			return { addTodoSuccess: true, addTodoForm, insertedTodo };
		} catch (error) {
			console.error(error);
			return {
				addTodoSuccess: false,
				error: 'Error adding todo.'
			};
		}
	},

	completeTodo: async ({ request }) => {
		try {
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

			// @ts-ignore
			const updatedTodo = await completeTodo(completedTodo);
			return { completeTodoSuccess: true, completed: updatedTodo[0].completed };
		} catch (error) {
			console.error(error);
			return {
				completeTodoSuccess: false,
				error: 'Error completing todo.'
			};
		}
	},

	deleteTodo: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = formData.get('id');

			// @ts-ignore
			const deletedTodo = await deleteTodo(id);
			return { deleteTodoSuccess: true, deletedTodo };
		} catch (error) {
			console.error(error);
			return {
				deleteTodoSuccess: false,
				error: 'Error deleting todo.'
			};
		}
	},

	addList: async ({ request }) => {
		try {
			const addListForm = await superValidate(request, addListSchema);
			console.log('POST LIST', addListForm);

			if (!addListForm.valid) {
				return fail(400, { addListForm });
			}
			const insertedList = await insertList(addListForm.data);
			return { addListSuccess: true, addListForm, insertedList };
		} catch (error) {
			console.error(error);
			return {
				addListSuccess: false,
				error: 'Error adding list.'
			};
		}
	},

	deleteList: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = formData.get('id');

			// @ts-ignore
			const deletedList = await deleteList(id);
			return { deleteListSuccess: true, deletedList };
		} catch (error) {
			console.error(error);
			return {
				deleteListSuccess: false,
				error: 'Error deleting list.'
			};
		}
	}
};
