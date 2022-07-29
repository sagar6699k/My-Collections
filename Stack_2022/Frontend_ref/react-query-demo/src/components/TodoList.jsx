import "./todolist.css";
import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { CustomModal } from "../utils/CustomModal";
import { getTodos } from "../utils/my-api";
import { Link } from "react-router-dom";


export const TodoList = () => {

    const [text, setText] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [updationId, setUpdationId] = useState(undefined)

    // Access the client
    const queryClient = useQueryClient()

    const { isLoading, error, data } = useQuery(['todo'], getTodos)
    console.log("Task-Data-->", data);

    // mutations are typically used to create/update/delete data or perform server side-effects. For this purpose, React Query exports a useMutation hook.
    const add_todo_mutation = useMutation(newTodo => {
        return axios.post('http://localhost:4000/Todo', newTodo)
    },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['todo'])
                setText("")
            },
        }
    )

    //for adding the todo into db
    const AddTodo = () => {
        add_todo_mutation.mutate({
            id: Date.now(),
            title: text,
            status: "in_progress"
        })
    }




    //for Removing the todo from db
    const remove_todo_mutation = useMutation(async (id) => {
        return await axios.delete(`http://localhost:4000/Todo/${id}`)
    },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['todo'])
            },
        }
    )

    const RemoveTodo = (deleteId) => {
        remove_todo_mutation.mutate(deleteId)
        console.log(deleteId);
    }









    if (isLoading) {
        return (
            <h2>Loading..</h2>
        )
    }

    if (error) {
        return (
            <h2>{error.message}</h2>
        )
    }

    return (
        <>
            <CustomModal id={updationId} isOpen={isModalOpen} onClose={() => { setIsModalOpen(false) }} />
            <div className="todo_container">
                <h1 className="todolist_head">✨Todolist✨</h1>
                <h3>Hey, I'm Watching👀,,,  Do your task on time🍴.</h3>
                <ul className="todo_ul">
                    {data.map(todo => (
                        <li key={todo.id}>
                            <div className="title_div">
                                <span className="status_light" ></span>
                                <span className={todo.status === 'in_progress' ? "status_inprogress" : "status_completed"} ></span>
                                {todo.title}
                            </div>
                
                            <span>
                                <button className="ctr_btn" onClick={() => { return(setIsModalOpen(true), setUpdationId(todo.id))}} >Edit</button>
                                <button className="ctr_btn" onClick={() => { RemoveTodo(todo.id) }}>Remove</button>
                            </span>
                        </li>
                    ))
                    }
                </ul>

                <input className="todo-input" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button className="add_btn" onClick={AddTodo}>Add Todo</button>
            </div>
        </>
    )

}
