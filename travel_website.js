console.log('this is new project');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('it matched');
        name.classList.remove('is-invalid');
    }
    else {
        console.log('no match');
        name.classList.add('is-invalid');
    }
})
email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('it matched');
        name.classList.remove('is-invalid');
    }
    else {
        console.log('no match');
        name.classList.add('is-invalid');
    }
})
phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    let regex = /^([0-9]){10}/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your phone is valid');
        name.classList.remove('is-invalid');
    }
    else {
        console.log('no match');
        name.classList.add('is-invalid');
    }
})