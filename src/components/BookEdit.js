import React from "react";
import useBooksContext from "../hooks/useBooksContext";

/**
 * Formularz edycji informacji o książce
 * @param {{id:number,title:string}} book
 * @param {function():void} onSubmit
 * @returns {Element}
 * @constructor
 */
export default function BookEdit({book, onSubmit}) {
    /**
     * @type {React.RefObject<HTMLInputElement>}
     */
    const inputRef = React.createRef();
    const {editBookById} = useBooksContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, inputRef.current.value);
        onSubmit()
    }
    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" ref={inputRef} defaultValue={book.title} />
        <button className="button is-primary">Save</button>
    </form>;
}
