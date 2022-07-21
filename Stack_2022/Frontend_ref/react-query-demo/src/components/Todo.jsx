import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
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

    return (
        <div>
            <ul>
                {query.data.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

            <button
                onClick={() => {
                    mutation.mutate({
                        id: Date.now(),
                        title: 'Do Laundry',
                    })
                }}
            >
                Add Todo
            </button>
        </div>
    )
}
