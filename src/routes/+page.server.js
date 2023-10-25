import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import { z } from 'zod';

// Load data

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const loadTodo = async () => {
		const { data: todo, error: todoError } = await supabase
			.from('toDo')
			.select('*')
			.order('completed', { ascending: true });
		if (todoError) {
			throw error(500, { message: 'Database error: ' + todoError.message });
		}
		return todo;
	};

	const loadList = async () => {
		const { data: list, error: listError } = await supabase.from('categoryList').select('*');
		if (listError) {
			throw error(500, { message: 'Database error: ' + listError.message });
		}
		return list;
	};

	try {
		const todo = await loadTodo();
		const list = await loadList();

		return {
			todo,
			list
		};
	} catch (e) {
		// Handle any potential errors here
		return {
			error: e
		};
	}
}

// Zod schema

const addTodoSchema = z.object({
	todo: z
		.string({ required_error: 'Task is required' })
		.min(3, { message: 'Task must be more than 2 characters' })
		.max(128, { message: 'Task must be less than 128 characters' })
		.trim(),
	due_date: z.string({ required_error: 'Date is required' }),
	list: z.string({ required_error: 'List is required' }),
	id: z.string({ required_error: 'Id is required' }).uuid()
});

// Form actions

export const actions = {
	add: async ({ request }) => {
		try {
			const formData = Object.fromEntries(await request.formData());

			const newTodo = {
				...formData,
				id: crypto.randomUUID() // Implement a unique ID generation function
			};

			const result = addTodoSchema.parse(newTodo);
			console.log(result);

			const { error } = await supabase.from('toDo').upsert([newTodo]);
			return { success: true };
		} catch (error) {
			// @ts-ignore
			const { fieldErrors: errors } = error.flatten();
			console.log(errors);

			return {
				success: false,
				error: 'An error occurred while processing form data.'
			};
		}
	},

	complete: async ({ request }) => {
		try {
			const formData = await request.formData();
			const completed = formData.get('completed');
			console.log(completed);
			const id = formData.get('id');

			const { data } = await supabase
				.from('toDo')
				.update({ completed: completed })
				.eq('id', id)
				.select();

			return { success: true };
		} catch (error) {
			console.log(error);
		}
	},

	delete: async ({ request }) => {
		try {
			const formData = await request.formData();

			const id = formData.get('id');

			const { error } = await supabase.from('toDo').delete().eq('id', id);

			return { success: true };
		} catch (error) {
			console.error('Error deleting data:', error);
			return {
				success: false,
				error: 'Error deleting data.'
			};
		}
	}
};
