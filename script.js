const minutes = 5;
let countdownSeconds = minutes * 60;

function renderCoundown(minutes, seconds) {
    const minutesToPad = String(minutes).padStart(2, "0");
    const secondsToPad = String(seconds).padStart(2, "0");
    console.log(`${minutesToPad}:${secondsToPad}`);

    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");

    minutesSpan.innerHTML = minutesToPad;
    secondsSpan.innerHTML = secondsToPad;
}

setInterval(function() {
    if (countdownSeconds <= 0) {
        renderCoundown(0, 0);
        return;
    }

    let minutes = Math.floor(countdownSeconds / 60);
    let seconds = countdownSeconds % 60;
    renderCoundown(minutes, seconds);

    countdownSeconds--;
}, 1000);