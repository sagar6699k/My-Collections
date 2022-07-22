import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'
import { getTodos, postTodo } from '../utils/my-api'


export const Todo = () => {
    // Access the client
    const queryClient = useQueryClient()

    // Queries
    //   const query = useQuery(['todos'], getTodos)
    const query = useQuery(['todos1'], () => {
        fetch('http://localhost:4000/Todo').then(res =>
        res.json()
      )
    }) 

    console.log("query-->", query);

    // Mutations
    const mutation = useMutation(postTodo, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(['todos1'])
        },
    })

    const [text, setText] = useState("")

    return (
        <div>
            <ul>
                {query.data.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button
                onClick={() => {
                    mutation.mutate({
                        id: Date.now(),
                        title: text,
                    })
                }}
            >
                Add Todo
            </button>
        </div>
    )
}
