// Task 13: Search by Title - using Promises
const getBooksByTitle = (title) => {
    return new Promise((resolve, reject) => {
        const matchingBooks = Object.values(books).filter(book => book.title === title);
        if (matchingBooks.length > 0) {
            resolve(matchingBooks);
        } else {
            reject({ status: 404, message: `No books found with title ${title}` });
        }
    });
};

// Usage
getBooksByTitle("Things Fall Apart")
    .then(books => {
        console.log("Books with title:", books);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
