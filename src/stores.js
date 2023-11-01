import { writable } from 'svelte/store';

export const isAddTodoOpen = writable(false);
export const addTodoSuccess = writable(false);
