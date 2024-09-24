class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book)
  }

  listBooks(){
    console.log(`Listing all books found in the library: `)
    this.books.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`)
    });
  }

  findBookByTitle(title) {
    const foundBook = this.books.find(book => book.title === title)
    if (foundBook) {
      console.log(`Found book: Title: ${foundBook.title}, Author: ${foundBook.author}, ISBN: ${foundBook.isbn}`)
    } else {
      console.log(`${title} not found.`)
    }
  }
  
}

const book1 = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  isbn: "ISBN12345"
};

const book2 = {
  title: "1984",
  author: "George Orwell",
  isbn: "ISBN67890"
};

const myLibrary = new Library();

myLibrary.addBook(book1);
myLibrary.addBook(book2);

const searchTitle = "1984";
const foundBook = myLibrary.findBookByTitle(searchTitle);

myLibrary.listBooks();