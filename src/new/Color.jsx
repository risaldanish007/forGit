import {useState} from "react"

function Color() {
const color =   {
  "5": "#FFFF00",
  "3": "#008000",
  "12": "#663399",
  "21": "#DC143C",
  "34": "#008B8B",
  "56": "#FFD700",
  "88": "#4682B4"
}

    const keys = Object.keys(color)
    console.log(keys)

   const [theme,setTheme] = useState(0)

   function nextColor(){
    setTheme((prev)=>(prev + 1)% keys.length)
   }

   function prevColor(){
    setTheme((prev)=>
    prev === 0? keys.length -1 : prev - 1);
   }
    return(
        <>   
        <button onClick={prevColor}>prev</button>
        <div style={{backgroundColor:color[keys[theme]], width:"200px",height:"200px"}}>hello</div>
        <button onClick={nextColor}>next</button>
        </>
    )
}
export default Color