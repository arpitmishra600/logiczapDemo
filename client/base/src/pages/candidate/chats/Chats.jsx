import React from 'react'
import ChatList from './ChatList'
import ChatArea from './ChatArea'

export default function Chats() {
  return (
    <div className='w-screen h-screen bg-[white] border-l flex '>
      <ChatList/>
      <ChatArea/>
    </div>
  )
}
