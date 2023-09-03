document.addEventListener('DOMContentLoaded', function () {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let dd = document.getElementById('dd');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let day_dot = document.querySelector('.day_dot');
    let hour_dot = document.querySelector('.hour_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    let endDate = '09/06/2023 00:00:00'; //date format mm/dd/yyyy

    function updateStroke(circle, value) {
        circle.style.strokeDashoffset = value;
    }

    let x = setInterval(function () {
        let now = new Date(endDate).getTime();
        let countDown = new Date().getTime();
        let distance = now - countDown;

        //time calculations
        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let m = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let s = Math.floor(distance % (1000 * 60) / (1000));

        //output result in html
        days.innerHTML = d + "<br> <span>Jours<span>";
        hours.innerHTML = h + "<br> <span>Heures<span>";
        minutes.innerHTML = m + "<br> <span>Minutes<span>";
        seconds.innerHTML = s + "<br> <span>Secondes<span>";

        //stroke animation
        dd.style.strokeDashoffset = 440 - (440 * d) / 365;
        hh.style.strokeDashoffset = 440 - (440 * h) / 24;
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        ss.style.strokeDashoffset = 440 - 440 * s / 60;

        //tip animation
        day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
        hour_dot.style.transform = `rotateZ(${h * 15}deg)`;
        min_dot.style.transform = `rotateZ(${m * 6}deg)`;
        sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

        //at the end of the countdown
        if (distance <= 0) {
            clearInterval(x);
            document.getElementById("time-container").style.display = 'none';
            document.querySelector("").style.display = 'block';
        }

    })

});