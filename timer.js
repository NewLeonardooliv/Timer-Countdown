const minutes = 1;
let seconds = minutes * 60;

function timer(minutes, seconds) {
    const showMinutes = minutes < 10 ? minutes = '0' + String(minutes) : minutes = String(minutes);
    const showSeconds = seconds < 10 ? seconds = '0' + String(seconds) : seconds = String(seconds);
    console.log(`${showMinutes}:${showSeconds}`);

    const minutesTime = document.getElementById("minutes");
    const secondsTime = document.getElementById("seconds");

    minutesTime.innerHTML = showMinutes;
    secondsTime.innerHTML = showSeconds;
}

const showTime = setInterval(function () {
    if (seconds <= 0) {
        timer(0, 0);
        return;
    }

    const nMinutes = parseInt(seconds / 60);
    const nSeconds = seconds % 60;
    timer(nMinutes, nSeconds);

    seconds--;

}, 1000);

function pause() {
    clearInterval(showTime);
}
function cancel() {
    clearInterval(showTime);
    clearInterval(timer(0,0));
}