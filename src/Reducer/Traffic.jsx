import { useReducer } from "react"

const initialState = {theme : "red"}

function Reducer(state,action){
    switch(action.type){
        case "red":
            return {theme :"red"}
        case "green":
            return {theme: "green"}
        case "yellow":
            return {theme:"yellow"}
        default:
            return state
    }
}

function Light(){
    const [state,dispatch]=useReducer(Reducer,initialState);
    

    function HandleChange(){
        if(state.theme === "red"){
            dispatch({type:"yellow"})
        }else if(state.theme === "yellow"){
            dispatch({type:"green"})
            setTimeout(() => {
                dispatch({type:"red"})

            }, 5000);
        } 
    }
    function handleBtn(){
        if(state.theme === "red")return "stop";
        if(state.theme === "yellow")return "ready";
        if(state.theme === "green")return "Go";
    }


    return(
        <>
        <div style={{
            backgroundColor: state.theme,
            width:"200px",
            height:"200px",
            }}></div>
        <button onClick={HandleChange}>{handleBtn()}</button>


       
        </>
    )
}

export default Light;