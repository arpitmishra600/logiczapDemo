import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GoogleLogin } from '@react-oauth/google';
export default function Login() {
    const [data,setData]=useState({email:"",password:""})
    const navigate=useNavigate()

    const handleSuccess = async (credentialResponse) => {
      try {
        const { credential } = credentialResponse;
          
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/google/verify`,
          { token: credential }, {withCredentials:true}
        );
  
        if (response.data.success) {
          console.log('Login successful:', response.data);
          if (response.data.user.isFormFilled){
            navigate('/candidate/dashboard');
          }else{
            navigate('/candidate/form');
          }
          
        } else {
          console.error('Login failed:', response.data.message);
        }
      } catch (error) {
        console.error('Error verifying Google token:', error);
      }
    };
  
    const handleError = () => {
      console.error('Google Login Failed');
    };
    
    const handleSubmit=async()=>{
       try {
         const response=await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/login`,data,{withCredentials:true})
         console.log(response)
         if (response.status==200 && response.data.message==="User logged in"){
             toast.success("Logged in successfully")
             navigate("/candidate/form")
         }
       } catch (error) {
        toast.error(error.response.data.message)
       }
    }
  return (
    <>
        <div className='flex w-screen h-screen  justify-center items-center bg-[#D8DEEE] font-[inter] min-h-[600px]'>
          <div className='flex justify-center w-[90%] h-[90%]  card-shadow-lite bg-white' >
            <div className='flex-[0.6] flex justify-center items-center max-md:flex-1'>
              <div className='flex flex-col gap-1 p-10 w-[80%] max-sm:w-[90%] text-nowrap'>
                <div className='tracking-wider mb-5 mr-10'>
                  <div className='text-2xl font-bold poppins max-sm:text-sm'>Welcome to <span className='text-[#3523B5] font-[800]'>Digifolio</span></div>
                  <div className='text-2xl font-bold max-sm:text-[1.3rem]'>Sign into your account</div>
                </div>

                <div className='w-full flex justify-center'>
                  <GoogleLogin auto_select 
                   onSuccess={handleSuccess}
                   onError={handleError}
                    useOneTap  />
               </div>
                <div className=' border my-5 relative flex items-center justify-center'><div className='font-[inter] absolute bg-[white] text-xs -top-2 px-3 '>Or with email and password</div></div>
                {Object.keys(data).map((item)=><TextField className='mt-3' id={item} label={item} variant="outlined" onChange={(e)=>setData({...data,[item]:e.target.value})} size='small'/>)}
                
                <div className='flex justify-between mt-2 mb-4'>
                  <div className='text-sm font-bold text-[#3523B5]'>Forget password?</div>
                  <div onClick={handleSubmit} className='text-sm font-bold text-[#3523B5]'>Login</div> 
                </div>
                <div className='text-sm underline'>Don't have an account?  <Link to="/signup" className='underline'>signup</Link></div>
              </div>
              
            </div>
            <div className='flex-1  card-shadow-lite2 max-md:hidden' style={{background:"url('./signin.jpg')",backgroundSize:'cover'}}></div>
          </div>
        </div>
    
    </>
  )
}

