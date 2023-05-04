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

function App() {
  return (
    <div>
      <h2>Best Sellers</h2>
      <div className="books">
        <Book title="Dracula" />
        <Book title="El señor de los anillos" />
        <Book title="Cien años de soledad" />
      </div>
    </div>
  );
}

export default App;
