import * as server from '../entries/pages/profile/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profile/+page.server.js";
export const imports = ["_app/immutable/nodes/11.6c58b13e.js","_app/immutable/chunks/scheduler.e04b059d.js","_app/immutable/chunks/index.7833e292.js","_app/immutable/chunks/index.dfa8a9aa.js","_app/immutable/chunks/navigation.fbf40b4d.js","_app/immutable/chunks/singletons.5f32a592.js","_app/immutable/chunks/stores.a095dd00.js","_app/immutable/chunks/parse.7d180a0f.js"];
export const stylesheets = ["_app/immutable/assets/SuperDebug.ecbcbe74.css"];
export const fonts = [];
