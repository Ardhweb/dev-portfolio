

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/manage/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.CghkpW2t.js","_app/immutable/chunks/Bg9kRutz.js"];
export const stylesheets = [];
export const fonts = [];
