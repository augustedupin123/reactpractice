let element = document.createElement('li');
element.className = 'childul';
element.id = 'createdli';
element.setAttribute('title', 'mytitle');
element.innerText = 'Hello, this is created by harry';
element.innerHTML = '<b>Hello, this is created by harry<b>';
console.log(element);
let text1 = document.createTextNode('new node added');

let ul1 = document.querySelector('ul.this');
ul1.appendChild(element);
ul1.appendChild(text1);
console.log(ul1);
console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is a created node for element 2');
elem2.appendChild(tnode);
element.replaceWith(elem2);
let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));
// myul.setattribute, myul.removeattribute.
