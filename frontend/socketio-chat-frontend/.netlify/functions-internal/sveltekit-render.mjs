import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","style.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.65393d73.js","app":"_app/immutable/entry/app.509e321f.js","imports":["_app/immutable/entry/start.65393d73.js","_app/immutable/chunks/scheduler.f304e1c4.js","_app/immutable/chunks/singletons.9f228fac.js","_app/immutable/entry/app.509e321f.js","_app/immutable/chunks/scheduler.f304e1c4.js","_app/immutable/chunks/index.9fbc571a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
