document.getElementById("btnajax").addEventListener("click", makerequest);
function makerequest(){
    console.log('button clicked');
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.onreadystatechange = function(){
        if(xhr.readystate === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);

            } else {
                console.log('problem solved');
            }
        }
    };
    xhr.send();
}