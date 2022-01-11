import { useReducer } from "react"


const Counter = () => {

    let initialState = 0;

    const reducer = (current_state, action) => {
        switch (action) {
            case "increament":
                return current_state + 1;
            
            case "decreament":
                return current_state - 1;
            
            case "reset":
                return initialState;
               
            default:
                return current_state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Counter using useReducer hook</h1>
            <h2>Counter:{count}</h2>

            <button onClick={()=>{dispatch("increament")}}>Increament</button>
            <button onClick={()=>{dispatch("decreament")}}>Decreament</button>
            <button onClick={()=>{dispatch("reset")}}>Reset</button>
        </div>
    )
}

export default Counter
