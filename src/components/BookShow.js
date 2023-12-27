import React, {useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

/**
 * Wizualizacja pojedynczej książki
 * @param {{id:number,title:string}} book
 * @returns {Element}
 * @constructor
 */
export default function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useBooksContext();
    const handleEdit = () => {
        setShowEdit(!showEdit);
    }
    const handleEditSubmit = () => {
        setShowEdit(false);
    }
    const editForm = showEdit
        ? <BookEdit book={book} onSubmit={handleEditSubmit} />
        : <h3>{book.title}</h3>
    const handleDelete = () => {
        deleteBookById(book.id);
    };
    return <div className="book-show">
        <img alt={book.title} src={`https://picsum.photos/seed/${book.id}/300/200`}/>
        <div>{editForm}</div>
        <div className="actions">
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    </div>;
}
