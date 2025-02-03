import * as server from '../entries/pages/dashboard/projects/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/projects/+page.server.js";
export const imports = ["_app/immutable/nodes/11.Ck9NK8hU.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.7Ge1fuNx.js","_app/immutable/chunks/render.ClJ_s-Yp.js","_app/immutable/chunks/utils.Cy-Li8da.js","_app/immutable/chunks/template.h0Z7goGF.js","_app/immutable/chunks/if.DyIswDnK.js","_app/immutable/chunks/lifecycle.thbPmc8M.js","_app/immutable/chunks/props.Cr9UgNTf.js","_app/immutable/chunks/store.Dkw9x94F.js"];
export const stylesheets = [];
export const fonts = [];
