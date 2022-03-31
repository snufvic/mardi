
/* **************** Countdown *********************  */
  let countDownDate = new Date("Mar 01, 2022 08:00:00").getTime();

            let x = setInterval(function () {
                let now = new Date().getTime(),
                    distance = countDownDate - now,
                    days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("countdown-829800-days").innerHTML = days;
                document.getElementById("countdown-829800-hours").innerHTML = hours;
                document.getElementById("countdown-829800-mins").innerHTML = minutes;
                document.getElementById("countdown-829800-secs").innerHTML = seconds;
            }, 1000);

            /* *************************************  */