import { useState } from "react";

export default function TodoApp(){

  const[task,setTast] = useState("")
  const[todos,setTodos]=useState([])
  const[history,setHistory]=useState([])


  function addTodo(){
    if(!task.trim())return null;
      const newTodo ={
        id : Date.now(),
        text : task,
      }
    setTodos([...todos,newTodo])
    setTast("")    
  }

  function deleteTodo(id){
    const deletedTodo = todos.find((todo)=> todo.id === id)
    setHistory(deletedTodo)

    const updatedTodo = todos.filter((todo)=> todo.id !== id)
    setTodos(updatedTodo)
    console.log(deletedTodo)
  }

  return(
    <div><h2>To Do</h2>
      <input
      type="text"
      value={task}
      onChange={(e)=>setTast(e.target.value)}
      placeholder="enter your task"
      />

      <button onClick={addTodo}>click</button>
      <br/>
      {todos.map((todo)=>(
        <div key={todo.id}>
          {todo.text}
          <button onClick={()=>deleteTodo(todo.id)}>delete</button>
        </div>
      ))}
    </div>

  )
}