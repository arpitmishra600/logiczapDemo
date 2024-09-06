import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected({children}) {
    const navigate=useNavigate()
    const login=localStorage.getItem("loggedInAs")
    useEffect(()=>{
        if (!login){
            navigate('/')
        }
    },[])
  return (
    <>
        {children}
    </>
  )
}
