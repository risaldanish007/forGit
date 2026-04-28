import { useState } from "react";

export default function Register(){

  const[form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",

  })
  const [show,setShow]=useState(false)

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function validate(){
    if(!form.name ||!form.email || !form.password || !form.confirmPassword){
        alert("all field are reqierd")
      return
    }
    if(!form.email.includes("@")){
      alert("enter a valid email")
      return
    }
    if(form.password.length<6){
      alert("6 chars requierd minimum")
      return
    }
    if(form.password !== form.confirmPassword){
      alert("password must match")
      return
    }
    setShow(true)
  }

  return(
    <>
    {show?(<div>
      <h2>profile</h2>
      <h4>name: {form.name}</h4>
      <p>email: {form.email}</p>
    </div>):(   <div>
      <input
      type="text"
      name="name"
      value={form.name}
      placeholder="name"
      onChange={handleChange}
      />
      <input
      type="email"
      name="email"
      value={form.email}
      placeholder="email"
      onChange={handleChange}
      />      
      <input
      type="password"
      name="password"
      value={form.password}
      placeholder="password"
      onChange={handleChange}
      />
      <input
      type="password"
      name="confirmPassword"
      value={form.confirmPassword}
      placeholder="confirmpassword"
      onChange={handleChange}
      />
      <button onClick={validate}>register</button>
    </div>)}
 
    </>
  )
}