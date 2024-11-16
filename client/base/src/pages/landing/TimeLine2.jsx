import React, { useEffect, useState } from 'react'
import Progress from './Progress'
import { Box, LinearProgress } from '@mui/material'

const data={
  signup:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure eum aspernatur exercitationem a tempore corrupti eos amet soluta mollitia architecto animi ea esse fuga fugit, sunt libero culpa enim  possimus consequatur recusandae vel? Aperiam at rerum ad quam Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, odit! lorem20",
  build:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure eum aspernatur exercitationem a tempore corrupti eos amet soluta mollitia architecto animi ea esse fuga fugit, sunt libero culpa enim perspiciatis possimus consequatur recusandaeet consectetur adipisicing elit. Natus, odit! lorem20",
  download:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure eum aspernatur exercitationem a tempore corrupti eos amet soluta mollitia architecto animi ea esse fuga fugit, sunt libero culpa enim perspiciatis possimus consequatur recusandae vel? Aperiam at rerum ad quam Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  downloa:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure eum aspernatur exercitationem a tempore corrupti eos amet soluta mollitia architecto animi ea esse fuga fugit, sunt libero culpa enim perspiciatis possimus consequatur recusandae vel? Aperiam at rerum ad quam Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
}
export default function TimeLine2() {
  const [selectedCard,setSelectedCard]=useState("signup")
  const [selectedIndex,setSelectedIndex]=useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 8500);


    return () => clearInterval(interval);
  }, [selectedCard]);

  useEffect(()=>{
    setSelectedCard(Object.keys(data)[selectedIndex])
  },[selectedIndex])


  
  return (
    <div className='w-[100%] flex items-center justify-center font-[inter] tracking-wide'>
        <div className='w-[85%]'>
        <div id="" className='flex gap-3 font-bold'>
          {Object.keys(data).map((item,index)=><div className={`flex-1 flex gap-2 flex-col bg-white border-x border-t ${item==selectedCard?"bg-white":"opacity-50"} p-4 rounded-t text-xl` }onClick={()=>{setSelectedCard(item);setSelectedIndex(index)}}>{`${index+1}. ${item}`}{item==selectedCard?<Progress/>:<LinearProgress variant="determinate" sx={{height:2}}  />}</div>)}
        </div>
        <div className='bg-white pb-5 flex justify-between border-x border-b px-10'>
          <div id="info" className='flex-1 p-10'>
            <div className='font-bold text-[#020617] text-xl mb-2'>Lorem, ipsum dolor.</div>
            <div className=''>{data[selectedCard]}</div>
          </div>
          <div id="image" className='flex-1 flex items-center max-w-[450px] pr-5' >
          {selectedCard=="signup" ? (
        <img className='w-[100%] flex-1' src='./stepimg1.svg' alt='Step 1' />
      ) : selectedCard=="build" ? (
        <img className='w-[100%] flex-1' src='./stepimg2.svg' alt='Step 2' />
      ) : selectedCard=="download" ? (
        <img className='w-[100%] flex-1' src='./stepimg3.svg' alt='Step 3' />
      ) : (
        <p>No image to display</p>
      )}
          </div>
        </div>
        </div>
      
    </div>
  )
}


