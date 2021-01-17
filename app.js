let Library = [];
const newBookButton = document.getElementById("newBook");
const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit");
const readButton = document.querySelectorAll(".btn");
localStorage.books = [];

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = () => {
      return `${title} by ${author}, ${pages} pages, ${haveRead}`;
    }
}
  
function addBookToLibrary(){

}

newBookButton.addEventListener("click", ()=>{
  form.classList.toggle("display");
});

submitButton.addEventListener("click", ()=>{
  form.classList.toggle("display");
});

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


window.onload = function () {
  alert("This is run");
  if('books' in localStorage){
    alert("This is run2");
    if(localStorage.books){
      // alert("this code will run");
      // alert(localStorage.getItem("books"));
      localStorage.books.forEach(book => {

      });
    }
  }
}