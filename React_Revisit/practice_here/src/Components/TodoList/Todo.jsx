import { useState } from "react";
import TodoInput from "./TodoInput";

const Todo = () => {

    const [Data, setData] = useState([]);

    const handleData = (data) => {
        setData([...Data, data])
    }


    console.log(Data);
    return (
        <>
            <h1>Welcome to TodoList</h1>
            <TodoInput handleData={handleData} />
            <div className="content">
                <h2>Content to be added</h2>
            </div>
        </>    
    )

}

export default Todo;