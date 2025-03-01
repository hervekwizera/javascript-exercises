class Book {
    constructor(id, title, author, genre, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }

    // Method to borrow a book
    borrow() {
        if (this.available) {
            this.available = false;
            return `${this.title} has been borrowed.`;
        } else {
            return `${this.title} is currently not available.`;
        }
    }

    // Method to return a book
    returnBook() {
        this.available = true;
        return `${this.title} has been returned.`;
    }

    // Method to display book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Available: ${this.available ? "Yes" : "No"}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // Add book to library
    addBook(book) {
        this.books.push(book);
    }

    // Find book by title
    findBook(title) {
        return this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    }

    // List all books
    listBooks() {
        return this.books.map(book => book.getDetails()).join("\n");
    }
}

// Example usage:
const library = new Library();
const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
const book2 = new Book(2, "1984", "George Orwell", "Dystopian");

library.addBook(book1);
library.addBook(book2);

console.log(library.listBooks()); // Display all books
console.log(book1.borrow()); // Borrow a book
console.log(book1.getDetails()); // Show updated book details
console.log(book1.returnBook()); // Return the book
