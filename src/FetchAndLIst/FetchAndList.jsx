import { useState } from "react";
import {useQuery} from "@tanstack/react-query"
export default function User(){

  const[search,setSearch]=useState("")
  const[showUser, setShowUser]=useState(false)

  const{data,isLoading,isError,error}= useQuery({
    queryKey:["users"],
    queryFn: async()=>{
      const res = await fetch("http://localhost:3000/users");

      if(!res.ok){
        throw new Error("failed to fetch")
      }
      return res.json()
    },
  })

  if(isLoading)return <h2>loading...</h2>
  if(isError)return <h2>{error.message}</h2>

  function searchUser(){
    const foundUser = data.find(
      (user)=>user.id.toString() === search.toString()
    )
    setShowUser(foundUser)
    console.log(foundUser)
  }

  return(
    <div>
      <input
      type="text"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="search by id"
      />
      <button onClick={searchUser}>search</button>
      <div>
        {showUser ?(<div     style={{
      border: "1px solid white",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}>
          <h2>user found</h2>
          <p>name: {showUser.name}</p>
          <p>email: {showUser.email}</p>
          <p>city: {showUser.address.city}</p>
        </div>):(<div>no user found</div>)}
      </div>
      <div
  style={{
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      border: "1px solid white",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    {[...data].reverse().map((user) => (
      <p key={user.id}>
        {user.id}: {user.name}
      </p>
    ))}
  </div>
</div>
    </div>
  )

}