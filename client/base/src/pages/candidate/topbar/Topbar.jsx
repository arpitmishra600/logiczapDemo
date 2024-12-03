import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { useMyContext } from '../../../context/Context'
import {motion} from "framer-motion"
export default function Topbar() {
  const [dashDrop,setDashDrop]=useState(false)
  const {selectedCandidateMenu,setSelectedCandidateMenu}=useMyContext()
  return (
    <div>
      <div className="flex items-center justify-between h-16 bg-white text-white px-3 card-shadow-lite2 w-screen absolute z-[100]">

  <div className="flex items-center space-x-3">
    <img src="/logo.png" alt="Logo" className="w-[120px]" />
  </div>


  <div className="flex items-center space-x-4">

    <button className="relative">
    <img src="\dashboards\candidate\bell.svg" alt="My Task Icon" className="w-[30px]" />
  
      <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-600 text-xs text-white rounded-full">3</span>
    </button>

  
    <div className="relative flex">
    <img src="path-to-your-avatar.png" alt="Profile" className="h-8 w-8 rounded-full border-2 border-gray-500" />
      <button className="items-center space-x-2 focus:outline-none hidden max-md:flex" onClick={()=>setDashDrop(!dashDrop)} >
        <svg width="30px" className={`${dashDrop?"":"rotate-180"} transition-all duration-200`} height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 15L12 9L6 15" stroke="#000000" stroke-width="2"></path> </g></svg>
      </button>

      
     {dashDrop && <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} id="dropdownMenu" className={`hidden max-md:block absolute right-0 top-7 mt-2 bg-white rounded-md shadow-lg py-2 text-gray-800 p-3 card-shadow border space-y-2 transition-all duration-500`}>
      <div className='flex items-center justify-center text-[#18273A] gap-2  py-3 border-b'>
                <Avatar src=''/>
                <div>
                    <div className='leading-4 font-[500]'>Asril ibrahim</div>
                    <div className='leading-4 text-xs '>asril.ibrahim@rocketmail.com</div>
                </div>
            </div>
        <button  className={`flex px-2 w-full py-[4px] hover:bg-gray-100 items-center rounded cursor-pointer ${selectedCandidateMenu=="profile"?"bg-gray-100":""}`} onClick={()=>{setSelectedCandidateMenu("profile");setDashDrop(false)}}><svg className='h-[22px] w-[22px] mr-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.4399 19.05L15.9599 20.57L18.9999 17.53" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.99 21.8101C10.17 21.8101 8.36004 21.3501 6.98004 20.4301C4.56004 18.8101 4.56004 16.1701 6.98004 14.5601C9.73004 12.7201 14.24 12.7201 16.99 14.5601" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>My Profile</button>
        <button style={{cursor:"not-allowed"}} disabled className={`flex px-2 w-full py-[4px] hover:bg-gray-100 items-center rounded cursor-pointer ${selectedCandidateMenu=="messages"?"bg-gray-100":""}`} onClick={()=>{setSelectedCandidateMenu("messages");setDashDrop(false)}}><svg className='h-[22px] w-[22px] mr-1' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#292D32" d="M18.5 46v-6a6 6 0 0 0-4.243 10.243L18.5 46ZM42 52h104V40H42v12Zm118 14v60h12V66h-12Zm-14 74H62v12h84v-12ZM42 40H18.5v12H42V40Zm6 86V76.127H36V126h12ZM14.257 50.243l18.814 18.813 8.485-8.485-18.813-18.814-8.486 8.486ZM48 76.127a22 22 0 0 0-6.444-15.556l-8.485 8.485A10 10 0 0 1 36 76.127h12ZM62 140c-7.732 0-14-6.268-14-14H36c0 14.359 11.64 26 26 26v-12Zm98-14c0 7.732-6.268 14-14 14v12c14.359 0 26-11.641 26-26h-12Zm-14-74c7.732 0 14 6.268 14 14h12c0-14.36-11.641-26-26-26v12Z"></path><path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M66 84h76m-76 24h44"></path></g></svg>Messages</button>
        <button style={{cursor:"not-allowed"}} disabled className="flex px-2 w-full py-[4px] hover:bg-gray-100 items-center rounded cursor-pointer opacity-25 "><svg className='h-[22px] w-[22px] mr-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 19.2674V7.84496C19 5.64147 17.4253 3.74489 15.2391 3.31522C13.1006 2.89493 10.8994 2.89493 8.76089 3.31522C6.57467 3.74489 5 5.64147 5 7.84496V19.2674C5 20.6038 6.46752 21.4355 7.63416 20.7604L10.8211 18.9159C11.5492 18.4945 12.4508 18.4945 13.1789 18.9159L16.3658 20.7604C17.5325 21.4355 19 20.6038 19 19.2674Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Bookings</button>
        <button style={{cursor:"not-allowed"}} disabled className={`flex px-2 w-full py-[4px] hover:bg-gray-100 items-center rounded cursor-pointer ${selectedCandidateMenu=="mytasks"?"bg-gray-100":""}`} onClick={()=>{setSelectedCandidateMenu("mytasks");setDashDrop(false)}}><svg className='h-[22px] w-[22px] mr-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.9994 19.2601H10.9294C10.4794 19.2601 10.1094 18.8901 10.1094 18.4401C10.1094 17.9901 10.4794 17.6201 10.9294 17.6201H19.9994C20.4494 17.6201 20.8194 17.9901 20.8194 18.4401C20.8194 18.9001 20.4494 19.2601 19.9994 19.2601Z" fill="#292D32"></path> <path d="M19.9994 12.9701H10.9294C10.4794 12.9701 10.1094 12.6001 10.1094 12.1501C10.1094 11.7001 10.4794 11.3301 10.9294 11.3301H19.9994C20.4494 11.3301 20.8194 11.7001 20.8194 12.1501C20.8194 12.6001 20.4494 12.9701 19.9994 12.9701Z" fill="#292D32"></path> <path d="M19.9994 6.66979H10.9294C10.4794 6.66979 10.1094 6.29978 10.1094 5.84978C10.1094 5.39978 10.4794 5.02979 10.9294 5.02979H19.9994C20.4494 5.02979 20.8194 5.39978 20.8194 5.84978C20.8194 6.29978 20.4494 6.66979 19.9994 6.66979Z" fill="#292D32"></path> <path opacity="0.4" d="M4.90969 8.02992C4.68969 8.02992 4.47969 7.93992 4.32969 7.78992L3.41969 6.87992C3.09969 6.55992 3.09969 6.03992 3.41969 5.71992C3.73969 5.39992 4.25969 5.39992 4.57969 5.71992L4.90969 6.04992L7.04969 3.90992C7.36969 3.58992 7.88969 3.58992 8.20969 3.90992C8.52969 4.22992 8.52969 4.74992 8.20969 5.06992L5.48969 7.78992C5.32969 7.93992 5.12969 8.02992 4.90969 8.02992Z" fill="#292D32"></path> <path opacity="0.4" d="M4.90969 14.3302C4.69969 14.3302 4.48969 14.2502 4.32969 14.0902L3.41969 13.1802C3.09969 12.8602 3.09969 12.3402 3.41969 12.0202C3.73969 11.7002 4.25969 11.7002 4.57969 12.0202L4.90969 12.3502L7.04969 10.2102C7.36969 9.89021 7.88969 9.89021 8.20969 10.2102C8.52969 10.5302 8.52969 11.0502 8.20969 11.3702L5.48969 14.0902C5.32969 14.2502 5.11969 14.3302 4.90969 14.3302Z" fill="#292D32"></path> <path opacity="0.4" d="M4.90969 20.3302C4.69969 20.3302 4.48969 20.2502 4.32969 20.0902L3.41969 19.1802C3.09969 18.8602 3.09969 18.3402 3.41969 18.0202C3.73969 17.7002 4.25969 17.7002 4.57969 18.0202L4.90969 18.3502L7.04969 16.2102C7.36969 15.8902 7.88969 15.8902 8.20969 16.2102C8.52969 16.5302 8.52969 17.0502 8.20969 17.3702L5.48969 20.0902C5.32969 20.2502 5.11969 20.3302 4.90969 20.3302Z" fill="#292D32"></path> </g></svg>My Tasks</button>
        <button style={{cursor:"not-allowed"}} disabled className={`flex px-2 w-full py-[4px] hover:bg-gray-100 items-center rounded cursor-pointer ${selectedCandidateMenu=="todos"?"bg-gray-100":""}`} onClick={()=>{setSelectedCandidateMenu("todos");setDashDrop(false)}}><svg className="h-[22px] w-[22px] mr-1 opacity-75" viewBox="0 0 24 24" fill="none" strokeWidth="1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z" fill="#292D32"></path><path d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z" fill="#292D32"></path><path fillRule="evenodd" clipRule="evenodd" d="M8 3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V4.10002C3.71776 4.56329 2 6.58104 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 6.58104 20.2822 4.56329 18 4.10002V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V4H8V3ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10ZM4.17071 8C4.58254 6.83481 5.69378 6 7 6H17C18.3062 6 19.4175 6.83481 19.8293 8H4.17071Z" fill="#292D32" strokeWidth="1"></path></g></svg>Todos</button>

        <button style={{cursor:"not-allowed"}} disabled className="block px-2 py-[4px]  border-t text-center cursor-pointer">Logout</button>
      </motion.div>}
    </div>
  </div>
</div>
    </div>
  )
}


