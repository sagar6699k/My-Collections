import { useEffect, useState } from "react"
import useDocumentTitle from "./CustomHooks/useDocumentTitle";

const FunctionCompo = () => {

    const [count, setcount] = useState(0);
    const [text, setText] = useState("");
    const [Data, setData] = useState(null);

    // useEffect(() => {
    //   document.title = `Count ${count}`
    // }, [count]);

    // instead of above code we are using our custum-hook to change the title.
    useDocumentTitle(count)
    
    const getData = () => {
        fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${Number(text)}`)
            .then((res) => res.json())
            .then((res) => setData(res.data))
        
        setText("")
        
    }
    console.log(Data);
    return (
        <div>
            <h1>Welcome to Function Component</h1>
            <h2>Change the title using Custom hook</h2>

            <button onClick={() => { setcount(count + 1) }}>Count {count}</button>
            



            <input type="number" value={text} placeholder="enter year" onChange={(e)=>setText(e.target.value)} />
            <button onClick={getData}>TestAPI</button>

            {
            Data === null?
             <h2>Loading..</h2>
             :
             Data.map((element)=>(
                 <ul>
                     <li key={element.imdbID}>{element.Title}</li>
                 </ul>
             ))
            }

            
        </div>
    )
}

export default FunctionCompo
