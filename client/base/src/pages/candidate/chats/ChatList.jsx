import { Avatar } from '@mui/material'
import React from 'react'
import { useMyContext } from '../../../context/Context'

export default function ChatList() {
  const {setOpenChat,openChat}=useMyContext()
  return (
    <div className='flex-[0.3] border-r p-5 max-w-[400px] max-sm:max-w-[100%] max-sm:flex-1'>
    
          <div className='flex mb-3 justify-between flex-wrap gap-5'>
              <button class="relative">
          <span className='text-2xl font-bold'>Messages</span>
              <span class="absolute -top-1 -right-5 inline-flex items-center justify-center text-xs rounded-full bg-red-600 h-[18px] w-[26px] text-white">10+</span>
            </button>
            <div className='flex flex-1 bg-[#F7F7FD] p-2 text-xs gap-2 text-nowrap rounded max-w-[200px]'>
            <span className='flex-1 font-[500] bg-white p-1 rounded card-shadow text-center'>All chats</span>
            <span className='flex-1 font-[500] p-1 rounded text-center'>Unread</span>
           
          </div>
          </div>

          <div className='relative flex justify-center mb-3'>
            <input className='w-full outline-none bg-[#F7F7FD] p-2 pl-10' placeholder='search' />
            <svg className='absolute left-3 top-[10px]' width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.625 17.5C12.56 17.5 15.75 13.9556 15.75 9.58332C15.75 5.21107 12.56 1.66666 8.625 1.66666C4.68997 1.66666 1.5 5.21107 1.5 9.58332C1.5 13.9556 4.68997 17.5 8.625 17.5Z" stroke="#000929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M16.5 18.3333L15 16.6667" stroke="#000929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>

          
 <div className='overflow-auto flex flex-col gap-2 h-[80%]'>
    
   {[1,2,3,4,5].map((item)=>
   <div className="relative flex justify-between px-4 py-2 rounded-lg after:content-[''] after:absolute after:border-b after:-bottom-1 after:w-[90%]" onClick={()=>{if(openChat!="both") setOpenChat("chatarea")}}>
      <div className='flex gap-2'>
        <Avatar src=''/>
        <div>
          <div className='text-sm mb-1'>Jhon doe</div>
          <div className='text-xs text-[#76767C] text-nowrap'>Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    <span className='text-xs text-[#76767C] text-nowrap'>3m ago</span>
   </div>
   )}
   </div>
    </div>
  )
}
