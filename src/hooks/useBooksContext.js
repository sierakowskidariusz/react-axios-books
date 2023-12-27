import {useContext} from "react";
import BooksContext from "../context/BooksContext";

/**
 * @returns {{books: [{id:number,title:string}], fetchBooks: function, createBook: function(title:string), deleteBookById: function(id:number), editBookById: function(id:number, title:string)}}
 */
export default function useBooksContext() {
    return useContext(BooksContext);
}
