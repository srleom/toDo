import { supabase } from './supabaseClient';

/** @param {string} id */
export async function loadUserProfile(id) {
	let { data: profile, error } = await supabase.from('profile').select('*').eq('user_id', id);
	if (error) {
		console.log(error);
	}
	return profile;
}

/**
 * This function inserts a new profile.
 * @param {Object} newProfile
 * @param {string} newProfile.username
 * @param {string} newProfile.userId
 * @param {string | undefined} newProfile.email
 */
export async function insertProfile(newProfile) {
	const { data, error } = await supabase.from('profile').insert([newProfile]).select();
	return data;
}

/**
 * @param {number} ownerId
 * @param {string | null} listId
 */
export async function loadRequiredTodo(ownerId, listId) {
	if (listId) {
		let { data: toDo, error } = await supabase
			.from('toDo')
			.select(`id, todo, due_date, completed, owner_id, list (id, list_name)`)
			.eq('owner_id', ownerId)
			.eq('list_id', listId)
			.order('completed', { ascending: true });
		return toDo;
	} else {
		let { data: toDo, error } = await supabase
			.from('toDo')
			.select(`id, todo, due_date, completed, owner_id, list (id, list_name)`)
			.eq('owner_id', ownerId)

			.order('completed', { ascending: true });
		return toDo;
	}
}

/**
 * Gets specific List Id by name, if no id provided, gets all List Ids.
 * @param {number} ownerId
 * @param { string | null } listName
 */
export async function getListIdFromName(ownerId, listName) {
	let { data: list, error } = await supabase
		.from('list')
		.select('id')
		.eq('owner_id', ownerId)
		.eq('list_name', listName);
	return list;
}

/** @param {number} ownerId */
export async function loadAllList(ownerId) {
	let { data: list, error } = await supabase.from('list').select('*').eq('owner_id', ownerId);
	return list;
}

/**
 * This is a function that inserts a new todo.
 * @param {Object} newTodo
 * @param {string} newTodo.todo
 * @param {string} newTodo.dueDate
 * @param {string} newTodo.listId
 */
export async function insertTodo(newTodo) {
	const { data, error } = await supabase.from('toDo').insert([newTodo]).select();
	return data;
}

/**
 * This is a function that updated when a todo is completed.
 * @param {Object} toBeCompletedTodo
 * @param {boolean} toBeCompletedTodo.completed
 * @param {string} toBeCompletedTodo.id
 * @returns {Promise<Array<{
 *   id: string,
 *   todo: string,
 *   list: string,
 *   completed: boolean,
 *   createdAt: Date,
 *   dueDate: Date
 * }>>}
 */
export async function completeTodo(toBeCompletedTodo) {
	const { data, error } = await supabase
		.from('toDo')
		.update({ completed: toBeCompletedTodo.completed })
		.eq('id', toBeCompletedTodo.id)
		.select();
	return data;
}

/**
 * This is a function that deletes a todo.
 * @param {string} id
 */

export async function deleteTodo(id) {
	const { error } = await supabase.from('toDo').delete().eq('id', id);
}

/**
 * This is a function that inserts a new todo.
 * @param {Object} newList
 * @param {string} newList.listName
 */
export async function insertList(newList) {
	const { data, error } = await supabase.from('list').insert([newList]).select();

	return data;
}

/**
 * This is a function that deletes a todo.
 * @param {string} id
 */

export async function deleteList(id) {
	const { error } = await supabase.from('list').delete().eq('list_id', id);

	return error;
}
