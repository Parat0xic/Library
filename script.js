const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`; 
}

function addBookToLibrary() {

}

const addButton = document.querySelector(".addbtn");

addButton.addEventListener("click", function(e) {
    
});



for (let i = 0; i < myLibrary.length; i++) {
    const currentBook = myLibrary[i];
    const newDiv = document.createElement("div");
    newDiv.classname = "bookcard";
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = `Title: ${currentBook.title}`;
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = `Author: ${currentBook.author}`;
    const paragraph3 = document.createElement("p");
    paragraph3.textContent = `Pages: ${currentBook.pages}`;
    const paragraph4 = document.createElement("p");
    if (currentBook.read === true) {
        paragraph4.textContent = "You have read this book!";
    }
    else {
        paragraph4.textContent = "You have not read this book yet!";
    }
    newDiv.appendChild(paragraph1);
    newDiv.appendChild(paragraph2);
    newDiv.appendChild(paragraph3);
    newDiv.appendChild(paragraph4);
    document.cardContainer.appendChild(newDiv);
}

