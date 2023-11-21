

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.feba3843.js","_app/immutable/chunks/scheduler.e04b059d.js","_app/immutable/chunks/index.7833e292.js"];
export const stylesheets = [];
export const fonts = [];
