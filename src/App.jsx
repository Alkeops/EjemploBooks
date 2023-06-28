import React, { useEffect, useRef, useState } from "react";
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
const Container = ({ children }) => {
  return <div>{children}</div>;
};
function App() {
  const [books, setBooks] = useState([
    "Dracula",
    "El señor de los anillos",
    "Cien años de soledad",
    "Los miserables",
  ]);
  const ref = useRef(0);

  /*  const [book, setBook] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setBook("");
  };
  const handleChange = (e) => {
    setBook(e.target.value);
  }; */
  const test = () =>{
    React.createElement("div", null, "Hola mundo");
  };
    return (
    <div>
     
      {/* <form onSubmit={handleSubmit}>
        <input value={book} onChange={handleChange} />
        <button disabled={!book} type="submit">
          Añadir libro
        </button>
      </form> */}
      <CreateBook addBook={(book) => setBooks([...books, book])} />
      <Container>Children</Container>
      <Container
        children={
          <div>
            <h1>algo asi</h1>
          </div>
        }
      />
      {Container({
        children: "Hola mundo",
      })}
      {ref.current}
      <button
        onClick={() => {
          console.log("Click");
          ref.current++;
        }}
      >
        Incrementar
      </button>
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
