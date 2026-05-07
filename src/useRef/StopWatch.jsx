import { useRef, useState } from "react";

function StopWatch(){
    const count = useRef(0)
    const intervalRef = useRef(null)

    const [timer,setTimer] = useState(0)

    function startTimer(){
       intervalRef.current = setInterval(()=>{
            count.current += 1
            setTimer(count.current)
        },1000)
        
    }
    function stopTimer(){
        clearInterval(intervalRef.current)
    }
    function reset(){
        intervalRef.current = 0
    }

    console.log(intervalRef.current)

    return(
        <>
        <div>{timer}</div>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={reset}>reset</button>
        </>
    )
}
export default StopWatch;