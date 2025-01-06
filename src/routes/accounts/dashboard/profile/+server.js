// src/routes/dashboard/+page.server.js
export const load = async ({ locals }) => {
    if (!locals.session) {
      throw redirect(302, "/accounts/auth/login");
    }
  
    return {
      session: locals.session,
    };
  };
  