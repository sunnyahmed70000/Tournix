if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/Tournix/sw.js")
      .then(() => console.log("✅ Service Worker registered!"))
      .catch((err) => console.log("❌ SW registration failed:", err));
  });
}
