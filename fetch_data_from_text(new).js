document.getElementById("btnajax").addEventListener("click", makerequest);
function makerequest(){
    console.log('button clicked');
    const xhr = new XMLHttpRequest();
    console.log("before open", xhr.readyState)
    xhr.open("GET", "data.txt", true);
    console.log("after open", xhr.readyState)
    xhr.onreadystatechange = () => {
        console.log("readystate", xhr.readyState)
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr)
                console.log(xhr.responseText);

            } else {
                console.log('problem solved');
            }
        }
        
    };
    xhr.send();
}