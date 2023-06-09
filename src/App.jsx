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
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setBook("");
  };
  const handleChange = (e) => {
    setBook(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={book} onChange={handleChange} />
      <button disabled={!book} type="submit">
        Añadir libro
      </button>
    </form>
  );
};


function App() {
  const [books, setBooks] = useState([
    "Dracula",
    "El señor de los anillos",
    "Cien años de soledad",
    "Los miserables",
  ]);
  return (
    <div>
      <CreateBook addBook={(book) => setBooks([...books, book])} />
      <h2>Best Sellers</h2>
      <div className="books">
        {books.map((element, idx) => (
          <Book title={element} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
