import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.CHbzw1ZG.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.7Ge1fuNx.js","_app/immutable/chunks/template.h0Z7goGF.js"];
export const stylesheets = ["_app/immutable/assets/0.0U10NRYm.css"];
export const fonts = [];
