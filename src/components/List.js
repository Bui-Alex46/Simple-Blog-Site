import React, {Fragment, useEffect, useState} from "react";
import "./List.css";
import EditContent from "./Edit"
const ListContent = () => {

const [content, setContent] = useState([]);


// Delete Function
const deleteContent = async (id) => {
    try {
        // Delete Fetch Request to our API 
        const deleteContent = await fetch(`http://localhost:4000/blog/${id}`,{
            method: "DELETE"
        });
        // Filters out the page, instead of refreshing everytime
        // Output every other content, except for the deleted values
        setContent(content.filter(contents => contents.id !== id))

    } catch (error) {
        console.error(error.message)
    }
}
// Function to print out our content 
    const getContent = async () => {
        try {
            // Get Request from API. This is a default request
            const response = await fetch("http://localhost:4000/blog")
            // Parsing the data(AKA our fetch request) 
            const jsonData = await response.json()

            // Updating our STATE, using the parsing method "jsonData"
            setContent(jsonData)

        } catch (error) {
            console.error(error.message)
        }
    }

    // Create a fetch request to our API
    // This is our useEffect hook
    useEffect(() => {
        if(content.length === 0){
            getContent();
        }
    //   Using content as a dependency, so we don't get multiple fetch request.
    // Will only re-render once, whenever content state is chagned 
    },[content]);
    console.log(content)
    
    return(
    <Fragment>
        {" "}
       <table className = "table mt-5 text-center">
        <thead>
            <tr>
                <th> Name </th>
                <th> Age </th>
                <th> Content </th>
                <th> Delete </th>
                <th> Edit </th>
            </tr>
        </thead>
        <tbody>
            {/* Mapping oour data under the content section */}
            {/* "statename".map ( variable_name_ => (varialbe_name_.content)) */}
            {/* Allows us to map to whatever data we need from the database */}
            {/* We want to directly access, just the content portion, of our users */}
           {content.map(contents => (
            <tr key = {contents.id}>
                <td>{contents.name}</td>
                <td> {contents.age} </td>
                <td> {contents.content} </td>
                <td className = "btn-container"> 
                    <button className = "btn" onClick={() => deleteContent(contents.id)}> Delete </button>
                </td>
                <td> <EditContent contents = {contents}/> </td>
            </tr>
            
           ))}
        </tbody>
       </table>
    </Fragment>
    )  
    
    
}
export default ListContent;