

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f56c4914.js","_app/immutable/chunks/scheduler.e04b059d.js","_app/immutable/chunks/index.7833e292.js","_app/immutable/chunks/stores.a095dd00.js","_app/immutable/chunks/singletons.5f32a592.js"];
export const stylesheets = [];
export const fonts = [];
