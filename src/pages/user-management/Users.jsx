import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Users() {
    const [user , setUser] = useState([])
    useEffect(() => {
    
        
axios.get('https://fakestoreapi.com/users')
  .then(response => console.log("users" ,response.data));
    
    }, [])
    



  return (
    <>
    <h1>all users</h1>
    </>

)
}
