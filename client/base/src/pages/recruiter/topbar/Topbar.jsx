import { Avatar } from '@mui/material'
import React from 'react'

export default function Topbar() {
  return (
    <div className='flex h-20 w-full items-center p-2 gap-5'>
      <span className='text-3xl font-bold flex-1' >Dashboard</span> 

      <div className='relative flex justify-center flex-[3]'>
            <input className='w-full outline-none bg-[white] p-2 pl-10  rounded-xl' placeholder='search' />
<svg className='absolute left-3 top-[10px]' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9.76659" cy="9.7666" r="8.98856" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0183 16.4851L19.5423 20" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>

        <div className='flex flex-1 gap-5'>
            <div className='bg-[#E2DEFF] flex items-center p-1 rounded-[32px] gap-1 px-3 text-[#3C21F7] font-bold text-sm '>ID
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z" fill="#3C21F7"/>
</svg>
            </div>
            <div className='flex items-center justify-center text-[#18273A] gap-1'>
                <Avatar src=''/>
                <div>
                    <div className='leading-4 font-[500]'>Asril ibrahim</div>
                    <div className='leading-4 text-xs '>asril.ibrahim@rocketmail.com</div>
                </div>
            </div>
        </div>
    </div>
  )
}