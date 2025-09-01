const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",             // root
  "/Tournix/",     // তোমার repo root
  "/Tournix/index.html",
  "/Tournix/styles.css",
  "/Tournix/script.js",
  "/Tournix/manifest.json",
  "/Tournix/icon-192.png",
  "/Tournix/icon-512.png",
  "/Tournix/favicon.ico"
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("✅ Files cached");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("🗑 Old cache removed:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() =>
          caches.match("/Tournix/index.html")
        )
      );
    })
  );
});
