import React, {Fragment, useState} from "react";
import "./Input.css";

const InputContent = () => {
    // Creating a state
    const [content, setContent] = useState("")
    // Creating a function to submit a post 
    // Event Handling
    const onSubmitForm = async event => {
        event.preventDefault();
        try{
            const body = {content};
            // Fetching data from our server
            const response = await fetch("http://localhost:4000/blog", {
                // Creating a post request
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })
            // Refreshes the page, once response has been sent
            window.location = "/";
        }
        catch(error){
            console.error(error.message)
        }
    };

    return(
        <Fragment>
            <h1 className = "header"> Input Blog Post</h1> 
            <div className = "form-container"> 
                                        {/* Triggering the onSubmitForm function when submitted */}
                <form className = "box" onSubmit = {onSubmitForm}>
                    {/* Implemented the onChange for the state */}
                <input type = "text" className = "text-box" value = {content} onChange = {event => setContent(event.target.value)}/>
                <button> Post </button></form>
            </div>
           
        </Fragment>
        
    );
};

export default InputContent;