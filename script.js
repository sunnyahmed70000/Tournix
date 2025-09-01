// Simple Admin Credentials
const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

// Admin Login System
const loginForm = document.getElementById("adminLoginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;
    const errorMsg = document.getElementById("errorMsg");

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("adminLoggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      errorMsg.textContent = "❌ Invalid Username or Password!";
    }
  });
}

// Check if logged in (Dashboard Page)
if (window.location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "admin.html";
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "admin.html";
  });

  // Dummy Requests Example
  const depositList = document.getElementById("depositList");
  const withdrawList = document.getElementById("withdrawList");

  let deposits = [
    { user: "User1", amount: "200", method: "bKash", trxid: "TX12345" },
    { user: "User2", amount: "500", method: "Nagad", trxid: "NG56789" }
  ];

  let withdraws = [
    { user: "User3", amount: "300", method: "Rocket", trxid: "RK98765" }
  ];

  deposits.forEach(d => {
    let li = document.createElement("li");
    li.textContent = `${d.user} deposited ${d.amount} via ${d.method} (TrxID: ${d.trxid})`;
    depositList.appendChild(li);
  });

  withdraws.forEach(w => {
    let li = document.createElement("li");
    li.textContent = `${w.user} requested withdraw ${w.amount} via ${w.method} (TrxID: ${w.trxid})`;
    withdrawList.appendChild(li);
  });
}
