function myAxios(method, url, body = null) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'JSON';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onerror = () =>{
        console.log('error!!!');
        
    }
    xhr.onload = () =>{
        if(xhr.status >=400){
            console.log('failed!');
        } else {
            console.log(xhr.response);
        }
    }
    xhr.onerror = () =>{
        console.log('Error!');
    }
    xhr.send(JSON.stringify(body));


}
const url = "https://jsonplaceholder.typicode.com/users";
// myAxios('GET', "https://jsonplaceholder.typicode.com/users")
myAxios('POST', url, {
    name: 'Rakesh',
    job: 'software engineer'
});

