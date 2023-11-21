import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "../../chunks/public.js";
import { createBrowserClient, isBrowser, combineChunks, parse } from "@supabase/ssr";
const load = async ({ fetch, data, depends }) => {
  depends("supabase:auth");
  const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch
    },
    cookies: {
      get(key) {
        if (!isBrowser()) {
          return JSON.stringify(data.session);
        }
        const cookie = combineChunks(key, (name) => {
          const cookies = parse(document.cookie);
          return cookies[name];
        });
        return cookie;
      }
    }
  });
  const {
    data: { session }
  } = await supabase.auth.getSession();
  return { supabase, session };
};
export {
  load
};
