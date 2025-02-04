

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.C7hnzdms.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/7Ge1fuNx.js","_app/immutable/chunks/w3FIQa5R.js"];
export const stylesheets = [];
export const fonts = [];
