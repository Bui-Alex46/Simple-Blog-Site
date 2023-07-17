import React, { Fragment, useState} from "react";
import "./Edit.css"
const EditContent = ({contents}) => {

    const [description, setDescription] = useState(contents.content || "");


    // Edit Description Function
    const updateDescription  = async (e) => {
        // Prevents from auto-refresh
        e.preventDefault();
        try {
            // Updating the body of the object.
            // targeting content instead of description. 
            const body = { content: description};
            const response = await fetch(`http://localhost:4000/blog/${contents.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            // Refreshing page 
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    }
    // Checking description is not undefined
    const inputValue = description !== undefined? description : "";
    return (
        <Fragment>
            <form onSubmit = {updateDescription}>
             <input type = "text" className = "form" value = {inputValue} onChange = {e => setDescription(e.target.value)} />
            <button className = "btn-edit"> Edit </button>
            </form>
        </Fragment>
    )
}

export default EditContent