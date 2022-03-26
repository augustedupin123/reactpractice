const wmf = document.querySelector('#wrapper');
console.log(wmf);
var books = document.querySelectorAll('#book-list');
console.log(books);
Array.from(books).forEach(function(book){
    console.log(book);
})
var books1 = document.querySelectorAll('#book-list li .name');
console.log(books1);
// Array.from(books).forEach(function(book){
//     book.textContent += 'test';
// })

 const bookList = document.querySelector('#book-list');
//  bookList.innerHTML = '<h2>Books and more books...</h2>';
 bookList.innerHTML += '<p>This is how you add HTML';
 const banner = document.querySelector('#page-banner');
 console.log('#page-banner node type is:', banner.nodeType);
 console.log('#page-banner node type is:', banner.nodeName);
 console.log('#page-banner node type is:', banner.hasChildNodes());
 const clonedBanner = banner.cloneNode(true);
 const bookList1 = document.querySelector('#book-list');
 console.log('the parent node is', bookList1.parentNode);
 console.log('the parent node is', bookList1.parentElement);
 console.log('the parent node is', bookList1.parentElement.parentElement);
 console.log(bookList.childNodes);
 console.log(bookList.children);
console.log('bookList.nextSibling');
console.log(bookList.nextElementSibling);
console.log(bookList.previousSibling);
console.log(bookList.previousElementSibling);
bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';

var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
})
var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    });
});

const link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevented');
})
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})
// add book list

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){

    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deletebtn = document.createElement('span');
    li.appendChild(bookName);
    li.appendChild(deletebtn);
    list.appendChild(li);
})

var li = document.querySelector('li:last-child');
li.style.color = "red";
li.style.marginTop = "60px";