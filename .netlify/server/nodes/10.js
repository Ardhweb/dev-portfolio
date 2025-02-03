import * as server from '../entries/pages/dashboard/media/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/media/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/media/+page.server.js";
export const imports = ["_app/immutable/nodes/10.BgeFZZZd.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.7Ge1fuNx.js","_app/immutable/chunks/render.ClJ_s-Yp.js","_app/immutable/chunks/utils.Cy-Li8da.js","_app/immutable/chunks/template.h0Z7goGF.js","_app/immutable/chunks/if.DyIswDnK.js","_app/immutable/chunks/each.JpvwqxQz.js","_app/immutable/chunks/shared.izF6m_Ct.js","_app/immutable/chunks/misc.DUPPJdHC.js","_app/immutable/chunks/props.Cr9UgNTf.js","_app/immutable/chunks/store.Dkw9x94F.js","_app/immutable/chunks/lifecycle.thbPmc8M.js"];
export const stylesheets = ["_app/immutable/assets/10.DIR9YSBN.css"];
export const fonts = [];
