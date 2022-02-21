console.log('Ajax tutorial in one video');
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickhandler)

function buttonClickhandler(){
    console.log('you have clicked on fetchBtn');
    // Build an xhr object
    const xhr = new XMLHttpRequest();
    // Open the object
    // xhr.open('GET', 'harry.txt', true);
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // above async part is declared true; no blocking.
    // GET means we will only get the data from the url, POST means we will also send some dtata back.
    // what to do on progress:
    xhr.onprogress = function (){
        console.log('On progress');
    }
    xhr.onreadystatechange = function(){
        console.log('ready state is', xhr.readyState);
    }
    // what to do when response is ready:
    xhr.onload = function (){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log('some error occured');
        }
        // above responsetext will get the data as a string.
    }
    xhr.send();
    console.log('we are done');

}