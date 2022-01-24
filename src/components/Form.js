import React, {useState} from "react";
import TodoItems from "./TodoItems";



const Form = () => {

    const [text, setText] = useState('');
    const [items, setItems] = useState([]);


    const handlerChange = () => {
        setItems((prev) => {
            return [...prev, text]
        });
        setText('')
    }

    const deleteTodo = (id) => {
        setItems((prevItem) => {
            return prevItem.filter(
                (item, index) => {
                    return index !== id;
                }
            )
        })
    }

    return (
        <div className="ui form"> 
            <div className="field">
                <label>Enter Todo</label>
                <input onChange={(e) => setText(e.target.value)} value={text}></input>
                <br />
                <br />
                <button onClick={handlerChange}>Add</button>
                <div>
                    <ul>
                        {items.map((todoItem, index) => {
                           return <TodoItems
                            key={index}
                            id={index} 
                            term={todoItem} 
                            onChecked={deleteTodo}
                            />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}



export default Form;