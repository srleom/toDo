

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/update-password/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.feba3843.js","_app/immutable/chunks/scheduler.e04b059d.js","_app/immutable/chunks/index.7833e292.js"];
export const stylesheets = [];
export const fonts = [];
