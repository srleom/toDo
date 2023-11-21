import { r as redirect } from "../../../../chunks/index2.js";
const GET = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get("code");
  console.log(url.searchParams.getAll("error"));
  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }
  throw redirect(303, "/update-password");
};
export {
  GET
};
