// Countdown Timer (Next Match Example)
function startCountdown() {
  // Next Match time (today + 1 hour)
  let matchTime = new Date();
  matchTime.setHours(matchTime.getHours() + 1);

  let countdown = setInterval(function () {
    let now = new Date().getTime();
    let distance = matchTime - now;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Match Started!";
      return;
    }

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      ("0" + hours).slice(-2) + ":" +
      ("0" + minutes).slice(-2) + ":" +
      ("0" + seconds).slice(-2);
  }, 1000);
}

startCountdown();
