

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ff6a09e3.js","_app/immutable/chunks/scheduler.f304e1c4.js","_app/immutable/chunks/index.9fbc571a.js","_app/immutable/chunks/singletons.9f228fac.js"];
export const stylesheets = [];
export const fonts = [];
