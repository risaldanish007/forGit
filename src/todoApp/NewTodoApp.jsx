import { useState } from "react";

function NewTodoApp(){
    const [task,setTask] = useState("")
    const [date,setDate] = useState("")
    const [todos,setTodos] = useState([])
    function addTodo(){
        if(!task.trim() || !date.trim())return alert("enter a valid data")
      const newTodo = {
        id: date,
        text: task
        }
        const updatedTodos = [...todos,newTodo].sort(
            (a,b)=> new Date(b.id) - new Date(a.id)
        );
        setTask("")
        setDate("")
        setTodos(updatedTodos)
    }
    function deletTodo(id){
        const updatedTodo = todos.filter((todo)=> todo.id !== id)
        setTodos(updatedTodo)
    }
    return(
        <>
        <h1>to</h1>
        <input
        type="text"
        value={task}
        onChange={e=>setTask(e.target.value)}
        />
        <input
        type="date"
        value={date}
        onChange={e=>setDate(e.target.value)}
        />
        <button onClick={addTodo}>add task</button>

        <br/>

        <div>{todos.map((todo)=>(
            <div key={todo.id}>
                {todo.text}<br/>
                {todo.id}
                <button onClick={()=>deletTodo(todo.id)}>delete</button>
            </div>
        ))}</div>
        </>
    )
}
export default NewTodoApp