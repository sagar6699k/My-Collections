import { useState } from "react";

const useCounterhook = () => {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount((p)=>p+1)
    }
    const decreament = () => {
        setCount((p)=>p-1)
    }
    const reset = () => {
        setCount(0)
    }

    return [count, increament, decreament, reset]
}


export default useCounterhook;