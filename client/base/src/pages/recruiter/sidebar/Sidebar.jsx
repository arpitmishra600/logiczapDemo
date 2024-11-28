import React, { Suspense, useState } from 'react';
import { useMyContext } from '../../../context/Context';
import {motion} from "framer-motion"
import Topbar from '../topbar/Topbar';
import Profile from '../profile/Profile';
import Content from '../content/Content';


export default function Sidebar() {
  const [showText, setShowText] = useState(false);
  const {selectedRecruiterMenu,setSelectedRecruiterMenu}=useMyContext()

  const toggleText = () => {
    setShowText(!showText);
  };

  return (

      <div className='flex font-[inter] h-full gap-10'>
        <div className="flex rounded-xl max-md:hidden">
          <aside className={`rounded-[32px] bg-[white] relative transition-all duration-500 ${showText ? 'w-[230px]' : 'w-20'} space-y-4 px-2 flex flex-col`}>
            <img src='/logo.png' className='p-3'/>
            <button id='' onClick={toggleText} className="absolute -right-5 top-4 p-1 rounded-full bg-[#3C21F7] rotate-90 flex items-center justify-center  z-[100]">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 15L12 9L6 15" stroke="#000000" stroke-width="2"></path> </g></svg>
            </button>

            <div onClick={()=>setSelectedRecruiterMenu("profile")} className={`flex items-center px-4 py-2 ${selectedRecruiterMenu=="profile"?"text-[#004AAD] font-[500]":"text-[#A6ABBF]"}   hover:bg-gray-100 rounded`}>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="profile"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z" stroke={selectedRecruiterMenu!="profile"?'#A6ABBF':'none'} stroke-width={selectedRecruiterMenu!="profile"?'2':'none'}  fill={selectedRecruiterMenu!="profile"?'none':'#004AAD'}></path> <path id="rec (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z" stroke={selectedRecruiterMenu!="profile"?'#A6ABBF':'none'} stroke-width={selectedRecruiterMenu!="profile"?'2':'none'}  fill={selectedRecruiterMenu!="profile"?'none':'#004AAD'}></path> </g> </g> </g></svg>
              {showText && <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.4}} className="ml-3">Profile</motion.span>}
            </div>
            <a href="#messages" onClick={()=>setSelectedRecruiterMenu("messages")} className={`flex items-center px-4 py-2 ${selectedRecruiterMenu=="messages"?"text-[#004AAD] font-[500]":"text-[#A6ABBF]"}   hover:bg-gray-100 rounded`}>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2ZM14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25ZM17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z" stroke={selectedRecruiterMenu!="messages"?"#A6ABBF":"none"} stroke-width={selectedRecruiterMenu!="messages"?"2":"none"} fill={selectedRecruiterMenu=="messages"?"#004AAD":"none"}></path></g></svg>
  
              {showText && <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.4}} className="ml-3">Messages</motion.span>}
            </a>
            <a href="#candidates" onClick={()=>setSelectedRecruiterMenu("candidates")} className={`flex items-center px-4 py-2 ${selectedRecruiterMenu=="candidates"?"text-[#004AAD] font-[500]":"text-[#A6ABBF]"}   hover:bg-gray-100 rounded`}>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke={selectedRecruiterMenu!="candidates"?"#A6ABBF":"#004AAD"} stroke-width="2" fill={selectedRecruiterMenu=="candidates"?"#004AAD":"none"} stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              {showText && <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.4}} className="ml-3">Candidates</motion.span>}
            </a>
            <a href="#mytasks" onClick={()=>setSelectedRecruiterMenu("mytasks")} className={`flex items-center px-4 py-2 ${selectedRecruiterMenu=="mytasks"?"text-[#004AAD] font-[500]":"text-[#A6ABBF]"}   hover:bg-gray-100 rounded`}>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z" stroke={selectedRecruiterMenu!="mytasks"?"#A6ABBF":"none"} stroke-width={selectedRecruiterMenu!="mytasks"?"2":"none"} fill={selectedRecruiterMenu=="mytasks"?"#004AAD":"none"}></path></g></svg>
  
              {showText && <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.4}} className="ml-3">My Task</motion.span>}
            </a>
            <a href="#todos" onClick={()=>setSelectedRecruiterMenu("todos")} className={` flex items-center px-4 py-2 ${selectedRecruiterMenu=="todos"?"text-[#004AAD] font-[500]":"text-[#A6ABBF]"}   hover:bg-gray-100 rounded`}>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z" stroke={selectedRecruiterMenu!="todos"?"#A6ABBF":"none"} stroke-width={selectedRecruiterMenu!="todos"?"2":"none"} fill={selectedRecruiterMenu=="todos"?"#004AAD":"none"}></path></g></svg>
  
              {showText && <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.4}} className="ml-3">Todos</motion.span>}
            </a>
  
  
            <a href="#logout" className={`flex absolute bottom-5 items-center px-4 py-2 text-[#A6ABBF]  hover:bg-gray-100 rounded`}>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="#A6ABBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 12H3.62" stroke="#A6ABBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#A6ABBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  
              {showText && <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.4}} className="ml-3">Logout</motion.span>}
            </a>
          </aside>
        </div>
        <div className='flex-1 relative rounded-lg'>
          <Topbar/>
          <Content/>
        </div>
      </div>

  );
}

