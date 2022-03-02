window.addEventListener('load', ()=>{
    const sounds = document.querySelectorall(".sound");
    const pads = document.querySelectorAll(".pads div");
    pads.forEach((pad, index)=>{
        pad.addEventListener('click', function(){
            sounds[index].play();
        })
    })
})