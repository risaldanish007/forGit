import { useState } from "react";
import {useQuery} from "@tanstack/react-query"
export default function User(){

  const[search,setSearch]=useState("")
  const[showUser, setShowUser]=useState(false)

  const{data,isLoading,isError,error}= useQuery({
    queryKey:["users"],
    queryFn: async()=>{
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

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
        {showUser ?(<div>
          <h2>user found</h2>
          <p>name: {showUser.name}</p>
          <p>email: {showUser.email}</p>
          <p>city: {showUser.address.city}</p>
        </div>):(<div>no user found</div>)}
      </div>
    </div>
  )
}