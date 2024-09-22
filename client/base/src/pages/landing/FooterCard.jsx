import React from 'react'

export default function FooterCard({head,det}) {
  return (
    <div className='flex flex-col gap-1'>
    <h3 class="text-lg text-white font-[500]">{head}</h3>
    {Object.keys(det).map((item)=><a className='text-[rgba(159,166,187,0.7)]'>{item}</a>)}
    </div>
  )
}
