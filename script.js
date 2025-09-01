// Menu Toggle
document.getElementById("menuBtn").addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Open Tab
function openTab(tabId) {
  document.getElementById(tabId).style.display = "block";
}

// Countdown Timer
function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(() => {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      display.textContent = "Match Started!";
    }
  }, 1000);
}

window.onload = () => {
  let countdownTime = 60 * 5; // 5 minutes
  let display = document.querySelector('#timer');
  startCountdown(countdownTime, display);
};
