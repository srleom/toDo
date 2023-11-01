import { supabase } from '$lib/supabaseClient';
import { fail } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms/server';

// Zod Schema

import { z } from 'zod';

const today = new Date();
const todayISO = today.toISOString().split('T')[0];

const addTodoSchema = z.object({
	todo: z
		.string({ required_error: 'Task is required' })
		.min(2, { message: 'Task must be more than 1 character' })
		.max(128, { message: 'Task must be less than 128 characters' })
		.trim(),
	due_date: z.string({ required_error: 'Date is required' }).default(todayISO),
	list: z.string({ required_error: 'List is required' }).default('Inbox')
});

// Load data

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const loadTodo = async () => {
		const { data: todo, error: todoError } = await supabase
			.from('toDo')
			.select('*')
			.order('completed', { ascending: true });
		if (todoError) {
			throw fail(500, { message: 'Database error: ' + todoError.message });
		}
		return todo;
	};

	const loadList = async () => {
		const { data: list, error: listError } = await supabase.from('list').select('*');
		if (listError) {
			throw fail(500, { message: 'Database error: ' + listError.message });
		}
		return list;
	};

	const addTodoForm = await superValidate(addTodoSchema);

	try {
		const todo = await loadTodo();
		const list = await loadList();

		return {
			todo,
			list,
			addTodoForm
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
		const addTodoForm = await superValidate(request, addTodoSchema);
		console.log('POST', addTodoForm);

		if (!addTodoForm.valid) {
			return fail(400, { addTodoForm });
		}

		const { error } = await supabase.from('toDo').upsert([addTodoForm.data]);
		return { addTodoForm };
	},

	completeTodo: async ({ request }) => {
		try {
			const formData = await request.formData();
			const completed = formData.get('completed');
			const id = formData.get('id');

			const { data } = await supabase
				.from('toDo')
				.update({ completed: completed })
				.eq('id', id)
				.select();

			return { completeTodoSuccess: true, completed };
		} catch (error) {
			console.log(error);
		}
	},

	deleteTodo: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = formData.get('id');
			const { error } = await supabase.from('toDo').delete().eq('id', id);

			return { deleteTodoSuccess: true };
		} catch (error) {
			console.error('Error deleting data:', error);
			return {
				success: false,
				error: 'Error deleting data.'
			};
		}
	},

	deleteList: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = formData.get('id');
			const { error } = await supabase.from('list').delete().eq('id', id);

			return { deleteListSuccess: true };
		} catch (error) {
			console.error('Error deleting data:', error);
			return {
				success: false,
				error: 'Error deleting data.'
			};
		}
	}
};
