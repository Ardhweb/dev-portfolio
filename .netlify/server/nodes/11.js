import * as server from '../entries/pages/dashboard/projects/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/projects/+page.server.js";
export const imports = ["_app/immutable/nodes/11.BWrcHvMj.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/7Ge1fuNx.js","_app/immutable/chunks/DDTEk0aU.js","_app/immutable/chunks/iVM7Zh8c.js","_app/immutable/chunks/w3FIQa5R.js","_app/immutable/chunks/DK9OIDTp.js","_app/immutable/chunks/BTljxyIt.js","_app/immutable/chunks/BaZHT0z1.js","_app/immutable/chunks/D4SyWKqT.js"];
export const stylesheets = [];
export const fonts = [];
