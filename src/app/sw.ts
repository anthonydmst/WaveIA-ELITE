import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import { Serwist, NetworkFirst, StaleWhileRevalidate } from 'serwist';

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST ?? [],
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
     {
        matcher: ({ request }: { request: Request }) => request.mode === "navigate",
        handler: new NetworkFirst({
           cacheName: "pages",
           plugins: [
             {
                cacheWillUpdate: async ({ response }: { response: Response }) => {
                   if (response && response.status === 200) {
                      return response;
                   }
                   return null;
                },
             }
           ]
        }),
     },
     {
        matcher: ({ request }: { request: Request }) => request.destination === "image",
        handler: new StaleWhileRevalidate({
           cacheName: "images",
           plugins: [
              {
                cacheKeyWillBeUsed: async ({ request }: { request: Request }) => request.url,
              } 
           ]
        }),
     },
     {
        matcher: ({ request }: { request: Request }) =>
           request.destination === "script" || request.destination === "style",
        handler: new StaleWhileRevalidate({
           cacheName: "static-resources",
        }),
     },
  ],
});

serwist.addEventListeners();
