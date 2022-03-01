// Book class: represents a book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class: Handle UI tasks
class UI {
    static displaybooks() {
        const storedbooks = [
            {
                title: 'book one',
                author: 'davido macchi',
                isbn: '101010'
            },
            {
                title: 'book one',
                author: 'jurgen klinsmann',
                isbn: '10101678'
            }
        ]
        const books = storedbooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm-delete">X</a></td>`;
        list.appendChild(row);
    }
}
// Store class: Handles storage
// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    // get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const title = document.querySelector('#isbn').value
})
// Event: display books
document.addEventListener('DOMContentloaded', UI.displaybooks);
// Event: Remove a book

