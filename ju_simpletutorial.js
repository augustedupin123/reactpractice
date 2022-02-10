console.log('welcome to simple tutorials');
let a = document.all;
a = document.body;
var b = document.forms;
console.log(b);
var k = document.links[0];
console.log(k);

let element = document.getElementById('myFirst');
console.log(element);
let element1 = element.className;
console.log(element1);

// this is used to give css property to the element dynamically
element.style.color = 'blue';
// this is used to change the text content of the element
element.innerText = "harry is a good boy";
// this is used to change the total HTML content of the div:
element.innerHTML = "<h1><b>Harry is a good boy</b></h1>"

console.log(element.innerHTML);
console.log(element.innerText);
let sel = document.querySelector('#myFirst');
console.log(sel);
let sel1 = document.querySelector('.child');
let sel2 = document.querySelector('div');
console.log(sel1);
console.log(sel2);
sel2.style.color = 'green';

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
console.log(elems);
var elem1 = document.getElementsByTagName('div');
console.log(elem1);
// Array.from(elem1).forEach(element => {
//     console.log(element);
//     // element.style.color = 'blue';
// })

for (let index=0; index<elem1.length; index++){
    const element2 = elem1[index];
    console.log(element2);
    element2.style.color = 'blue'
}
let var1 = document.querySelector('.no');
var1 = document.querySelector('.container');
console.log(var1);
console.log(var1.childNodes);
console.log(var1.children);
let nodename = var1.childNodes[1].nodeName;
console.log(nodename);
localStorage.setItem('Name','Harry');
localStorage.setItem('name2', 'Debojyoti');
// to read the above locally stored data in the browser, the commands are 
// window.localstorage, in 'application', typeof window.localstorage.name 
// which is giving 'string', localstorage.clear() will clear entire localstorage

let name = localStorage.getItem('Name');
console.log(name);
let name1 = localStorage.getItem('name2');
console.log(name1);
let impArray = ['adrak','pyaz','bhindi'];

localStorage.removeItem('name2');
let name3 = localStorage.getItem(name);
console.log(name3);

let practicearray = ['a1', 'a2', 'a3', 'a4'];
localStorage.setItem('a5', JSON.stringify(practicearray));

// JSON.parse takes a string as an argument and rreturns an object, JSON.stringify takes an object as an argument
// and returns a string.