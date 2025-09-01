// script.js

console.log("PWA Website loaded!");

// Service Worker Register
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("✅ Service Worker registered"))
      .catch((err) => console.log("❌ Service Worker error:", err));
  });
}
