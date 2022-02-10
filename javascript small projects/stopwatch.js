var seconds = document.getElementById('seconds');
var milliseconds = document.getElementById('milliseconds');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var sec = 0;
var millisec = 0;
var timerinterval;

const timer=()=>{
    millisec++;
    if(millisec<9){
        milliseconds.innerHTML="0" + millisec;
    }
    if(millisec>9){
        milliseconds.innerHTML = millisec;
    }
    if(millisec>99){
        sec++;
        seconds.innerHTML = "0" + sec;
        milliseconds.innerHTML = "0" + 0;
    }
    if(sec>9){
        seconds.innerHTML=sec;
    }
}   
start.addEventListener('click', ()=>{
    timerinterval=setInterval(timer,10);
})

stop.addEventListener('click', ()=>{
    clearInterval(timerinterval);
})
reset.addEventListener('click', ()=>{
    clearInterval(timeinterval);
    sec="00";
    millisec="00";
    seconds.innerHTML=sec;
    milliseconds.innerHTML=millisec;

})
