document.addEventListener("DOMContentLoaded", function() {
    const myLibrary = [];

    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
        toggleRead() {
            this.read = !this.read;
        }
        info() {
            return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`; 
        }
    }

    function addBookToLibrary() {
        const form = document.querySelector("#addbook");
        const titleInput = form.querySelector("#title").value;
        const authorInput = form.querySelector("#author").value;
        const pagesInput = form.querySelector("#pages").value;
        const readInput = form.querySelector("#read");
        
        const isRead = readInput.checked;
    
        const newBook = new Book(titleInput, authorInput, pagesInput, isRead);
        myLibrary.push(newBook)
        form.reset();
        displayBooks();
    }

    function removeBook(index) {
        myLibrary.splice(index, 1);
        displayBooks();
    }
    
    const addButton = document.querySelector("#addbook");
    addButton.addEventListener("submit", function(e) {
        e.preventDefault();
        addBookToLibrary();
    });

    const openmodalbtn = document.querySelector(".openmodal");
    const modal = document.querySelector(".modal");
    const closebtn = document.querySelector(".closebtn");

    function openModal() {
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
    }

    openmodalbtn.addEventListener("click", openModal);
    closebtn.addEventListener("click", closeModal);

    
    
    function displayBooks() {
        const cardContainer = document.querySelector(".cardContainer");
        cardContainer.innerHTML = "";
        for (let i = 0; i < myLibrary.length; i++) {
            const currentBook = myLibrary[i];
            const newDiv = document.createElement("div");
            newDiv.className = "bookcard";
            newDiv.setAttribute('data-index', i);
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
            
            //Code for the remove button
            const removeButton = document.createElement("button");
            removeButton.className = "remove";
            removeButton.textContent = "Remove";
            //IIFE otherwise i isn't captured properly
            removeButton.addEventListener("click", function(index) {
                return function() {
                    removeBook(index);
                }
            }(i));

            //Code for toggle read button
            const toggleRead = document.createElement("Div");
            toggleRead.className = "toggleRead";
            toggleRead.textContent = "Toggle";
            if (currentBook.read === true) {
                newDiv.classList.remove("unread");
                newDiv.classList.add("read");
            }
            else if (currentBook.read === false) {
                newDiv.classList.remove("read");
                newDiv.classList.add("unread");
            }
            //IIFE otherwise i isn't captured properly
            toggleRead.addEventListener("click", function(index) {
                return function() {
                    myLibrary[index].toggleRead();
                    displayBooks();
                };
            }(i));

            newDiv.appendChild(paragraph1);
            newDiv.appendChild(paragraph2);
            newDiv.appendChild(paragraph3);
            newDiv.appendChild(paragraph4);
            newDiv.appendChild(toggleRead);
            newDiv.appendChild(removeButton);
            document.querySelector(".cardContainer").appendChild(newDiv);
        }
    }
    
});

