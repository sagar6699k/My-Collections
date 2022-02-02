import { useEffect, useState } from "react"
import './timer.css';
const Timer = () => {


    //You can also create stopwatch from this.
    const [text, setText] = useState("");
    const [seconds, setSeconds] = useState(59);
    const [min, setMin] = useState(4);
    const [timeron, setTimeron] = useState(false);

    
    useEffect(() => {
        let interval = undefined;
      
        if (timeron) {
            interval = setInterval(() => {
                setSeconds((p) => p - 1)
            }, 1000); 
        }
        return () => {
            clearInterval(interval)
        };
        
    }, [timeron]);
    // useEffect(() => {
    //     let interval = undefined;
    //     setMin(Number(text))

    //     if (timeron && text) {
    //         interval = setInterval(() => {
    //             setSeconds((p) => p - 1)
    //         }, 100); 
    //     }
    //     return () => {
    //         clearInterval(interval)
    //     };
        
    // }, [timeron]);

    // if (seconds === 0) {
    //     setMin((p) => p - 1)
    //     setSeconds(59);
    // }

    // if (min === 0 && seconds===0 && timeron) {
    //     alert("Time Over")
    //     setMin(0)
    //     setSeconds(0);
    // }

    if (seconds === 0) {
        setMin((p) => p - 1)
        setSeconds(59);
    }


    const resetTimer = () => {
        setSeconds(59)
        setMin(4)
        setTimeron(false)
    }

    if (min === 0 && seconds === 0 & timeron === true) {
        alert("Time Over");
        setSeconds(59)
        setMin(4)
        setTimeron(false)
    }
    
    

    return (
        <div className="timer_container">
            <h1>Welcome to React-Timer</h1>
            <p>Bydefault 5 min timer, input taking is not working rightnow</p>

            <input type="number" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter time in min" />

            <div className="display_div">
                <h2>{min < 10 ? "0" + min : min}:{seconds < 10 ? "0" + seconds : seconds}</h2>
                
                <button onClick={() => setTimeron(!timeron)}>
                    {timeron? "Pause" : "Start"}
                </button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default Timer
