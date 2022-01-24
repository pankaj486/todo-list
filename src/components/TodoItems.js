import React, {useState} from "react";




const TodoItems = ({ term, onChecked, id }) => {

    const [isDone, setIsDone] = useState(false);

    const handleClick = () => {
        setIsDone((prevValue) => {
            return !prevValue;
        })
    }

    return (
        <div>
            <li style={{textDecoration: isDone ? 'line-through' : 'none'}}>{term}</li>
            <input onClick={handleClick} type="checkbox"></input>
            <button 
            onClick={() => {
                onChecked(id)
            }}
            >Delete</button>
        </div>
    );
}



export default TodoItems;