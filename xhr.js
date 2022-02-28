const url = "https://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'JSON';
xhr.onerror = () =>{
    console.log('error!!!');
    console.log(xhr.status);
}
xhr.onload = () =>{
    console.log(xhr.response);
}
xhr.send();
