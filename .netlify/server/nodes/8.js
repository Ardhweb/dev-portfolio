

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.CsjUWjCm.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.7Ge1fuNx.js","_app/immutable/chunks/template.h0Z7goGF.js"];
export const stylesheets = [];
export const fonts = [];
