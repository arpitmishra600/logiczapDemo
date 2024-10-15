import { Avatar } from '@mui/material'
import React from 'react'

export default function AskCard() {
  return (
    <div className='flex flex-col  rounded-[20px] border p-5 relative font-[inter]'>
        <div className='flex items-center gap-1 justify-between py-3'>
        <p class=" mb-1 font line-clamp-2 text-xl font-medium leading-6 -tracking-[0.176px] md:font-semibold ">How do I become a cloud engineer?</p>
        <p className='text-[gray] text-xs flex items-center '><div className=''><Avatar sx={{height:20,width:20}}/></div>&nbsp;| asked by Anonymous</p>
        </div>
       
        <div className='flex overflow-auto gap-3 hidebar '>
          <div className='text-xs flex gap-5'>
            {["#E7F6D5","#EEE3F3","#FDF0CE","#E7F6D5"].map((item)=>

            <div style={{background:`${item}`}} className={`rounded-xl min-w-[330px] p-5`}>
              <p className='text-[gray] text-xs flex items-center text-nowrap pb-2'><Avatar sx={{height:20,width:20}}/>&nbsp;| answered by Anonymous</p> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et sequi repudiandae sed explicabo nostrum voluptates voluptas, doloribus, pariatur soluta nesciunt perferendis alias consequuntur facere aperiam voluptatem inventore fuga aliquam.</p>
            </div>

            )}
            
          </div>
        </div>
      
    </div>
  )
}
