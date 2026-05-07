import { useState } from "react"

function ToDoApp(){

    const [task,setTask]=useState([])
    const[todos,SetTodos]=useState([])

    function addTask(){
        if(!task.trim())return alert("enter valid task");
           const newTodo = {
                id: Date.now(),
                text: task
            }
            SetTodos([...todos,newTodo])
            setTask("")
        }

    function deleteTodo(id){
        const updatedTodos = todos.filter((todo)=> todo.id !== id)
        SetTodos(updatedTodos)
    }
    function updateTodo(){
        
    }
    return(
        <>
        <input
        type="text"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={addTask}>add</button>
        <br/>
        {todos.map((todo)=>(
            <div key={todo.id}>{todo.text}
            <button onClick={()=>deleteTodo(todo.id)}>delete</button></div>
        ))}
        </>
    )
}
export default ToDoApp;