import * as server from '../entries/pages/dashboard/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.D1nRpHQB.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.7Ge1fuNx.js","_app/immutable/chunks/render.ClJ_s-Yp.js","_app/immutable/chunks/utils.Cy-Li8da.js","_app/immutable/chunks/template.h0Z7goGF.js","_app/immutable/chunks/if.DyIswDnK.js","_app/immutable/chunks/slot.Dv6kVS_7.js","_app/immutable/chunks/lifecycle.thbPmc8M.js","_app/immutable/chunks/store.Dkw9x94F.js","_app/immutable/chunks/entry.DaG7uxup.js","_app/immutable/chunks/index-client.BBpBTt3M.js","_app/immutable/chunks/stores.BSoocx8q.js","_app/immutable/chunks/client.C4fgNrM2.js"];
export const stylesheets = ["_app/immutable/assets/2.B7PVi90q.css"];
export const fonts = [];
