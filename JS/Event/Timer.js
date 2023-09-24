document.addEventListener("DOMContentLoaded", function () {
  let months = document.getElementById("months");
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let endDate = "10/03/2023 00:00:00"; // date format mm/dd/yyyy

  function updateStroke(circle, value) {
    circle.style.strokeDashoffset = value;
  }

  let x = setInterval(function () {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // time calculations
    let monthsRemaining = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    let daysRemaining = Math.floor(
      (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    let hoursRemaining = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesRemaining = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    let secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

    // output result in HTML
    months.innerHTML = monthsRemaining;
    days.innerHTML = daysRemaining;
    hours.innerHTML = hoursRemaining;
    minutes.innerHTML = minutesRemaining;
    seconds.innerHTML = secondsRemaining;

    // at the end of the countdown
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById("time-container").style.display = "none";
      document.querySelector("").style.display = "block";
    }
  });
});
