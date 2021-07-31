

var timer;
function startTimer(duration, display) {
    timer = duration;
    var seconds;
    setInterval(function () {
        seconds = parseInt(timer);


        display.textContent = seconds;

        if (--timer < 0) {
            stopTimer()
            alert("You waited too long! Bye-bye writing!")
             // trigger end
        }
    }, 1000);
}

function resetTimer() {
    document.getElementById('countdown').innerText = 10
    var interval_id = window.setInterval(()=>{}, 99999);
    for (var i = 0; i < interval_id; i++)
	window.clearInterval(i);
  

  display = document.querySelector('#countdown');
    startTimer(timer, display);
    clearInterval(current_interval)
}

function stopTimer() {
    var interval_id = window.setInterval(()=>{}, 99999);
    for (var i = 0; i < interval_id; i++)
	window.clearInterval(i);
    document.getElementById('the-box').value = ''
    document.getElementById('countdown').innerText = "Waiting..."
}

const text_box = document.getElementById('the-box');

text_box.addEventListener("keypress",resetTimer, false)

