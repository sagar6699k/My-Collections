import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../utils/my-api";

const getData = () => (
    fetch('http://localhost:4000/Todo').then(res =>
        res.json()
    )
)

export const TodoList = () => {

    const [text, setText] = useState("")

    // Access the client
    const queryClient = useQueryClient()

    const { isLoading, error, data } = useQuery(['todo'], getTodos)
    // console.log("Trail-Data-->", data);

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
        })
    }


    //for Removing the todo into db
    const remove_todo_mutation = useMutation(id => {
        return axios.delete(`http://localhost:4000/Todo/${id}`)
    },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['todo'])
                setText("")
            },
        }
    )



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
        <div className="todo_container">
            <h2>Hey, I'm Watching👀,,,  Do your task on time🍴✨.</h2>
            <ul className="todo_ul">
                {data.map(todo => (
                    <li key={todo.id}>
                        {todo.title}

                        <span>
                            <select className="ctr_btn" onClick={3}>
                                <option value="">In Progress</option>
                                <option value="">Completed</option>
                            </select>
                            <button className="ctr_btn" onClick={3}>Edit</button>
                            <Link to={`/`}>
                                <button className="ctr_btn" onClick={3}>Remove</button>
                            </Link>
                        </span>
                    </li>
                ))
                }
            </ul>

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={AddTodo}>Add Todo</button>
        </div>
    )
}
