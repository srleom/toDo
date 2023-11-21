import { c as create_ssr_component, b as add_attribute, e as escape, d as each, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import "devalue";
import { s as superForm } from "../../../chunks/index3.js";
import { w as writable } from "../../../chunks/index.js";
import { t as toast } from "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { T as Toaster } from "../../../chunks/Toaster.js";
const Todo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todo = "Todo" } = $$props;
  let { list = "Inbox" } = $$props;
  let { completed = false } = $$props;
  let { id = "" } = $$props;
  let { dueDate = "2023-11-06T00:00:00.000Z" } = $$props;
  const date = new Date(dueDate);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  const formattedDueDate = date.toLocaleDateString("en-US", options);
  let form;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.completed === void 0 && $$bindings.completed && completed !== void 0)
    $$bindings.completed(completed);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.dueDate === void 0 && $$bindings.dueDate && dueDate !== void 0)
    $$bindings.dueDate(dueDate);
  return `<div class="mb-5 flex items-start space-x-6 rounded-lg border px-8 py-4" role="presentation"><form action="?/completeTodo" method="POST"${add_attribute("this", form, 0)}><input type="hidden" name="id" hidden${add_attribute("value", id, 0)}> <input name="completed" type="checkbox" ${completed ? "checked" : ""} class="mt-1 h-5 w-5"> <input type="hidden" name="completed" value="off"></form> <div class="flex flex-col space-y-3"><div class="flex items-end space-x-5"><p class="${["text-lg", completed ? "line-through" : ""].join(" ").trim()}">${escape(todo)}</p> <form action="?/deleteTodo" method="POST"><input type="hidden" name="id" hidden${add_attribute("value", id, 0)}> <button><img src="icons/bin.svg" alt="delete" class="${"h-4 cursor-pointer opacity-30 hover:opacity-100 " + escape("hidden", true)}"></button></form></div> <div class="flex flex-col items-start space-y-1 xs:flex-row xs:space-x-5 xs:space-y-0"><p class="rounded-lg border border-gray-300 px-2 text-sm">${escape(formattedDueDate)}</p> <p class="rounded-lg border border-gray-300 px-2 text-sm">${escape(list)}</p></div></div></div>`;
});
const isAddTodoOpen = writable(false);
const isAddListOpen = writable(false);
const isSideBarOpen = writable(false);
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listArray = [] } = $$props;
  if ($$props.listArray === void 0 && $$bindings.listArray && listArray !== void 0)
    $$bindings.listArray(listArray);
  return `<div class="mt-3"><ul class="flex flex-col text-lg"><a href="/dashboard" data-sveltekit-preload-data data-svelte-h="svelte-kdksb">All lists</a> <a href="/dashboard?list=Inbox" data-sveltekit-preload-data data-svelte-h="svelte-1qg4u8z">Inbox</a> ${each(listArray, (listItem) => {
    return `<div role="presentation" class="mb-1 flex items-center justify-between gap-3"><a href="${"/dashboard?list=" + escape(listItem.list_name, true)}" class="hover:text-blue" data-sveltekit-preload-data>${escape(listItem.list_name)}</a> <div class="${"flex gap-1 " + escape(
      "hidden",
      true
    )}"><form action="?/deleteList" method="POST"><input type="hidden" name="owner_id" hidden${add_attribute("value", listItem.owner_id, 0)}> <input type="hidden" name="list_id" hidden${add_attribute("value", listItem.id, 0)}> <button data-svelte-h="svelte-1pkdu19"><img src="/icons/bin.svg" alt="delete list" class="h-4 cursor-pointer opacity-30 hover:opacity-100"></button> </form></div> </div>`;
  })}</ul></div>`;
});
const AddTodo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAddTodoOpen, $$unsubscribe_isAddTodoOpen;
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  $$unsubscribe_isAddTodoOpen = subscribe(isAddTodoOpen, (value) => $isAddTodoOpen = value);
  let { data } = $$props;
  let { owner_id } = $$props;
  const { form, errors, enhance } = superForm(data, {
    resetForm: true,
    onResult({ result }) {
      if (result.type === "success") {
        isAddTodoOpen.set(false);
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  let { listArray = [] } = $$props;
  let list_id = "";
  function selectListId() {
    const selectedList = listArray.find((listArray2) => listArray2.list_name === $form.list_name);
    if (selectedList) {
      list_id = selectedList.id;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.owner_id === void 0 && $$bindings.owner_id && owner_id !== void 0)
    $$bindings.owner_id(owner_id);
  if ($$props.listArray === void 0 && $$bindings.listArray && listArray !== void 0)
    $$bindings.listArray(listArray);
  {
    if ($isAddTodoOpen) {
      selectListId();
    }
  }
  $$unsubscribe_isAddTodoOpen();
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return `<div class="rounded-lg border border-gray-500 px-8 py-4 focus-within:border-blue"><form method="POST" action="?/addTodo" class="flex items-end justify-between space-x-6"><div class="flex items-start gap-6"><div><input type="checkbox" class="mt-1 h-5 w-5" disabled> <input type="hidden" name="owner_id"${add_attribute("value", owner_id, 0)}></div> <div class="flex flex-col space-y-3"><input type="text" name="todo"${add_attribute("aria-invalid", $errors.todo ? "true" : void 0, 0)} class="w-64 border-b border-b-gray-300 py-1 text-lg focus:border-b focus:border-b-blue focus:outline-none" placeholder="Todo"${add_attribute("value", $form.todo, 0)}> ${$errors.todo ? `<span class="text-sm font-light">${escape($errors.todo)}</span>` : ``} <div class="flex space-x-5"><input type="date" name="due_date"${add_attribute("aria-invalid", $errors.due_date ? "true" : void 0, 0)} class="rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"${add_attribute("value", $form.due_date, 0)}> ${$errors.dueDate ? `<span class="text-sm font-light">${escape($errors.due_date)}</span>` : ``} <select name="list"${add_attribute("aria-invalid", $errors.list_name ? "true" : void 0, 0)} id="list" class="rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none">${each(listArray, (listItem) => {
    return `<option${add_attribute("value", listItem.list_name, 0)}>${escape(listItem.list_name)}</option>`;
  })}</select> ${$errors.list_name ? `<span class="text-sm font-light">${escape($errors.list_name)}</span>` : ``} <input type="hidden" name="list_id"${add_attribute("value", list_id, 0)}></div></div></div> <button class="mt-8 rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black" type="submit" data-svelte-h="svelte-8gbbau">add todo</button></form></div>`;
});
const AddList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  let { owner_id } = $$props;
  const { form, errors, enhance } = superForm(data, {
    resetForm: true,
    warnings: { duplicateId: false },
    onResult({ result }) {
      if (result.type === "success") {
        isAddListOpen.set(false);
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.owner_id === void 0 && $$bindings.owner_id && owner_id !== void 0)
    $$bindings.owner_id(owner_id);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  return `<form method="POST" action="?/addList" class="mt-5 flex flex-col items-start space-y-3"><input type="hidden" name="owner_id"${add_attribute("value", owner_id, 0)}> <input type="text" name="list_name"${add_attribute("aria-invalid", $errors.list ? "true" : void 0, 0)} placeholder="Add list" class="flex-1 border-b border-b-gray-300 bg-transparent py-1 focus:border-b focus:border-b-blue focus:outline-none" required${add_attribute("value", $form.list_name, 0)}> ${$errors.list_name ? `<span class="text-sm font-light">${escape($errors.list_name)}</span>` : ``} <button type="submit" class="w-auto rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black" data-svelte-h="svelte-ctkmpa">add list</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todo;
  let list;
  let listDashboard;
  let listQueried;
  let $isAddListOpen, $$unsubscribe_isAddListOpen;
  let $isAddTodoOpen, $$unsubscribe_isAddTodoOpen;
  let $isSideBarOpen, $$unsubscribe_isSideBarOpen;
  $$unsubscribe_isAddListOpen = subscribe(isAddListOpen, (value) => $isAddListOpen = value);
  $$unsubscribe_isAddTodoOpen = subscribe(isAddTodoOpen, (value) => $isAddTodoOpen = value);
  $$unsubscribe_isSideBarOpen = subscribe(isSideBarOpen, (value) => $isSideBarOpen = value);
  let { data } = $$props;
  let { form } = $$props;
  const { profile, addListForm, addTodoForm } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  todo = data.todo;
  list = data.list;
  listDashboard = data.listDashboard;
  listQueried = data.listQueried;
  {
    if (form?.addTodoSuccess) {
      toast.success("Todo added!");
    } else if (form?.completeTodoSuccess && form?.completed === "on") {
      toast.success("Todo completed!");
    } else if (form?.completeTodoSuccess && form?.completed === "off") {
      toast.success("Todo un-completed!");
    } else if (form?.deleteTodoSuccess) {
      toast.success("Todo deleted!");
    } else if (form?.addListSuccess) {
      toast.success("List added!");
    } else if (form?.deleteListSuccess) {
      toast.success("List deleted!");
    }
  }
  $$unsubscribe_isAddListOpen();
  $$unsubscribe_isAddTodoOpen();
  $$unsubscribe_isSideBarOpen();
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})} <main><div class="mx-auto grid grid-cols-9"> <div class="${escape($isSideBarOpen ? "block" : "hidden", true) + " lg:hidden"}" role="dialog" aria-modal="true"> <div class="fixed inset-0 z-50"></div> <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"><div class="flex items-center justify-between px-5"><a href="/dashboard" class="-m-1.5 p-1.5" data-svelte-h="svelte-1qdcqyv"><span class="sr-only">toDo</span> <a href="/"><img class="h-8 w-auto" src="/favicon.png" alt="toDo homepage"></a></a> <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" data-svelte-h="svelte-1d2c5z7"><span class="sr-only">Close menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flow-root"><div class="border-b px-5 py-10"><div><p class="font-mono text-xs" data-svelte-h="svelte-spigk">WELCOME BACK,</p> <a href="/dashboard" class="text-2xl">${escape(profile?.username)}</a></div></div> <div class="px-5 py-10"><div class="flex justify-between"><h2 class="mb-2 text-2xl font-medium" data-svelte-h="svelte-18bsbzl">Lists</h2> <button class="relative mb-2 text-2xl transition ease-in-out hover:rotate-45 hover:scale-110 hover:text-blue hover:duration-100" data-svelte-h="svelte-l8tdcc">+</button></div> ${validate_component(List, "List").$$render($$result, { listArray: listDashboard }, {}, {})} <div class="${"mb-5 " + escape($isAddListOpen ? "block" : "hidden", true)}">${validate_component(AddList, "AddList").$$render($$result, { data: addListForm, owner_id: profile?.id }, {}, {})}</div> <form action="/auth/logout" method="POST" data-svelte-h="svelte-xsfaq2"><button type="submit" class="mt-4 rounded-lg border border-gray-500 px-1 py-0.5 font-mono text-xs">Logout</button></form></div></div></div></div>  <div class="hidden lg:col-span-2 lg:flex lg:flex-col"><div class="border-b px-20 py-10"><a href="/" data-svelte-h="svelte-teqqoz"><img src="/favicon.png" class="mb-4 h-10 w-auto" alt="Logo"></a> <div><p class="font-mono text-xs" data-svelte-h="svelte-spigk">WELCOME BACK,</p> <a href="/dashboard" class="text-2xl">${escape(profile?.username)}</a></div> <form action="/auth/logout" method="POST" data-svelte-h="svelte-6bibxi"><button type="submit" class="mt-4 rounded-lg border border-gray-500 px-1 py-0.5 font-mono text-xs">Logout</button></form></div> <div class="px-20 py-10"><div class="flex justify-between"><h2 class="mb-2 text-2xl font-medium" data-svelte-h="svelte-18bsbzl">Lists</h2> <button class="relative mb-2 text-2xl transition ease-in-out hover:rotate-45 hover:scale-110 hover:text-blue hover:duration-100" data-svelte-h="svelte-kz8pqa">+</button></div> ${validate_component(List, "List").$$render($$result, { listArray: listDashboard }, {}, {})} <div class="${"mb-5 " + escape($isAddListOpen ? "block" : "hidden", true)}">${validate_component(AddList, "AddList").$$render($$result, { data: addListForm, owner_id: profile?.id }, {}, {})}</div></div></div>  <div class="col-span-9 border-l px-10 py-10 sm:px-20 lg:col-span-7"> <div class="flex justify-between"><h2 class="text-2xl">${escape(listQueried ? `Todos in ${listQueried}` : "All todos")}</h2>  <div class="flex lg:hidden"><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" data-svelte-h="svelte-41n276"><span class="sr-only">Open main menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div></div> <div class="mb-5 mt-5 h-[1px] bg-black"></div> <button class="mb-5 rounded-lg bg-indigo-600 px-4 py-2 text-white" data-svelte-h="svelte-1gkcvyq">+ New Task</button> <div class="${"mb-5 " + escape($isAddTodoOpen ? "block" : "hidden", true)}">${validate_component(AddTodo, "AddTodo").$$render(
    $$result,
    {
      data: addTodoForm,
      listArray: list,
      owner_id: profile?.id
    },
    {},
    {}
  )}</div> ${todo?.length === 0 ? `<p class="rounded-lg border px-8 py-4 text-lg" data-svelte-h="svelte-11i3vc9">No todos here. Add one now! 🎉</p>` : ``} ${each(todo, (todoItem) => {
    return `${validate_component(Todo, "Todo").$$render(
      $$result,
      {
        todo: todoItem.todo,
        dueDate: todoItem.due_date,
        list: todoItem.list.list_name,
        completed: todoItem.completed,
        id: todoItem.id
      },
      {},
      {}
    )}`;
  })}</div></div></main>`;
});
export {
  Page as default
};
