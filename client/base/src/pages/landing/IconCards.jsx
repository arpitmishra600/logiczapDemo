import React from 'react'

export default function IconCards({header,content}) {
  console.log(`/feature/${header}.svg`)
  return (
    <div className='flex flex-col border p-5  bg-white w-[300px] h-[180px] hover:bg-[#007bff0c] transition-all duration-300 cursor-pointer ease-in'>
      <img src={`/feature/${header}.svg`} className='w-[30px]'/>
      <p class="-md:tracking-[0.176px] text-[16px] font-semibold leading-[24px] text-[#272727] md:text-[16px] mt-3 ">{header.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</p>
      <p class="mt-2 hidden text-sm leading-[20px] -tracking-[0.08px] text-[#5C5C5C] md:block max-w-[250px]">{content}</p>
    </div>
  )
}

const svgs={
    cam:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path d="M22.76 8.931c0-.605 0-.908-.12-1.049a.5.5 0 0 0-.42-.173c-.183.014-.397.228-.826.657L17.76 12l3.634 3.634c.429.429.643.643.827.657a.5.5 0 0 0 .419-.173c.12-.14.12-.444.12-1.05V8.932ZM2.76 9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.31-1.311C5.04 5 5.88 5 7.56 5h5.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.31 1.311c.328.642.328 1.482.328 3.162v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.48 19 14.64 19 12.96 19h-5.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2.76 16.72 2.76 15.88 2.76 14.2V9.8Z" stroke="#F65428" stroke-width="1.66" stroke-linecap="round" stroke-linejoin="round"></path></svg>
}