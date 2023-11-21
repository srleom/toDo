import { createClient } from "@supabase/supabase-js";
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "./public.js";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
async function loadUserProfile(id) {
  let { data: profile, error } = await supabase.from("profile").select("*").eq("user_id", id);
  if (error) {
    console.log(error);
  }
  return profile;
}
async function insertProfile(newProfile) {
  const { data, error } = await supabase.from("profile").insert([newProfile]).select();
  if (error) {
    console.log(error);
  }
  return data;
}
async function loadRequiredTodo(owner_id, list_id) {
  if (list_id) {
    let { data: toDo, error } = await supabase.from("toDo").select(`id, todo, due_date, completed, owner_id, list (id, list_name)`).eq("owner_id", owner_id).eq("list_id", list_id).order("completed", { ascending: true });
    if (error) {
      console.log(error);
    }
    return toDo;
  } else {
    let { data: toDo, error } = await supabase.from("toDo").select(`id, todo, due_date, completed, owner_id, list (id, list_name)`).eq("owner_id", owner_id).order("completed", { ascending: true });
    if (error) {
      console.log(error);
    }
    return toDo;
  }
}
async function getListIdFromName(owner_id, list_name) {
  let { data: list, error } = await supabase.from("list").select("id").eq("owner_id", owner_id).eq("list_name", list_name);
  if (error) {
    console.log(error);
  }
  return list;
}
async function loadAllList(owner_id) {
  let { data: list, error } = await supabase.from("list").select("*").eq("owner_id", owner_id);
  if (error) {
    console.log(error);
  }
  return list;
}
async function insertTodo(newTodo) {
  const { data, error } = await supabase.from("toDo").insert([newTodo]).select();
  if (error) {
    console.log(error);
  }
  return data;
}
async function completeTodo(toBeCompletedTodo) {
  const { data, error } = await supabase.from("toDo").update({ completed: toBeCompletedTodo.completed }).eq("id", toBeCompletedTodo.id).select();
  if (error) {
    console.log(error);
  }
  return data;
}
async function deleteTodo(id) {
  const { error } = await supabase.from("toDo").delete().eq("id", id);
  if (error) {
    console.log(error);
  }
}
async function insertList(newList) {
  const { data, error } = await supabase.from("list").insert([newList]).select();
  if (error) {
    console.log(error);
  }
  return data;
}
async function deleteList(owner_id, list_id) {
  await loadRequiredTodo(owner_id, list_id);
  const inboxListId = await getListIdFromName(owner_id, "Inbox").then((data) => {
    if (data) {
      data[0].id;
    }
  });
  await supabase.from("toDo").update({ list_id: inboxListId }).eq("list_id", list_id).select();
  const { error } = await supabase.from("list").delete().eq("id", list_id);
  if (error) {
    console.log(error);
  }
  return error;
}
export {
  loadRequiredTodo as a,
  loadAllList as b,
  completeTodo as c,
  deleteTodo as d,
  insertList as e,
  deleteList as f,
  getListIdFromName as g,
  insertProfile as h,
  insertTodo as i,
  loadUserProfile as l
};
