const myLibrary = [];
function addBookToLibrary(book){
    myLibrary.push(book);
}

class Book{
    constructor(title, author, pages, isRead){
        this.title = title;
        this.id = this.title.replace(/\s+/g, "");
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    static bookInfo = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.isRead ? "read" : "not read yet");
    }
}
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
addBookToLibrary(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, true));

let tBody = null;
function displayBooks(){
    tBody.innerHTML = "";
    myLibrary.forEach(book => {
        tBody.innerHTML += 
        `
        <tr data-id="${myLibrary.indexOf(book)}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.isRead ? "Yes" : "No"}</td>
            <td><input type="checkbox" class="toggle-read" ${book.isRead ? "checked" : ""}></td>
            <td><button class="remove-book">Remove</button></td>
        </tr>
        `
    });
}

document.addEventListener("DOMContentLoaded", () => {
    tBody = document.querySelector("table#bookTable tbody");
    displayBooks();
    let addBookButton = document.querySelector("button#addNewBook");
    let addBookModal = document.querySelector("dialog#addBookModal");
    let addBookForm = document.querySelector("form#addBookForm");
    addBookButton.addEventListener("click", (event) => {
        // display modal
            // after submit clear inputs
        addBookModal.showModal();
    });
    
    addBookForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(addBookForm);

        let title = formData.get("title");
        let author = formData.get("author");
        let pages = formData.get("pages");
        let isRead = formData.get("isRead") === "on";

        addBookToLibrary(new Book(title, author, pages, isRead));
        addBookModal.close();
        addBookForm.reset();
        displayBooks();
    });

    tBody.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-book")){
            const index = event.target.closest("tr").getAttribute('data-id');
            console.log(String(index))
            if (index){
                myLibrary.splice(index, 1);
                displayBooks();
            }
        }
        if (event.target.classList.contains("toggle-read")){
            const index = event.target.closest("tr").getAttribute('data-id');
            if (index){
                myLibrary[index].isRead = !myLibrary[index].isRead;
                displayBooks();
            }
        }
    });
})