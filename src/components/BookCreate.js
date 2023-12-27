import React from "react";
import useBooksContext from "../hooks/useBooksContext";

/**
 * Formularz tworzenia nowego elementu
 * @returns {Element}
 * @constructor
 */
export default function BookCreate() {
    /**
     * @type {React.RefObject<HTMLInputElement>}
     */
    const inputRef = React.createRef();
    const {createBook} = useBooksContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(inputRef.current.value);
    };
    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" ref={inputRef}/>
            <button className="button" type="submit">Create!</button>
        </form>
    </div>;
}
