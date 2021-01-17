let library = [];
const newBookButton = document.getElementById("newBook");
const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit");
const readButton = document.querySelectorAll(".btn");
const librarySection = document.querySelector(".library");
let books = [];

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}
  
function addBookToLibrary(title, author, pages, haveRead){
  const newBook = document.createElement("div");
  newBook.classList.add("book");

  const Title = document.createElement("p");
  Title.classList.add("book__label");
  Title.classList.add("title");
  Title.innerText = "Title:";
  newBook.appendChild(Title);

  const bookTitle = document.createElement("p");
  bookTitle.classList.add("book__stat");
  bookTitle.innerText = title;
  newBook.appendChild(bookTitle);

  const Author = document.createElement("p");
  Author.classList.add("book__label");
  Author.innerText = "Author:";
  newBook.appendChild(Author);

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book__stat");
  bookAuthor.innerText = author;
  newBook.appendChild(bookAuthor);

  const Pages = document.createElement("p");
  Pages.classList.add("book__label");
  Pages.innerText = "Pages:";
  newBook.appendChild(Pages);

  const bookPages = document.createElement("p");
  bookPages.classList.add("book__stat");
  bookPages.innerText = pages;
  newBook.appendChild(bookPages);

  const haveReadButton = document.createElement("button");
  haveReadButton.classList.add("read");
  haveReadButton.classList.add("btn");
  const HaveRead = document.createElement("p");
  HaveRead.innerText = haveRead;
  haveReadButton.appendChild(HaveRead);
  newBook.appendChild(haveReadButton);
  
  const br = document.createElement("br");
  newBook.appendChild(br);

  const trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  const trashImage = document.createElement("img");
  trashImage.src = "./trash.svg";
  trashImage.alt = "trash icon";
  trashButton.appendChild(trashImage);
  newBook.appendChild(trashButton);

  librarySection.appendChild(newBook);
  
}

// Displays the form
newBookButton.addEventListener("click", ()=>{
  form.classList.toggle("display");
});

// Puts the form away
submitButton.addEventListener("click", ()=>{
  form.classList.toggle("display");

});

// Toggles state of read Button
readButton.forEach(button =>{
  button.addEventListener("click", ()=>{
    button.classList.toggle("read");
    button.classList.toggle("notRead");
    if(button.innerText == "Have Read"){
      button.innerText = "Have Not Read";
    } else if(button.innerText == "Have Not Read"){
      button.innerText = "Have Read";
    }
  })
})

// loads in the Library
window.onload = function () {
  alert("This is run");
  if(localStorage.books){
    alert("This is run2");
    if(localStorage.books.length > 0){
      alert("this code will run");
      const bookStorage = JSON.parse(localStorage.getItem("books"));
      //Iterate through books
      bookStorage.forEach(book => {
        addBookToLibrary(book.title, book.author, book.pages, book.haveRead);
      });
      books = JSON.parse(localStorage.getItem("books"));
    } 
  }else { //Runs if books storage doesn't exist yet
      console.log("This is run3")
      books.push(new Book("The Hobbit", "J. R. R. Tolkien", 300, "Have Read"));
      localStorage.setItem('books', JSON.stringify(books));
      const bookStorage = localStorage.getItem('books');
      console.log(bookStorage);
  }
}