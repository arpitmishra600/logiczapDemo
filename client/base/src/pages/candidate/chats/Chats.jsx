import React, { useEffect } from 'react'
import ChatList from './ChatList'
import ChatArea from './ChatArea'
import { useWindowSize } from 'react-use';
import { useMyContext } from '../../../context/Context';

export default function Chats() {
  const { width, height } = useWindowSize();
  const {setOpenChat,openChat}=useMyContext()
  useEffect(() => {
    if (width>690){setOpenChat("both")}
    else{setOpenChat("chatlist")}
  }, [width,height])
  
  return (
    <div className='w-screen h-full bg-[white] border-l flex '>
     {(openChat=="chatlist" || openChat=="both") && <ChatList/>}
      {(openChat=="chatarea" || openChat=="both") && <ChatArea/>}
    </div>
  )
}
