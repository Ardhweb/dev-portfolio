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
		client: {start:"_app/immutable/entry/start.CzHSPlZD.js",app:"_app/immutable/entry/app.7l-oXEB2.js",imports:["_app/immutable/entry/start.CzHSPlZD.js","_app/immutable/chunks/sNgMXNaO.js","_app/immutable/chunks/7Ge1fuNx.js","_app/immutable/chunks/CXzkQA5i.js","_app/immutable/entry/app.7l-oXEB2.js","_app/immutable/chunks/7Ge1fuNx.js","_app/immutable/chunks/DDTEk0aU.js","_app/immutable/chunks/iVM7Zh8c.js","_app/immutable/chunks/w3FIQa5R.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DK9OIDTp.js","_app/immutable/chunks/BaZHT0z1.js","_app/immutable/chunks/D4SyWKqT.js","_app/immutable/chunks/CXzkQA5i.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
