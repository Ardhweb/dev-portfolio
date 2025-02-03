import { e as error } from "../../chunks/index2.js";
const load = async (event) => {
  const publicRoutes = ["/accounts/auth/login", "/accounts/auth/register", "/"];
  const { url } = event;
  const session = await event.locals.auth();
  console.log("Session:", session);
  const isAuthenticated = session && session.user && session.user.isAuthenticated;
  console.log("Is Authenticated:", isAuthenticated);
  if (!session) {
    if (publicRoutes.includes(url.pathname)) {
      return { layout: "default" };
    }
    throw error(401, "You must be logged in to access this page");
  }
  return {
    session,
    // Pass the session information to the page
    layout: "authenticated"
    // You can modify the layout for authenticated users
  };
};
export {
  load
};
