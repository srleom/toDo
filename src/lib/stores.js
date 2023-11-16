import { writable } from 'svelte/store';

export const isAddTodoOpen = writable(false);
export const isAddListOpen = writable(false);
export const isSideBarOpen = writable(false);
