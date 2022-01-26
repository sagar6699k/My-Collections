import { useEffect, useState } from "react"

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);


    useEffect(() => {
    let interval = null;
    
      if (timerOn) {
        interval = setInterval(() => {
            setTime((p)=>p+10)
        }, 10); //1/100 = 0.01 = 0.01.slice(-2)= 1
      }
    
      return () => {
        clearInterval(interval)
      };
    }, [timerOn]);
    



    return (
        <div>
            <h1>React Stopwatch</h1>
            <div className="display_div">
                <span>{("0"+ Math.floor((time/60000) % 60)).slice(-2)}:</span>
                <span>{("0"+Math.floor((time/1000) % 60)).slice(-2)}:</span>
                <span>{("0"+((time/10) % 100)).slice(-2)}</span>
            </div>


            <div className="control_btn">
                
                {!timerOn && time === 0 && (
                    <button onClick={() => { setTimerOn(true) }}>Start</button> 
                )}
                
                {timerOn && (
                    <button onClick={()=>{setTimerOn(false)}}>Stop</button>
                )}
                
                {!timerOn && time !== 0 && (
                    <button onClick={()=>{setTimerOn(true)}}>Resume</button>
                )}
                
                {!timerOn && time > 0 && (
                    <button onClick={()=>{setTime(0)}}>Reset</button>
                )}

            </div>
        </div>
    )
}

export default Stopwatch