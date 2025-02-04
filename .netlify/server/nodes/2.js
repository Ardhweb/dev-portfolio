import * as server from '../entries/pages/dashboard/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.odWL_bez.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/7Ge1fuNx.js","_app/immutable/chunks/DDTEk0aU.js","_app/immutable/chunks/iVM7Zh8c.js","_app/immutable/chunks/w3FIQa5R.js","_app/immutable/chunks/DK9OIDTp.js","_app/immutable/chunks/O9ofQIaT.js","_app/immutable/chunks/BTljxyIt.js","_app/immutable/chunks/D4SyWKqT.js","_app/immutable/chunks/sNgMXNaO.js","_app/immutable/chunks/CXzkQA5i.js","_app/immutable/chunks/tLWHPfqG.js","_app/immutable/chunks/jcfn18pN.js"];
export const stylesheets = ["_app/immutable/assets/2.B7PVi90q.css"];
export const fonts = [];
