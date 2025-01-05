// import { dev } from '$app/environment';
// import * as auth from '$lib/server/auth.js';

// const handleAuth = async ({ event, resolve }) => {
// 	const sessionId = event.cookies.get(auth.sessionCookieName);
// 	if (!sessionId) {
// 		event.locals.user = null;
// 		event.locals.session = null;
// 		return resolve(event);
// 	}

// 	const { session, user } = await auth.validateSession(sessionId);
// 	if (session) {
// 		event.cookies.set(auth.sessionCookieName, session.id, {
// 			path: '/',
// 			sameSite: 'lax',
// 			httpOnly: true,
// 			expires: session.expiresAt,
// 			secure: !dev
// 		});
// 	} else {
// 		event.cookies.delete(auth.sessionCookieName, { path: '/' });
// 	}

// 	event.locals.user = user;
// 	event.locals.session = session;

// 	return resolve(event);
// };

// export const handle = handleAuth;


import { authenticate } from "./lib/auth/middleware";

const protectedRoutes = ["/contact"]; // Define routes that need protection

export async function handle({ event, resolve }) {
  if (protectedRoutes.includes(event.url.pathname)) {
    try {
      const user = await authenticate(event); // Authenticate user
      event.locals.user = user; // Attach user info to `locals` for access in the route
    } catch (err) {
      return new Response(JSON.stringify({ error: "Unauthorized: " + err.message }), {
        status: 401,
      });
    }
  }

  return resolve(event); // Proceed to the route
}
