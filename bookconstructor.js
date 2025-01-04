const myLibrary = [];
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
addBookToLibrary(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, true));

function Book(title, author, pages, isRead){
    this.title = title,
    this.id = this.title.replace(/\s+/g, "");
    this.author = author,
    this.pages = pages,
    this.isRead = isRead,
    this.bookInfo = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.isRead ? "read" : "not read yet");
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    // place data inside the book table
    let tBody = document.querySelector("table#bookTable tbody");
    tBody.innerHTML = "";
    myLibrary.forEach(book => {
        tBody.innerHTML += 
        `
        <tr id="${book.id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.isRead ? "Yes" : "No"}</td>
            <button class="remove-book" data-id="${book.id}">Remove</button>
        </tr>
        `
    });

    tBody.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-book")){
            // TODO: Fix
            const removeButton = tBody.querySelector(`tr#${book.id} button#remove`);
            removeButton.addEventListener("click", (event) => {
                myLibrary.splice(myLibrary.indexOf(book), 1);
                displayBooks();
    });
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
    let addBookButton = document.querySelector("button#addNewBook");
    let addBookModal = document.querySelector("dialog#addBookModal");
    let addBookForm = document.querySelector("form#addBookForm");
    addBookButton.addEventListener("click", (event) => {
        // display modal
            // after submit clear inputs
        addBookModal.showModal();
    })
    
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
    })
})