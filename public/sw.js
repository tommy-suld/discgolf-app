// Service Worker för Discgolf Challenge PWA
const CACHE_NAME = 'discgolf-v1';
const STATIC_CACHE = 'discgolf-static-v1';
const IMAGE_CACHE = 'discgolf-images-v1';

// Filer som alltid ska cachas (offline-first)
const STATIC_FILES = [
  '/',
  '/index.html',
  '/output.css',
  '/manifest.json',
  '/images/forest-background.jpg'
];

// Installation - cacha statiska filer
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => self.skipWaiting())
  );
});

// Aktivering - rensa gamla cachar
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== STATIC_CACHE && cache !== IMAGE_CACHE) {
            console.log('Service Worker: Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - strategi: Network First för API, Cache First för bilder
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // API-anrop (/draw) - Network First med Cache Fallback
  if (url.pathname === '/draw') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cacha inte API-svar (för att få nya utmaningar varje gång)
          return response;
        })
        .catch(() => {
          // Om offline, returnera ett default-meddelande
          return new Response(
            JSON.stringify({
              text: 'Offline - ingen internetanslutning',
              file: 'putt_standing.jpg'
            }),
            { headers: { 'Content-Type': 'application/json' } }
          );
        })
    );
    return;
  }

  // Bilder - Cache First med Network Fallback
  if (request.destination === 'image' || url.pathname.includes('/images/')) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request).then((networkResponse) => {
            // Cacha bilden för framtida användning
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Alla andra filer - Cache First med Network Fallback
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request).then((networkResponse) => {
        // Cacha inte dynamiska requests
        if (request.method === 'GET' && networkResponse.status === 200) {
          return caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      });
    })
  );
});
