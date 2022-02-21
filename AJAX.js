console.log('Ajax tutorial in one video');
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickhandler)

function buttonClickhandler(){
    console.log('you have clicked on fetchBtn');
    // Build an xhr object
    const xhr = new XMLHttpRequest();
    // Open the object
    xhr.open('GET', 'harry.txt', true);
    // GET means we will only get the data from the url, POST means we will also send some dtata back.
    // what to do on progress:
    xhr.onprogress = function (){
        console.log('On progress');
    }
    // what to do when response is ready:
    xhr.onload = function (){
        console.log(this.responseText);
        // above responsetext will get the data as a string.
    }
    xhr.send();

}