// netlify/functions/sveltekit-wrappe
import handler from '@sveltejs/adapter-netlify';
// Export a handler function that will wrap all requests
exports.handler = async (event, context) => {
  // Call the default handler (SvelteKit SSR handler)
  const response = await handler(event, context);

  // Return the response from SvelteKit's SSR handling
  return response;
};
