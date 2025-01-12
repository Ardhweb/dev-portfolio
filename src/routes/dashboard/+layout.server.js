// src/routes/dashboard/+page.server.js
// export const load = async ({event }) => {
//     const session   = await event.locals.auth()
//     if (!session) {
//       throw redirect(302, "/accounts/auth/login");
//     }
  
//     return {
//       session: await event.locals.auth(),
//     };
//   };
  
// src/routes/dashboard/+layout.server.js
export async function load({ locals }) {
  if (!locals || !locals.user) {
      console.log("User is not authenticated");
      return { isAuthenticated: false };
  }

  return {
      isAuthenticated: true,
      user: locals.user
  };
}
