import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
export default function Login() {
    const [data,setData]=useState({email:"",password:""})
    const navigate=useNavigate()
    const handleSubmit=async()=>{
       try {
         const response=await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/login`,data,{withCredentials:true})
         console.log(response)
         if (response.status==200 && response.data.message==="User logged in"){
             localStorage.setItem("loggedInAs",response.data.user.name)
             localStorage.setItem("plan",response.data.user.plan)
             navigate("/mainpage")
         }
       } catch (error) {
        toast.error(error.response.data.message)
       }
    }
  return (
    <>
        <div className='flex justify-center items-center h-screen flex-col'>
          <div className='flex border flex-col gap-3 p-10'>
            <span className='text-3xl font-bold'>Login page(demo)</span>
            {Object.keys(data).map((item)=><TextField id={item} label={item} variant="outlined" onChange={(e)=>setData({...data,[item]:e.target.value})}/>)}
            <Button variant='contained' onClick={handleSubmit}>Login</Button>
          </div>
          <div className='text-xl '>New user....<Link to="/signup" className='text-[blue]'>signup</Link></div>
        </div>
    
    </>
  )
}
