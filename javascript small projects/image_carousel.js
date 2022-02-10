const moves=document.getElementById("move");
const images=document.querySelectorAll('img');
let start=0;

function move(){
    start++;
    if(start>images.length - 1){
        
    }
    moves.style.transform = `translateX(${-start*80}%)`;

}
setinterval(move,2000);