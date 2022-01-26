import React,{useState} from "react";




const TodoItems = ({ title, date, onDelete, id, comDate}) => {

    const [isDone, setIsDone] = useState(false);

    const handlerChange = () => {
        setIsDone((prevItem) => {
            return !prevItem;
        })
    }


    const handlerDelete = () => {
        onDelete(id);
    }


    return (
        <div className="ui container center aligned">
            <div style={{marginTop: '40px'}}>
            <div className="ui cards">
             <div className="content ui segment">
                <a className="header" style={{fontSize:'1.5rem', textDecoration: isDone ? "line-through" : "none"}}>{title}
                </a>
                <input style={{marginLeft:'3px'}} type="checkbox" onClick={handlerChange}></input>
                <div className="meta">
                <span className="date">{date}</span>
                </div>
                <div className="description">
                <button className="ui button" onClick={handlerDelete}>Delete</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}



export default TodoItems;