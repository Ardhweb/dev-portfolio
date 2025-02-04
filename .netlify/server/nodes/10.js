import * as server from '../entries/pages/dashboard/media/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/media/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/media/+page.server.js";
export const imports = ["_app/immutable/nodes/10.CwOESrax.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/7Ge1fuNx.js","_app/immutable/chunks/DDTEk0aU.js","_app/immutable/chunks/iVM7Zh8c.js","_app/immutable/chunks/w3FIQa5R.js","_app/immutable/chunks/DK9OIDTp.js","_app/immutable/chunks/CrZAKhfE.js","_app/immutable/chunks/CIIhCcD8.js","_app/immutable/chunks/BLsYf37g.js","_app/immutable/chunks/BaZHT0z1.js","_app/immutable/chunks/D4SyWKqT.js","_app/immutable/chunks/BTljxyIt.js"];
export const stylesheets = ["_app/immutable/assets/10.DIR9YSBN.css"];
export const fonts = [];
