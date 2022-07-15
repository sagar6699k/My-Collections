import useCounterhook from "../CustomHooks/useCounterhook"

const Counter_Custom_hook = () => {
  
    const [count, increament, decreament, reset] = useCounterhook();

    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={increament}>increament</button>
            <button onClick={decreament}>decreament</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter_Custom_hook