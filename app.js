let Library = [];
const newBookButton = document.getElementById("newBook");
const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit");

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