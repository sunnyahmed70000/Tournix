const CACHE_NAME = "tournix-cache-v1";
const urlsToCache = [
  "/Tournix/",           // তোমার repo এর নাম দিয়ে path শুরু হবে
  "/Tournix/index.html",
  "/Tournix/script.js",
  "/Tournix/style.css",
  "/Tournix/manifest.json"
];

// Install event (cache files)
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Files cached");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event (old cache clear)
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event (serve cache first, then network)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
