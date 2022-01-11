import { useEffect, useReducer } from "react"
import axios from "axios";

const FetchingData = () => {

    const initialState = {
        loading: true,
        Data: {},
        error:''
    }

    //The same mechanism is used in redux; after this I'll reccomond to learn redux now.
    const reducer = (state, Action) => {

        switch (Action.type) {
            case 'SUCCESS':
                return {
                    ...state,
                    loading:false,
                    Data: Action.payload,
                    error: ''
                };
            
            case 'ERROR':
                return {
                    loading: false,
                    Data: {},
                    error: "Something went wrong"
                };
                
            default:
                return state;
        }
    }





    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/5')
            .then((res) => { dispatch({ type: 'SUCCESS', payload: res.data }) })
            .catch((error)=>{dispatch({type:"ERROR"})})
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState )
    return (
        <div>
            <h1>Fetching API using useReducer</h1>
            {state.loading ? <h1>Loading..</h1> : <h2>From the API : {state.Data.title }</h2>}
            {state.error ? <h2>{state.error }</h2> : null}

        </div>
    )
}

export default FetchingData
