if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/Tournix/sw.js")   // এখানে repo নাম দিয়ে path দিচ্ছি
      .then(() => console.log("✅ Service Worker registered!"))
      .catch((err) => console.log("❌ SW registration failed:", err));
  });
}
