navigator.serviceWorker
  .register("/Tournix/sw.js")
  .then(() => console.log("✅ Service Worker registered"))
  .catch((err) => console.log("❌ Service Worker error:", err));
