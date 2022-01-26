import { useState } from "react";

const TodoInput = ({handleData}) => {


    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const AddData = () => {
        handleData(text)
    }




    
    return (
        <>
            <input type="text" value={text} onChange={handleChange} placeholder="Enter your Task"/>
            <button onClick={AddData} >ADD</button>
        </>    
    )

}

export default TodoInput;