import { useState } from "react";

function Form(){

    const[form,setForm]=useState({
        name:"",
        email:"",
    })
    const [savedData,setSavedData] = useState('')
    const [isSaved,setIsSaved] = useState(false)

function addData(e){
    setForm({
        ...form,
        [e.target.name]:e.target.value
    });
}

function saveData(){
    if(!form.name.trim())return alert("enter a valid name")
    setSavedData(form.name)
    setIsSaved(true)
    setForm({name:"",email:""})

}
function edit(){
    setIsSaved(false)
}
return(
    <>
        <input
        type="text"
        name="name"
        placeholder="name"
        value={form.name}
        onChange={addData}
        disabled={isSaved}
        
        />
        <button onClick={saveData}>save</button>
        <button onClick={edit}>edit</button>

        <p>{savedData}</p>
    </>
)

}
export default Form;