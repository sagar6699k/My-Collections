import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";

const Todo = () => {

    const [TodoData, setTodoData] = useState([]);
    const [editTask, setEditTask] = useState(null);
    const [editedText, setEditedText] = useState("");



    useEffect(() => {
        let TodoList = localStorage.getItem('TodoList');
        let LoadedTodoList = JSON.parse(TodoList);

        if (LoadedTodoList) {
            setTodoData(LoadedTodoList);
        }

    }, []);

    useEffect(() => {
    
        let TodoList = JSON.stringify(TodoData);
        localStorage.setItem('TodoList', TodoList)
        
    }, [TodoData]);

  



    const handleData = (data) => {
        setTodoData([...TodoData, data])
    }

    const toggleStatus = (id) => {
        let updatedTodo = [...TodoData].map(ele => {
            if (ele.id === id) {
                ele.completed = !ele.completed
            }
            return ele;
        })

        setTodoData(updatedTodo);
    }

    const RemoveTodo = (id) => {
        const updatedTodo = [...TodoData].filter((ele) => ele.id !== id);
        setTodoData(updatedTodo);
    }

    const SaveEdit = (id) => {
        const editedTask = [...TodoData].map((ele) => {
            if (ele.id === id) {
                ele.task = editedText;
            }

            return ele;
        })

        setTodoData(editedTask);
        setEditedText("")
        setEditTask(null)
    }


    console.log(TodoData);
    return (
        <>
            <h1>Welcome to TodoList</h1>
            <TodoInput handleData={handleData} />
            <div className="content">
                <h2>Content to be added</h2>
                {
                !TodoData?
                <h2>Loading..</h2>
                :
                TodoData.map((element)=>(
                    <div key={element.id} className="todo_input_div">
                        <div>
                            {
                                editTask === element.id ?
                                    (
                                        <input type="text" value={editedText} onChange={(e)=>setEditedText(e.target.value)} />
                                    )
                                    : 
                                    (
                                        <h4>{element.task}</h4>
                                    )
                            }

                            {
                                editTask === element.id ?
                                    (
                                        <button onClick={()=>SaveEdit(element.id)}>save edit</button>
                                    )
                                    : 
                                    (
                                        <button onClick={()=>setEditTask(element.id)}>edit</button>
                                    )
                            }
                            
                        </div>
                        
                        <div>
                            <input
                                type="checkbox"
                                onChange={() => { toggleStatus(element.id) }}
                                checked = {element.completed}
                            />
                            <button onClick={() => {
                                RemoveTodo(element.id)
                            }}>remove task</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </>    
    )

}

export default Todo;