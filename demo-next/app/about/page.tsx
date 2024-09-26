"use client"
import { useEffect, useState } from 'react'
function About() {
    const [users,setUsers]=useState([])
    useEffect(() => {
        const fetchUsers=async ()=> {
            const res = await fetch("http://localhost:3000/api/users")
            const data = await res.json()
            setUsers(data)
            console.log(data)
        }
        fetchUsers()
  },[])
  return (
    <div>
          <p>This is About page</p>
          { users.map((u:any) => (
              <div> 
                  <h1>{ u.name }</h1>
              </div>)
          )}
    </div>
  )
}

export default About
