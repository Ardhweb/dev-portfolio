import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.BfxYkRpg.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/7Ge1fuNx.js","_app/immutable/chunks/iVM7Zh8c.js","_app/immutable/chunks/w3FIQa5R.js","_app/immutable/chunks/DK9OIDTp.js","_app/immutable/chunks/D4SyWKqT.js","_app/immutable/chunks/DDTEk0aU.js","_app/immutable/chunks/CrZAKhfE.js","_app/immutable/chunks/gqiyZ2pp.js","_app/immutable/chunks/BLsYf37g.js","_app/immutable/chunks/BTljxyIt.js","_app/immutable/chunks/BaZHT0z1.js","_app/immutable/chunks/DFxPizyY.js","_app/immutable/chunks/CXzkQA5i.js","_app/immutable/chunks/CsXR4tpi.js"];
export const stylesheets = [];
export const fonts = [];
