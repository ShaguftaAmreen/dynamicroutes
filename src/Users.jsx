import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const {id,name,lname}=useParams()
  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{lname}</h1>
      
    </div>
  )
}

export default Users
