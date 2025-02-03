export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["5474268-sd_426_226_25fps.mp4","favicon.png","hero-1.png"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B0XUcecD.js","app":"_app/immutable/entry/app.Ba7VQdeJ.js","imports":["_app/immutable/entry/start.B0XUcecD.js","_app/immutable/chunks/entry.BS3OV7r0.js","_app/immutable/chunks/runtime.7Ge1fuNx.js","_app/immutable/chunks/index-client.BBpBTt3M.js","_app/immutable/entry/app.Ba7VQdeJ.js","_app/immutable/chunks/runtime.7Ge1fuNx.js","_app/immutable/chunks/render.ClJ_s-Yp.js","_app/immutable/chunks/utils.Cy-Li8da.js","_app/immutable/chunks/template.h0Z7goGF.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.DyIswDnK.js","_app/immutable/chunks/props.Cr9UgNTf.js","_app/immutable/chunks/store.Dkw9x94F.js","_app/immutable/chunks/index-client.BBpBTt3M.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/accounts/auth/login",
				pattern: /^\/accounts\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/accounts/auth/register",
				pattern: /^\/accounts\/auth\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: __memo(() => import('./entries/endpoints/accounts/auth/register/_server.js'))
			},
			{
				id: "/accounts/dashboard/profile",
				pattern: /^\/accounts\/dashboard\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: __memo(() => import('./entries/endpoints/accounts/dashboard/profile/_server.js'))
			},
			{
				id: "/api/contact",
				pattern: /^\/api\/contact\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/contact/_server.js'))
			},
			{
				id: "/api/data",
				pattern: /^\/api\/data\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/data/_server.js'))
			},
			{
				id: "/api/file_uploading",
				pattern: /^\/api\/file_uploading\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/file_uploading/_server.js'))
			},
			{
				id: "/api/media",
				pattern: /^\/api\/media\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/media/_server.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard/manage",
				pattern: /^\/dashboard\/manage\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dashboard/media",
				pattern: /^\/dashboard\/media\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/dashboard/projects",
				pattern: /^\/dashboard\/projects\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/protected",
				pattern: /^\/protected\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
