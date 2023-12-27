import './App.css';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    return <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>;
}

export default App;
