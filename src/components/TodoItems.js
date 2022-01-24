import React, {useState} from "react";




const TodoItems = ({term}) => {

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
        </div>
    );
}



export default TodoItems;