import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import toast from 'react-hot-toast';
import axios from 'axios';
import countries from '../helpers/countries';
import { Country, State, City }  from 'country-state-city';
import { useEffect } from 'react';
import MuiPhoneNumber from 'mui-phone-number';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { GoogleLogin } from '@react-oauth/google';
export default function Signup() {
    const navigate= useNavigate()
    const [data,setData]=useState({name:"", email:"", password:"", country:"", state:"", city:"", pincode:"", phoneNumber:"",otp:""})
    const [phone,setPhone]=useState()
    const [errors,setErrors]=useState({})
    const [Ccode,setCcode]=useState([])
    const [stateDrop,setStateDrop]=useState([])
    const [cityDrop,setCityDrop]=useState([])
    const [Scode,setScode]=useState([])
    const [countryCode,setCountryCode]=useState([])
    const [verify,setVerify]=useState(true)
    const [otp,setOtp]=useState()
    const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [resendIn,setResendIn]=useState(false)
  const [userType,setUserType]=useState("candidate")
    

    useEffect(()=>{
    let states=[]
     Ccode.map((item)=>states.push({label:item.name,iso:item.isoCode}))

     setStateDrop(states)
    },[Ccode])

    useEffect(()=>{
    let cities=[]
     Scode.map((item)=>cities.push({label:item.name,iso:item.isoCode}))
     setCityDrop(cities)
    },[Scode])


    const validate = (data) => {
      let newErrors = {}
      let checks=0
      if (data.name.length > 50 || data.name.length < 6) {
        newErrors.name = "Name should be between 6 to 50 characters";
        checks-=1
      }
      checks+=1

      if (data.email.length <= 0) {
        newErrors.email = "Email is a required field";
        checks-=1
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
        newErrors.email = "Enter a valid email";
        checks-=1
      }
      checks+=1
    
      if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,50}$/.test(data.password)) {
        newErrors.password = "Password should contain at least one uppercase letter, one special character, and one number, and be 6 to 50 characters long";
        checks-=1
      }
      checks+=1
    
      if (data.city === "") {
        newErrors.city = "City is a required field";
        checks-=1
      }
      checks+=1
    
      if (data.country === "") {
        newErrors.country = "Country is a required field";
        checks-=1
      }
      checks+=1
    
      if (data.state === "") {
        newErrors.state = "State is a required field";
        checks-=1
      }
      checks+=1
    
      if (data.pincode === "") {
        newErrors.pincode = "Pincode is a required field";
        checks-=1
      }
      checks+=1
    
      if (phone === "") {
        newErrors.phoneNumber = "Phone number is a required field";
        checks-=1
      } else {
        const rest = phone?.split(/ (.*)/)[1];
        
        if (rest?.replace(/[\s-]+/g, '').length < 10) {
          newErrors.phoneNumber = "Enter a valid phone number";
          checks-=1
        }else{
          setData({...data,phoneNumber:rest?.replace(/[\s-]+/g, '')})
        }
      }
      checks+=1
      setErrors(newErrors)
    

      if(checks>=8){
        return true
      }else{
        return false
      }
    };
    
    
    const handleSubmit=async()=>{
      console.log(data)
      if(validate(data)){
        try {
          const response=await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/signup`,data,{withCredentials:true})        
              localStorage.setItem("loggedInAs",response.data.user.name)
              localStorage.setItem("plan","Free")
              toast.success("Account created successfully")
              navigate("/mainpage")
        } catch (error) {
          // const err = error.response.data.errors;    
          console.log(error);
            toast.error(error.response.data.message)
          // if (err.email) {
          //   toast.error(err.email._errors[0])
          // }
          // if (err.password) {
          //   toast.error(err.password._errors[0])
          // }
          // if (err.phoneNumber) {
          //   toast.error(err.phoneNumber._errors[0])
          // }
        }
      }
     
    }

    const handleVerify=async()=>{
      try {
        setVerify(false)
        setResendIn(true)
        startTimer()
        const response=await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/sendOtp`,{email:data.email},{withCredentials:true})
        toast.success("OTP sent successfully")
        console.log(response.data.otp)
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }

    useEffect(() => {
    let timerId;
    if (isActive && seconds > 0) {
      timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
    }else if (seconds === 0) {
      setIsActive(false);
      setResendIn(false)
    }
    return () => clearTimeout(timerId);
  }, [seconds, isActive]);
  const startTimer = () => {
    setSeconds(10);  // Reset the timer to 10 seconds
    setIsActive(true);
  };

  const handleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
        
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/google/verify`,
        { token: credential }, {withCredentials: true}
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

  return (
    <div className='flex w-screen h-screen  justify-center items-center bg-[#D8DEEE] font-[inter] min-h-[600px]'>
          <div className='flex justify-center w-[90%] h-[90%] min-h-[600px]  max-sm:h-screen max-sm:w-screen card-shadow-lite bg-white' >
          <div className='flex-1 card-shadow-lite2 max-md:hidden' style={{background:"url('./signupbkg.png')",backgroundSize:'cover',backgroundRepeat:"no-repeat"}}></div>
            <div className='flex-[0.8] flex justify-center pt-5 max-md:flex-1 max-sm:items-start'>
              <div className='flex flex-col gap-1 w-[95%] text-nowrap'>
                <div className='tracking-wider mb-5'>
                  <div className='text-2xl font-bold max-sm:text-[1.3rem]'>Create account</div>
                  <div className='text-2xl font-bold poppins max-sm:text-sm'>Get started with <span className='text-[#37295A] font-[800]'>Tallentfy</span></div>
                </div>
                <div className='flex justify-center'>
                  <div className='flex border mb-5'>
                    <div className={`flex-1 flex justify-center items-center py-2 ${userType=="candidate"?"bg-[#37295A] text-white":"bg-[#E6E6E6] text-black"} px-14 transition-all duration-0.5 cursor-pointer`} onClick={(e)=>setUserType("candidate")}>Candidate</div>
                    <div className={`flex-1 flex justify-center items-center py-2 ${userType=="recruiter"?"bg-[#37295A] text-white":"bg-[#E6E6E6] text-black"} px-14 transition-all duration-0.5 cursor-pointer`} onClick={()=>setUserType("recruiter")}>Recruiter</div>
                  </div>
                </div>

               <div className='w-full flex justify-center'>
                  <GoogleLogin auto_select 
                   onSuccess={handleSuccess}
                   onError={handleError}
                    useOneTap  />
               </div>
                {/* <div className='w-[100%] flex justify-center items-center gap-3 border font-[inter] p-3  card-shadow-lite2 rounded cursor-pointer'><img src='./google.svg' className='w-[30px]'/><div className='font-500'>Google</div></div> */}
                <div className=' border my-5 relative flex items-center justify-center'><div className='font-[inter] absolute bg-[white] text-xs -top-2 px-3 '>Or with email and password</div></div>


                {userType=="candidate"?<div className='flex flex-col gap-2'>
       <div className='gap-2 flex max-sm:flex-col'>
          <TextField className='flex-1' id="name" label="name" variant="outlined" onChange={(e)=>setData({...data,name:e.target.value})} error={errors.name} helperText={errors.name} size='small'/>
          <TextField className='flex-1' id="email" label="email" variant="outlined" onChange={(e)=>setData({...data,email:e.target.value})} error={errors.email} helperText={errors.email} size='small'/>
       </div>
        {!verify && <MuiOtpInput value={data.otp} onChange={(e)=>setData({...data,otp:e})} length={6} TextFieldsProps={{ size: 'small' }}/>}
        {data.email.length>0 && <Button variant="contained" onClick={handleVerify} disabled={resendIn}>{!resendIn?"send otp":`resend(in ${seconds}s)`}</Button>}
        <div className='flex gap-2 max-sm:flex-col'>
          <TextField id="password" className='flex-1' label="password" size='small' variant="outlined" onChange={(e)=>setData({...data,password:e.target.value})} error={errors.password} helperText={errors.password}/>
          <TextField id="password" className='flex-1' label="confirm password" size='small' variant="outlined" />
        </div>
        <MuiPhoneNumber defaultCountry={'in'} variant='outlined' label='phoneNumber' onChange={(e)=>setPhone(e)} error={errors.phoneNumber} helperText={errors.phoneNumber} size='small'/>
        <div className='flex gap-2 max-sm:flex-col'>
          <Autocomplete
          size='small'
          className='flex-1'
        id="country-select-demo"

        options={countries}
        onChange={(e,v)=>{setCcode(State.getStatesOfCountry(v.code));setCountryCode(v.code);setData({...data,country:v.label})}}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
              {...optionProps}
            >
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="country"
            error={errors.country} helperText={errors.country}
            slotProps={{
              htmlInput: {
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              },
            }}
          />
        )}
      />
      <Autocomplete
      size='small'
          className='flex-1'
        disablePortal
        options={stateDrop}
            onChange={(e)=>{setScode(City.getCitiesOfState(countryCode,stateDrop.filter((item)=>item.label==e.target.innerHTML)[0].iso));setData({...data,state:e.target.innerHTML})}}
   
        renderInput={(params) => <TextField {...params} label="state" error={errors.state} helperText={errors.state}/>}
      />
        </div>
    <div className='flex gap-2'>
      <Autocomplete
      size='small'
            className='flex-1'
        disablePortal
        options={cityDrop}
        onChange={(e)=>setData({...data,city:e.target.innerHTML})}
      
        renderInput={(params) => <TextField {...params} label="city" error={errors.city} helperText={errors.city}/>}
      />
      <TextField size='small' className='flex-1' id="pincode" type='number' label="pincode" variant="outlined" onChange={(e)=>setData({...data,pincode:e.target.value})} error={errors.pincode} helperText={errors.pincode}/>
    </div>
    <div className='flex justify-between mt-2 mb-4'>
        <div className='text-sm underline'>Existing user?  <Link to="/login" className='underline'>login</Link></div>
        <div className='text-sm font-bold text-[#3523B5]' onClick={handleSubmit} >Signup</div> 
    </div>
      </div>:
      
      <div className=' flex flex-col gap-2'>
         <TextField className='flex-1' id="name" label="Username" variant="outlined" size='small'/>
         <TextField className='flex-1' id="name" label="Work Email" variant="outlined" size='small'/>
         <div className='flex gap-2 max-sm:flex-col'>
          <TextField id="password" className='flex-1' label="password" size='small' variant="outlined" onChange={(e)=>setData({...data,password:e.target.value})} error={errors.password} helperText={errors.password}/>
          <TextField id="password" className='flex-1' label="confirm password" size='small' variant="outlined" />
        </div>
         <TextField className='flex-1' id="name" label="Company Name" variant="outlined" size='small'/>
         <TextField className='flex-1' id="name" label="Designation" variant="outlined" size='small'/>
         <div className='flex justify-between mt-2 mb-4'>
        <div className='text-sm underline'>Existing user?  <Link to="/login" className='underline'>login</Link></div>
        <div className='text-sm font-bold text-[#3523B5]' onClick={handleSubmit}>Signup</div> 
    </div>
      </div>}
      
                
                
              </div>
              
            </div>
            
          </div>
        </div>
    
  )
}








