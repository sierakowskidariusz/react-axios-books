import {createContext, useCallback, useState} from "react";
import axios from "axios";

/**
 * @type {React.Context<{books:[{id:number,title:string}],fetchBooks:function,createBook:function(title:string),deleteBookById:function(id:number),editBookById:function(id:number,title:string)}>}
 */
const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(() => {
        axios.get('http://localhost:3001/books').then(response => {
            setBooks(response.data);
        })
    }, []);

    /**
     * Dodaje nową książkę o podanym tytule
     * @param {string} title
     */
    const createBook = (title) => {
        if (!title) return;
        axios.post('http://localhost:3001/books', {title}).then(() => fetchBooks())
    }
    /**
     * Usuwa książkę o podanym ID
     * @param {number} id
     */
    const deleteBookById = (id) => {
        if(!id) return;
        axios.delete(`http://localhost:3001/books/${id}`).then(() => fetchBooks())
    }
    /**
     * Zmienia tytuł książki dla podanego ID
     * @param {number} id
     * @param {string} title
     */
    const editBookById = (id, title) => {
        if(!id||!title)return;
        axios.put('http://localhost:3001/books/' + id,{title}).then(() => fetchBooks())
    }

    const exportApi = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById
    }

    return <BooksContext.Provider value={exportApi}>
        {children}
    </BooksContext.Provider>
}
export {Provider};
export default BooksContext;
