import { error } from '@sveltejs/kit';

export const load = async (event) => {
  // // Define the public routes that can be accessed without authentication
  // const publicRoutes = ['/accounts/auth/login', '/accounts/auth/register', '/'];
  // const { url } = event;
  
  // // Await the session data
  // const session = await event.locals.auth();

  // // Debugging: Log session status for each request
  // console.log('Session:', session);

  // const isAuthenticated = session && session.user && session.user.isAuthenticated;

  // // Debugging: Check if the user is authenticated
  // console.log('Is Authenticated:', isAuthenticated);

  // // If the user is not authenticated and the route is not public, throw an error
  // // if (!isAuthenticated) {
  // //   if (publicRoutes.includes(url.pathname)) {
  // //     // Allow access to public routes
  // //     return { layout: 'default' };
  // //   }
  // if (!session) {
  //   if (publicRoutes.includes(url.pathname)) {
  //     // Allow access to public routes
  //     return { layout: 'default' };
  //   }

  //   // Block access for non-public routes if the user is not authenticated
  //   throw error(401, 'You must be logged in to access this page');
  // }

  // If the user is authenticated, allow access to all routes
  return {
    // session: session, // Pass the session information to the page
    // layout: 'authenticated', // You can modify the layout for authenticated users
  };
};
