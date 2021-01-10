let Library = [];

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