import { useState } from "react";

const TodoInput = ({handleData}) => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const AddData = () => {

        let todo = {
            id: new Date().getTime(),
            task: text,
            completed: false,
        }

        handleData(todo)
        setText("")
    }


    return (
        <>
            <input type="text" value={text} onChange={handleChange} placeholder="Enter your Task"/>
            <button onClick={AddData} >ADD</button>
        </>    
    )

}

export default TodoInput;