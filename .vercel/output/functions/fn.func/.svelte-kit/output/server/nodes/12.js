import * as server from '../entries/pages/register/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/12.3d2b0edd.js","_app/immutable/chunks/scheduler.e04b059d.js","_app/immutable/chunks/index.7833e292.js","_app/immutable/chunks/index.dfa8a9aa.js","_app/immutable/chunks/navigation.fbf40b4d.js","_app/immutable/chunks/singletons.5f32a592.js","_app/immutable/chunks/stores.a095dd00.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.18abee90.js","_app/immutable/chunks/Toaster.dcd61226.js"];
export const stylesheets = ["_app/immutable/assets/SuperDebug.ecbcbe74.css","_app/immutable/assets/Toaster.3a6d0da3.css"];
export const fonts = [];
