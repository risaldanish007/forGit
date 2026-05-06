import  {useReducer}  from "react";

const initialState = {count:0}

function reducer(state,action){
    switch(action.type){
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count:state.count - 1}
        default:
            return state;
    }
}

function Counter2(){
    const [state,dispatch]= useReducer(reducer,initialState)

    return(
        <>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:"increment"})}>add</button>
        <button onClick={()=>dispatch({type:"decrement"})}>sub</button>

        </>
    )
}

export default Counter2