import React, {useState} from "react";
import TodoItems from "./TodoItems";



const FormData = ({onAdd}) => {

    const [text, setText] = useState({
        title : "",
        date : ""
    });
    

    const submitText = (event) => {
        event.preventDefault();
        onAdd(text);
        
        setText({
            title : "",
            date : ""
        });
        
    }


    const handleChange = (event) => {
        const {name, value} = event.target;

        setText((prevText) => {
            return {
                ...prevText,
                [name] : value
            };
        });
    }

    return (
        <div >
            <form onSubmit={submitText} className="ui form">
            <div className="field">
                <label>Enter Todo</label>
                <input name="title" onChange={handleChange} value={text.title}></input>
                <br />
                <br />
                <input name="date" type="date" onChange={handleChange} value={text.date}></input>
                <br />
                <br />
                <button className="ui button">Add</button>
            <h3>Today's Todo</h3>
            </div>
            </form> 
        </div>
    );
}



export default FormData;