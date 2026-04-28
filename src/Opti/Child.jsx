import { memo, useMemo } from "react"
function Child(prop){
    const {count,updateCounter} = prop
 
 let childNumber = useMemo(()=>{
    let number= 0
    for(let i=0 ; i<=500_000_000 ; i++){
        number++
    }
    return number
 },[])


    console.log("re-rendering the child component")
  return(
    <>
    <h3>this is a child Component - {count}</h3>
    <p>{childNumber}</p>
    <button onClick={updateCounter}>click</button>
    </>
  )
}
export default memo(Child)