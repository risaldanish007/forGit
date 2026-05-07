import { useRef, useState } from "react";

function StopWatch(){
    const count = useRef(0)
    const intervalRef = useRef(null)
    const [timer,setTimer] = useState(0)
    const speed = useRef(1000)

  function startCounter(){
    intervalRef.current = setInterval(()=>{
        count.current+=1
        setTimer(count.current)
    },speed.current)
  }
 function stopCounter(){
    clearInterval(intervalRef.current)
 }
 function resetCounter(){
    setTimer(count.current = 0)
 }
  function speedup() {
    stopCounter();

    speed.current = Math.max(100, speed.current - 200);

    startCounter();
  }

 return(
    <>
    <h3>{timer}</h3>
    <button onClick={startCounter}>start</button>
    <button onClick={stopCounter}>Stop</button>
    <button onClick={resetCounter}>rest</button>
    <button onClick={speedup}>faster</button>
    </>
 )
}
export default StopWatch;