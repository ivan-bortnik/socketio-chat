

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7321f4ac.js","_app/immutable/chunks/scheduler.f304e1c4.js","_app/immutable/chunks/index.9fbc571a.js"];
export const stylesheets = ["_app/immutable/assets/2.785b6f66.css"];
export const fonts = [];
