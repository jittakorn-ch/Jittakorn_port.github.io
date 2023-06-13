// window.onload -> เมื่อโหลดหน้าเว็บจะเรียกใช้ทันที
window.onload = function() {
    let hours = 0000;
    let minutes = 00;
    let seconds = 00;
    let tens = 00;
    let displayHours  = document.getElementById("hours")
    let displayMinutes = document.getElementById("minutes")
    let displaySeconds = document.getElementById("seconds")
    let displayTens = document.getElementById("tens")
    let buttonStart = document.getElementById("button-start")
    let buttonStop = document.getElementById("button-stop")
    let buttonReset = document.getElementById("button-reset")
    let Interval

    function startTimer() {
        tens++;
        if (tens < 9) {
            displayTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            displayTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            displaySeconds.innerHTML = "0" + seconds;
            tens = 0
            displayTens.innerHTML = "0" + tens;
        }

        if (seconds > 9) {
            displaySeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++
            displayMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            displaySeconds.innerHTML = "0" + seconds;
        }

        if (minutes > 9) {
            displayMinutes.innerHTML = minutes;
        }

        if (minutes > 59) {
            hours++
            displayHours.innerHTML = "000" + hours;
            minutes = 0;
            displayMinutes.innerHTML = "0" + minutes;
        }

        if (hours > 9) {
            displayHours.innerHTML = "00" + hours;
        }

        if (hours > 99) {
            displayHours.innerHTML = "0" + hours;
        }

        if (hours > 999) {
            displayHours.innerHTML = hours;
        }
    }

    /* clearInterval เป็นฟังก์ชันที่ใช้เพื่อหยุดการดำเนินการที่เกิดซ้ำซึ่งเริ่มต้นโดยใช้ฟังก์ชัน setInterval */         
    buttonStart.onclick = function() {
        clearInterval(Interval);   
        Interval = setInterval(startTimer, 10)
    }

    buttonStop.onclick = function() {
        clearInterval(Interval)
    }

    buttonReset.onclick = function() {
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        minutes = "00"
        hours = "0000"
        displayTens.innerHTML = tens;
        displaySeconds.innerHTML = seconds;
        displayMinutes.innerHTML = seconds;
        displayHours.innerHTML = hours;
    }
}
