import React, {useEffect} from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/useBooksContext";

/**
 * Komponent do wizualizacji listy książek
 * @returns {Element}
 * @constructor
 */
export default function BookList() {
    const {books,fetchBooks} = useBooksContext();
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);
    return <div className="book-list">
        {books.map((book) => <BookShow key={book.id} book={book} />)}
    </div>;
}
