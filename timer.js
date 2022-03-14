const minutes = 1;
let secondsTotal = minutes * 60;
let seconds = secondsTotal;

function timer(minutes, seconds) {
    //adiciona o 0 se o valor for menor que 10 e transforma em string
    const showMinutes = minutes < 10 ? minutes = '0' + String(minutes) : minutes = String(minutes);
    const showSeconds = seconds < 10 ? seconds = '0' + String(seconds) : seconds = String(seconds);

    //envia os valores para os ID's do HTML
    const minutesTime = document.getElementById("minutes");
    const secondsTime = document.getElementById("seconds");

    minutesTime.innerHTML = showMinutes;
    secondsTime.innerHTML = showSeconds;


    const percentage = ((100 / secondsTotal) * seconds);
    console.log(percentage);
    document.getElementById('timerBackground').setAttribute("style", `width:${percentage}%; height:${percentage}%;`);

}

//transforma o setInterval em uma variavel para ser puxada na hora do clearInterval
const showTime = setInterval(function () {
    //se o valor for menor que 0 o tempo irá parar em "00:00"
    if (seconds <= 0) {
        timer(0, 0);
        return;
    }

    //transforma o tempo da contagem para minutos e segundos
    const nMinutes = parseInt(seconds / 60);
    const nSeconds = seconds % 60;
    timer(nMinutes, nSeconds);

    seconds--;

}, 1000);

//funcao para pausar o tempo
function pause() {
    clearInterval(showTime);
}
//funcao para parar o tempo e ficar 00:00
function cancel() {
    clearInterval(showTime);
    clearInterval(timer(0, 0));
}