import { browser, dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const csr = dev;

// Client-side routing is handled automatically in SvelteKit v2

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;
