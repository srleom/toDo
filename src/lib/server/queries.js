import { asc, desc, eq } from 'drizzle-orm';
import db from './db';
import { toDo, list } from './schema';

export async function loadTodo() {
	const allTodo = await db.select().from(toDo).orderBy(asc(toDo.completed));
	return allTodo;
}

export async function loadList() {
	const allList = await db.select().from(list);
	return allList;
}

/**
 * This is a function that inserts a new todo.
 * @param {Object} newTodo
 * @param {string} newTodo.todo
 * @param {string} newTodo.dueDate
 * @param {string} newTodo.list
 * @returns {Promise<Array<{
 *   id: string,
 *   todo: string,
 *   list: string,
 *   completed: boolean,
 *   createdAt: Date,
 *   dueDate: Date
 * }>>}
 */
export async function insertTodo(newTodo) {
	const insertedTodo = await db.insert(toDo).values(newTodo).returning();
	// @ts-ignore
	return insertedTodo;
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
	const completedTodo = await db
		.update(toDo)
		.set({ completed: toBeCompletedTodo.completed })
		.where(eq(toDo.id, toBeCompletedTodo.id))
		.returning();

	// @ts-ignore
	return completedTodo;
}

/**
 * This is a function that deletes a todo.
 * @param {string} id
 * @returns {Promise<Array<{
 *   id: string,
 *   todo: string,
 *   list: string,
 *   completed: boolean,
 *   createdAt: Date,
 *   dueDate: Date
 * }>>}
 */

export async function deleteTodo(id) {
	const deletedTodo = await db.delete(toDo).where(eq(toDo.id, id)).returning();

	// @ts-ignore
	return deletedTodo;
}

/**
 * This is a function that inserts a new todo.
 * @param {Object} newList
 * @param {string} newList.listName
 * @returns {Promise<Array<{
 *   listName: string,
 *   id: string,
 *   createdAt: Date,
 * }>>}
 */
export async function insertList(newList) {
	const insertedTodo = await db.insert(list).values(newList).returning();
	// @ts-ignore
	return insertedTodo;
}

/**
 * This is a function that deletes a todo.
 * @param {string} id
 * @returns {Promise<Array<{
 *   listName: string,
 *   id: string,
 *   createdAt: Date,
 * }>>}
 */

export async function deleteList(id) {
	const deletedTodo = await db.delete(list).where(eq(list.id, id)).returning();

	// @ts-ignore
	return deletedTodo;
}
