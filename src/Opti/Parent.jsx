import { useCallback, useRef, useState } from "react";
import Child from "./Child";

export default function Parent(){
    const[count,setCount]=useState(0)
    const[text,setText]=useState('')
    const inputRef = useRef(null)

    function handleFocus(){
        inputRef.current.focus()
    }


    const updateParentFromChild = useCallback(()=>setCount(count+1),[count])


    return(
        <>
        <h2>{count}</h2>

        <button  onClick={updateParentFromChild}>click</button>
        <input
        ref={inputRef}
        type="text"
        style={{color: 'red' }}
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <Child count={count} updateParentFromChild={updateParentFromChild}/>
        </>
    )
}







// import { useCallback, useMemo, useState } from "react";
// import Child from "./Child";

// export default function Parent(){

//         const[count,setCount] = useState(0)
//         const[input,setInput] = useState('')

//         const updateCounterFromChild = useCallback(()=>setCount(count+1),[count])

//     function increment(){
//             setCount(prev => prev + 1)
//     }
//     return(
//         <>
//         <h2>this is a parent component</h2>
//         <button onClick={increment}>{count}</button>
//         <input type="text" style={{color: 'red' }} onChange={e=>setInput(e.target.value)}
//         value={input}/>
//         <Child count={count} updateCounter={updateCounterFromChild}/>
//         </>
//     )

// }