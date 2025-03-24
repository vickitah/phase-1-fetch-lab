function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch request
    .then(response => response.json()) // Convert response to JSON
    .then(data => renderBooks(data)) // Pass data to renderBooks()
    .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector("main");

  books.forEach(book => {
    const h2 = document.createElement("h2"); // Create h2 for book title
    h2.textContent = book.name; // Set text content to book title
    main.appendChild(h2); // Append to <main>
  });
}

document.addEventListener("DOMContentLoaded", function() {
  fetchBooks(); // Fetch books when DOM loads
});
