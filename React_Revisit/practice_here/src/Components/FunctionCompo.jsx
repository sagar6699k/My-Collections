import { useEffect, useState } from "react"
import useDocumentTitle from "./CustomHooks/useDocumentTitle";

const FunctionCompo = () => {

    const [count, setcount] = useState(0);

    // useEffect(() => {
    //   document.title = `Count ${count}`
    // }, [count]);

    // instead of above code we are using our custum-hook to change the title.
    useDocumentTitle(count)
    

    return (
        <div>
            <h1>Welcome to Function Component</h1>
            <h2>Change the title using Custom hook</h2>

            <button onClick={()=>{setcount(count+1)}}>Count { count}</button>
        </div>
    )
}

export default FunctionCompo
