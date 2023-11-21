

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.feba3843.js","_app/immutable/chunks/scheduler.e04b059d.js","_app/immutable/chunks/index.7833e292.js"];
export const stylesheets = [];
export const fonts = [];
