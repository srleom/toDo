import { r as redirect, f as fail } from "../../../chunks/index2.js";
import { s as superValidate } from "../../../chunks/superValidate.js";
import { z } from "zod";
import { l as loadUserProfile, g as getListIdFromName, a as loadRequiredTodo, b as loadAllList, i as insertTodo, c as completeTodo, d as deleteTodo, e as insertList, f as deleteList } from "../../../chunks/queries.js";
const today = /* @__PURE__ */ new Date();
const todayISO = today.toISOString().split("T")[0];
const addTodoSchema = z.object({
  todo: z.string({ required_error: "Task is required" }).min(2, { message: "Task must be more than 1 character" }).max(128, { message: "Task must be less than 128 characters" }).trim(),
  due_date: z.string({ required_error: "Date is required" }).default(todayISO),
  list_name: z.string({ required_error: "List is required" }).default("Inbox"),
  list_id: z.string(),
  owner_id: z.number()
});
const addListSchema = z.object({
  list_name: z.string({ required_error: "List is required" }).min(2, { message: "List must be more than 1 character" }).max(49, { message: "List must be less than 50 characters" }).trim(),
  owner_id: z.number()
});
async function load({ url, locals: { getSession } }) {
  const session = await getSession();
  if (!session) {
    throw redirect(301, "/login");
  }
  const profileData = await loadUserProfile(session.user.id);
  if (profileData?.length === 0) {
    throw redirect(301, "/profile");
  }
  const profile = profileData?.[0];
  const listQueried = url.searchParams.get("list");
  let listIdQueried = null;
  if (listQueried) {
    listIdQueried = await getListIdFromName(profile.id, listQueried).then((list) => list?.[0].id);
  }
  try {
    const todo = await loadRequiredTodo(profile.id, listIdQueried);
    const list = await loadAllList(profile.id);
    const addTodoForm = await superValidate(addTodoSchema);
    const addListForm = await superValidate(addListSchema);
    const excludeInboxList = { keyToExclude: "list_name", valueToExclude: "Inbox" };
    const listDashboard = list?.filter(
      (listItem) => listItem[excludeInboxList.keyToExclude] !== excludeInboxList.valueToExclude
    );
    return {
      listQueried,
      profile,
      todo,
      list,
      listDashboard,
      addTodoForm,
      addListForm
    };
  } catch (e) {
    return {
      error: e
    };
  }
}
const actions = {
  addTodo: async ({ request }) => {
    const addTodoForm = await superValidate(request, addTodoSchema);
    console.log("POST", addTodoForm);
    if (!addTodoForm.valid) {
      return fail(400, { addTodoForm });
    }
    const { list_name, ...rest } = addTodoForm.data;
    const addTodoData = rest;
    const insertedTodo = await insertTodo(addTodoData);
    return { addTodoSuccess: true, addTodoForm, insertedTodo };
  },
  completeTodo: async ({ request }) => {
    const formData = await request.formData();
    let completed = formData.get("completed");
    const id = formData.get("id");
    const completedTodo = { completed, id };
    if (!completedTodo) {
      return fail(400, { completedTodo });
    }
    await completeTodo(completedTodo);
    return { completeTodoSuccess: true, completed };
  },
  deleteTodo: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    if (!id) {
      return fail(400, { id });
    }
    const deletedTodo = await deleteTodo(id);
    return { deleteTodoSuccess: true, deletedTodo };
  },
  addList: async ({ request }) => {
    const addListForm = await superValidate(request, addListSchema);
    console.log("POST LIST", addListForm);
    if (!addListForm.valid) {
      return fail(400, { addListForm });
    }
    const insertedList = await insertList(addListForm.data);
    return { addListSuccess: true, addListForm, insertedList };
  },
  deleteList: async ({ request }) => {
    const formData = await request.formData();
    const list_id = formData.get("list_id");
    const owner_id = formData.get("owner_id");
    if (!list_id) {
      return fail(400, { list_id });
    }
    await deleteList(owner_id, list_id);
    throw redirect(301, "/dashboard");
  }
};
export {
  actions,
  load
};
