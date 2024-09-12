import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
export default function Signup() {
    const navigate= useNavigate()
    const [data,setData]=useState({name:"", email:"", password:"", country:"", state:"", city:"", pincode:"", phoneNumber:""})
    const handleSubmit=async()=>{
        try {
            const response=await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/signup`,data,{withCredentials:true})        
                localStorage.setItem("loggedInAs",response.data.user.name)
                localStorage.setItem("plan","Free")
                toast.success("Account created successfully")
                navigate("/mainpage")
          } catch (error) {
            const errors = error.response.data.errors;    
            console.log(errors);
            if (errors.email) {
              toast.error(errors.email._errors[0])
            }
            if (errors.password) {
              toast.error(errors.password._errors[0])
            }
            if (errors.phoneNumber) {
              toast.error(errors.phoneNumber._errors[0])
            }
          }
    }
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <div className='flex border flex-col gap-3 p-10'>
        <span className='text-3xl font-bold'>Signup page(demo)</span>
        {Object.keys(data).map((item)=><TextField id={item} label={item} variant="outlined" onChange={(e)=>setData({...data,[item]:e.target.value})}/>)}
        <Button variant='contained' onClick={handleSubmit}>Signup</Button>
      </div>
      <div className='text-xl '>Existing user....<Link to="/" className='text-[blue]'>login</Link></div>
    </div>
  )
}

