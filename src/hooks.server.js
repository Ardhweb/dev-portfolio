import { authenticate, handle } from "./lib/auth/middleware";

// const protectedRoutes = ["/contact"]; // Define routes that need protection

// export async function handle({ event, resolve }) {
//   if (protectedRoutes.includes(event.url.pathname)) {
//     try {
//       const user = await authenticate(event); // Authenticate user
//       event.locals.user = user; // Attach user info to `locals` for access in the route
//     } catch (err) {
//       return new Response(JSON.stringify({ error: "Unauthorized: " + err.message }), {
//         status: 401,
//       });
//     }
//   }

//   return resolve(event); // Proceed to the route
// }


// import { authOptions } from './lib/auth/auth.js'; // Import auth configuration
// import { Auth } from '@auth/core';

// export const handle = async ({ event, resolve }) => {
//   // const auth = new Auth(authOptions);
//   const auth = new Auth(authenticate.handle);
//   const session = await auth.getSession(event); // Get the session for the current request

//   if (session?.user) {
//     // User is logged in, attach user information to locals
//     event.locals.user = session.user;
//   } else {
//     // If no session or user info, set locals.user to null or undefined
//     event.locals.user = null;
//   }

//   // Proceed with the request
//   return resolve(event);
// };


export { handle } from "../src/lib/auth/auth.js"