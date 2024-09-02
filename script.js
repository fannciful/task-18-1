'use strict'

function startTimer(duration) {
    let timer = duration;
    const intervalId = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('timer').textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            console.log('Timer ended!');
        }
    }, 1000);
}

startTimer(90);