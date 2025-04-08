import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const ids = await []; // Assuming this returns ['1', '2', '3']
      return ids.map((x) => x); // Transforms IDs into an array of objects for prerendering
    },
  },
];
