function NEWtodoApp(){

    const [task,setTask]=useState()
    const[todos,SetTodos]=useState()

    function addTask(){
        if(!task.trim()){
            const newTodo = {
                id: Date.now(),
                text: task
            }

            SetTodos([...todos,newTodo])
            setTask("")
        }
    }
    return(
        <>
        <input
        type="text"
        value={task}
        onChange={e=>setTask(e.target.value)}
        />
        <button onClick={addTask}>add</button>
        <br/>
        {todos.map((todo)=>(
            <div key={todo.id}>{todo.text}</div>
        ))}
        </>
    )
}
export default NEWtodoApp