function Book(title, author, pages, isRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
    this.bookInfo = function(){
        return $this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.isRead ? "read" : "not read yet");
    }
}

let book = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book.bookInfo());