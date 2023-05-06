import { useState } from "react";
import "./App.css";

const Book = ({ title }) => {
  return (
    <div className="book">
      <div className="book-image"></div>
      <span>Best seller</span>
      <span className="book-title">{title}</span>
    </div>
  );
};

const CreateBook = ({ addBook }) => {
  const [book, setBook] = useState("");
  const handleChange = (event) => {
    setBook(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setBook("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Título" value={book} onChange={handleChange} />
      <button type="submit" disabled={!book}>Crear Libro</button>
    </form>
  );
};


function App() { 
  const [books, setBooks] = useState([
    "Dracula",
    "La fundación",
    "Matar a un ruiseñor",
  ]);
  return (
    <div>
      <CreateBook addBook={(book) => setBooks([...books, book])} />
      <h2>Best Sellers</h2>
      <div className="books">
        {books.map((book, index) => (
          <Book key={index} title={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
