import React,{useState} from "react";
import Form from "./components/Form";
import FormData from "./components/FormData";
import TodoItems from "./components/TodoItems";




const App = () => {

    // Compare Date
    // const date1 = new Date()
    
    // Creating Array of Inputs
    const [texts, setTexts] = useState([]);

    // const date2 = texts.map((newDate) => {
    //     return newDate.date
    // })
    
    // const compareDate = date1.getTime();

    // if (date1.getTime()===date2.getTime()){
    //     const render = texts.map((item) => {
    //         return item
    //     });
    //     today.push(render);
    // } 

    const addNote = (newText) => {
        setTexts((prevText) => {
            return [...prevText, newText];
        });
        

    }


    const deleteTodo = (id) => {
        setTexts((prevItem) => {
            return prevItem.filter(
                (item, index) => {
                    return index !== id;
                }
            )
        })
    }


    return (
        <div className="ui container">
            <FormData onAdd={addNote}/>
            {texts.map((textItem, index) => {
                return <TodoItems 
                title={textItem.title} 
                date={textItem.date} 
                onDelete={deleteTodo}
                key={index}
                id={index}
                />
            })}
        </div>
    );
}



export default App;