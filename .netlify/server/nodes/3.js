import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.CJGW8iPV.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.7Ge1fuNx.js","_app/immutable/chunks/utils.Cy-Li8da.js","_app/immutable/chunks/template.h0Z7goGF.js","_app/immutable/chunks/if.DyIswDnK.js","_app/immutable/chunks/store.Dkw9x94F.js","_app/immutable/chunks/render.ClJ_s-Yp.js","_app/immutable/chunks/each.JpvwqxQz.js","_app/immutable/chunks/attributes.CIOjNohH.js","_app/immutable/chunks/misc.DUPPJdHC.js","_app/immutable/chunks/lifecycle.thbPmc8M.js","_app/immutable/chunks/props.Cr9UgNTf.js","_app/immutable/chunks/entry.DaG7uxup.js","_app/immutable/chunks/index-client.BBpBTt3M.js","_app/immutable/chunks/stores.BSoocx8q.js"];
export const stylesheets = [];
export const fonts = [];
