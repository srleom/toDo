

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.0f08b24b.js","_app/immutable/chunks/scheduler.e04b059d.js","_app/immutable/chunks/index.7833e292.js"];
export const stylesheets = [];
export const fonts = [];
