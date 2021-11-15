let timerInput = document.getElementById("timeSec");
let timerInputM = document.getElementById("timeMin");
let buttonRun = document.getElementById("buton")
let timerShow = document.getElementById("timer");

buttonRun.addEventListener('click', function () {
    timeSec = parseInt(timerInput.value)
    timeMin = parseInt(timerInputM.value) * 60
})

timer = setInterval(function () {
    seconds = timeSec
    minutes = timeMin / 60 % 60
    hour = timeSec / 60 / 60 % 60
    if (timeMin <= 0 && timeSec <= 0) {
        clearInterval(timer);
        alert("Time out");
    }
    else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }

    if (timeSec <= 0) {
        --timeMin;
        timeSec = 60;
    }

    
    --timeSec;
}, 1000)

