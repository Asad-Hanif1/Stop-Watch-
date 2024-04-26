let startTime;
let time;

function start() {
    startTime = Date.now();
    time = setInterval(updatedTime, 10);
    document.querySelector("result").innerHTML = time;
   
    document.querySelector("start").disabled = true;
}

function stop() {
    clearInterval(time);
    let stopTime = (Date.now() - startTime) / 1000;
    document.querySelector("result").innerHTML = stopTime.toFixed(2);
   
    document.querySelector("start").disabled = false;
}

function updatedTime() {
    let stopTime = (Date.now() - startTime) / 1000;
    document.querySelector("result").innerHTML = stopTime.toFixed(2);
    
}