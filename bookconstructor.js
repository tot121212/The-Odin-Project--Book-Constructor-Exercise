const myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
    this.bookInfo = function(){
        return $this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.isRead ? "read" : "not read yet");
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    myLibrary.forEach(book => {
        console.log(book.bookInfo());
    });
}

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
addBookToLibrary(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, true));
displayBooks()