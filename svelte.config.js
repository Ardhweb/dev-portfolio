// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;
// import adapter from '@sveltejs/adapter-node';

// export default {
// 	kit: {
// 		adapter: adapter()
// 	}
// };

import adapter from '@sveltejs/adapter-netlify';
import { sveltekit } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter(),
   //target: "#svelte", // Not needed in newer SvelteKit versions, but fine
   
  },
  edge: false,
  preprocess: sveltekit(), // Corrected: Use `sveltekit()` instead of `vitePreprocess()`
};
