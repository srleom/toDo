import { r as redirect, e as error } from "../../../../chunks/index2.js";
const GET = async (event) => {
  const {
    url,
    locals: { supabase }
  } = event;
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");
  const next = url.searchParams.get("next") ?? "/";
  if (token_hash && type) {
    const { error: error2 } = await supabase.auth.verifyOtp({ token_hash, type });
    if (!error2) {
      throw redirect(303, `/${next.slice(1)}`);
    }
  }
  throw error(500, "Server error.");
};
export {
  GET
};
