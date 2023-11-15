

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5f902595.js","_app/immutable/chunks/scheduler.f304e1c4.js","_app/immutable/chunks/index.9fbc571a.js"];
export const stylesheets = [];
export const fonts = [];
