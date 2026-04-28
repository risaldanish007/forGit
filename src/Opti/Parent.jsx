import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

export default function Parent(){

        const[count,setCount] = useState(0)
        const[input,setInput] = useState('')

        const updateCounterFromChild = useCallback(()=>setCount(count+1),[count])

    function increment(){
            setCount(prev => prev + 1)
    }
    return(
        <>
        <h2>this is a parent component</h2>
        <button onClick={increment}>{count}</button>
        <input type="text" style={{color: 'red' }} onChange={e=>setInput(e.target.value)}
        value={input}/>
        <Child count={count} updateCounter={updateCounterFromChild}/>
        </>
    )

}