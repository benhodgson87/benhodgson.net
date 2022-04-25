import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    browser: {
      hydrate: false,
    },
    prerender: {
      enabled: true,
      default: true,
      crawl: true
    }
  }
};

export default config;
