import { supabase } from './supabaseClient';

/** @param {string} id
 */
export async function loadUserProfile(id) {
	let { data, error } = await supabase.from('profile').select('*').eq('user_id', id);
	if (error) {
		console.log(error);
		return error;
	}
	return data;
}

/**
 * This function inserts a new profile.
 * @param {Object} newProfile
 * @param {string} newProfile.username
 * @param {string} newProfile.user_id
 * @param {string | undefined} newProfile.email
 */
export async function insertProfile(newProfile) {
	const { data, error } = await supabase.from('profile').insert([newProfile]).select();
	if (error) {
		console.log(error);
		return error;
	}
	return data;
}

/**
 * @param {number} owner_id
 * @param {string | null} list_id
 */
export async function loadRequiredTodo(owner_id, list_id) {
	if (list_id) {
		let { data, error } = await supabase
			.from('toDo')
			.select(`id, todo, due_date, completed, owner_id, list (id, list_name)`)
			.eq('owner_id', owner_id)
			.eq('list_id', list_id)
			.order('completed', { ascending: true });
		if (error) {
			console.log(error);
			return error;
		}
		return data;
	} else {
		let { data, error } = await supabase
			.from('toDo')
			.select(`id, todo, due_date, completed, owner_id, list (id, list_name)`)
			.eq('owner_id', owner_id)
			.order('completed', { ascending: true });
		if (error) {
			console.log(error);
			return error;
		}
		return data;
	}
}

/**
 * Gets specific List Id by name, if no id provided, gets all List Ids.
 * @param {number} owner_id
 * @param { string | null } list_name
 */
export async function getListIdFromName(owner_id, list_name) {
	let { data, error } = await supabase
		.from('list')
		.select('id')
		.eq('owner_id', owner_id)
		.eq('list_name', list_name);
	if (error) {
		console.log(error);
		return error;
	}
	return data;
}

/** @param {number} owner_id */
export async function loadAllList(owner_id) {
	let { data, error } = await supabase.from('list').select('*').eq('owner_id', owner_id);
	if (error) {
		console.log(error);
		return error;
	}
	return data;
}

/**
 * This is a function that inserts a new todo.
 * @param {Object} newTodo
 * @param {string} newTodo.todo
 * @param {string} newTodo.due_date
 * @param {string} newTodo.list_id
 * @param {number} newTodo.owner_id
 */
export async function insertTodo(newTodo) {
	const { data, error } = await supabase.from('toDo').insert([newTodo]).select();
	if (error) {
		console.log(error);
		return error;
	}
	return data;
}

/**
 * This is a function that updated when a todo is completed.
 * @param {Object} toBeCompletedTodo
 * @param {string} toBeCompletedTodo.completed
 * @param {string} toBeCompletedTodo.id
 */
export async function completeTodo(toBeCompletedTodo) {
	const { data, error } = await supabase
		.from('toDo')
		.update({ completed: toBeCompletedTodo.completed })
		.eq('id', toBeCompletedTodo.id)
		.select();
	if (error) {
		console.log(error);
		return error;
	}
	return data;
}

/**
 * This is a function that deletes a todo.
 * @param {string} id
 */

export async function deleteTodo(id) {
	const { error } = await supabase.from('toDo').delete().eq('id', id);
	if (error) {
		console.log(error);
		return error;
	}
	return { success: true };
}

/**
 * This is a function that inserts a new todo.
 * @param {Object} newList
 * @param {string} newList.list_name
 * @param {number} newList.owner_id
 */
export async function insertList(newList) {
	const { data, error } = await supabase.from('list').insert([newList]).select();
	if (error) {
		console.log(error);
		return error;
	}
	return data;
}

/**
 * This is a function that deletes a list.
 * @param {number} owner_id
 * @param {string} list_id
 */

export async function deleteList(owner_id, list_id) {
	const deletedListTodo = await loadRequiredTodo(owner_id, list_id);
	const inboxListIdData = await getListIdFromName(owner_id, 'Inbox');
	const inboxListId = inboxListIdData?.[0].id;

	const { data, error: updateListError } = await supabase
		.from('toDo')
		.update({ list_id: inboxListId })
		.eq('list_id', list_id)
		.select();

	if (updateListError) {
		console.log(updateListError);
		return updateListError;
	}

	const { error } = await supabase.from('list').delete().eq('id', list_id);
	if (error) {
		console.log(error);
		return error;
	}

	return { success: true };
}
