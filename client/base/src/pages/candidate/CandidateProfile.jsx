import { Avatar, Chip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useMyContext } from '../../context/Context'
import AboutEdit from '../../modals/candidate/dashboard/AboutEdit'
import ProjectsEdit from '../../modals/candidate/dashboard/ProjectsEdit'
import SkillEdit from '../../modals/candidate/dashboard/SkillsEdit'

import ExperienceEdit from '../../modals/candidate/dashboard/ExperienceEdit'
import EducationEdit from '../../modals/candidate/dashboard/EducationEdit'
import AdditionalEdit from '../../modals/candidate/dashboard/AdditionalEdit'
import { useParams } from 'react-router-dom'
import BasicEdit from '../../modals/candidate/dashboard/BasicEdit'
import axios from 'axios'



export default function CandidateProfile({type}) {
  function convertToMonYear(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', '');
}



  const [data,setData]=useState({})
  useEffect(()=>{
    const fetchUserData = async () => {
      try {
    
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/getFullUser`,
          {
           withCredentials:true
          }
        );
    
        const user = response.data.user; // Extract user from response
        console.log(user)
        setData(user)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
   
    fetchUserData()
  },[])
  const {editAbout,setEditAbout,editProjects,setEditProjects,editSkills,setEditSkills,editExperience,setEditExperience,editEducation,setEditEducation,editAdditional,setEditAdditional}=useMyContext()
  const {pid}=useParams()
  const [editOpen,setEditOpen]=useState(false) 
  return (
    <div className='flex scroll-custom justify-center max-md:justify-start max-md:items-center pt-10  gap-5 bg-[#F5F5F5] font-[inter] overflow-auto max-md:flex-col'>
      <div className='flex gap-3 flex-col w-[70%] max-md:w-[80%] max-sm:w-[90%]' >
          <section className='bg-[white] card-shadow-lite2 relative rounded-[14px]'>
           <div className='relative items-center'>
            {pid}
                <img id="coverPhoto" className='border rounded-[14px] ' src="https://marketplace.canva.com/EAE7AbabFNY/1/0/1600w/canva-blue-gold-elegant-minimalist-digital-marketer-linkedin-banner-yFznKtTfH0U.jpg"/>
                <Avatar className='fixed -top-[80px] -right-7 max-sm:left-3 max-sm:-top-[40px] max-md:-top-[60px] border-[3px] border-white !h-[150px] !w-[150px] max-sm:!h-[80px] max-sm:!w-[80px] max-md:!h-[100px] max-md:!w-[100px]'  src='https://media.licdn.com/dms/image/v2/D5603AQE7qE57r2VRpw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702878086850?e=1733356800&v=beta&t=XygdGuY_6iRM7hG-cZlgcFVO5upSo3to2zc08yrz3V4'/>
           </div> 
           
            <div id='infoBox' className='font-[inter] max-md:ml-[130px] flex flex-col relative max-md:-mt-[90px] max-sm:ml-[90px] max-sm:-mt-[70px] max-md:gap-0 -mt-[129px] ml-[185px] tracking-wide gap-1 mb-3'>
                <div id="name" className='text-3xl font-[600] font-[inter] pb-1 flex justify-between items-center max-md:text-xl '>{data?.name?.split(",")[0].toUpperCase()+data?.name?.split(",")[1].toUpperCase()}
                 {type=="public"? <div className='flex items-center gap-2 max-sm:gap-1'>
                    {svgs.download}
                    <button className='flex text-white bg-[#5064F7] text-sm tracking-wide rounded-lg gap-1 py-1 items-center pr-3 !font-[400] mr-3 max-md:pr-[6px]'><img src='/send.svg' className='w-[30px] max-md:w-[20px] rotate-[45deg]'/><div className='max-md:hidden'>Share Profile</div></button>
                 </div>: <div onClick={()=>setEditOpen(true)} className='flex gap-1 items-center justify-center cursor-pointer mr-4'><img src='/edit.svg' className='w-[30px]'/></div>}
                  </div>
                <div id='about' className='text-[#686868] text-xs font-[500]'>MERN stack developer @ Logiczap</div>
                {data.city && <div class="text-[#686868]  text-xs font-[500]">{data.city}, {data.state}, {data.country}</div>}
            <div className='flex'>
              
               <div className='rounded-sm gap-2 flex-wrap  flex py-2 pb-3 border-b'>
                  {data?.profile?.domain.map((item)=><span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>UX Dev</span>) }
               </div>
                
            </div>    
           
             <div className='flex max-sm:text-xs text-sm '><div className='flex gap-1 py-2 pr-3 flex-wrap'><div className='text-[#686868] font-bold'>Salary Range :</div><div className='text-[#00644D] font-bold'> $1000 - $1000</div></div></div>
            </div>
          </section>

          <section id='aboutme' className='bg-[white] card-shadow-lite2 relative rounded-[14px] p-5 pb-14'>
          <div className='flex justify-between items-center w-[100%] mb-3'>
              <div className='font-[600] text-xl tracking-wide max-md:text-lg'>About Me</div>
                {type=="private" && <div onClick={()=>setEditAbout(!editAbout)} className='flex gap-1 items-center justify-center cursor-pointer '><img src='/edit.svg' className='w-[30px]'/></div>}
            </div>
          <div className='text-sm max-md:text-xs'>{data?.profile?.about}</div>
          <button className='bg-[#EEEEEE] text-xs py-1  tracking-wide px-3 rounded-[7px] font-[500] absolute bottom-6'>Read More...</button>
          </section>

          <div className='flex gap-3 flex-wrap max-md:flex-col'>
            <section id='projects' className='flex-1 bg-[white] border flex flex-col p-5 card-shadow-lite2 rounded-[14px] max-h-[400px] '>
              <div className='flex justify-between w-[100%] mb-3'>
              <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide max-md:text-lg'>Projects</div></div>
                  {type=="private" && <div onClick={()=>setEditProjects(!editProjects)} className='flex gap-1 items-center justify-center cursor-pointer'><img src='/edit.svg' className='w-[30px]'/></div>}
              </div>
  
              <div className='overflow-auto  flex flex-col gap-5 scroll-custom pr-3'>
                {data?.profile?.projects.map((item)=><div className='flex gap-5'>
                    <img src={item.image} id='edulogo' className='w-[70px] h-[55px]'/>
                    <div>
                        <div className='text-md font-[500] mb-2 max-md:text-sm'>{item.name}</div>
                        <div className='text-xs text-[gray] pr-2'>{item.description}</div>
                        
                    </div>
                </div>)}
              </div>
            </section>
  
            <section id='skills' className=' flex-1 bg-[white] border flex flex-col p-5 card-shadow-lite2 rounded-[14px] max-h-[400px] '>
              <div className='flex justify-between w-[100%] mb-3'>
              <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide max-md:text-lg'>Skils</div></div>
                  {type=="private" && <div onClick={()=>setEditSkills(!editSkills)} className='flex gap-1 items-center justify-center'><img src='/edit.svg' className='w-[30px]'/></div>}
              </div>

              <div className='overflow-auto pr-3 scroll-custom'>
              <div>
     {data?.profile?.skills.map(item=><div className='flex justify-between items-center border-b py-3'>
        <div className=''>{item}</div>
        <div className='bg-[#66ff00a6] px-4 py-1 rounded flex items-center gap-2'>Basic <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7.01001V7.00002M12 17L12 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
     </div>)}
    </div>
              </div>
            </section>
          </div>

          <section id='experience' className='bg-[white] rounded-[12px] border flex flex-col p-5 card-shadow-lite2'>
            <div className='flex justify-between w-[100%] mb-5'>
            <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide max-md:text-lg'>Experience</div></div>
                {type=="private" && <div onClick={()=>setEditExperience(!editExperience)} className='flex gap-1 items-center justify-center'><img src='/edit.svg' className='w-[30px]'/></div>}
            </div>

            {data?.profile?.workExperience.map((item)=><div className='flex gap-5'>
                <img src='/office.svg' id='edulogo' className='w-[60px]'/>
                <div className='max-md:text-xs text-sm'>
                    <div className='font-[500] tracking-wider '>{item.companyName}</div>
                    <div className='font-[300]'>{item.position}</div>
                    <div className='font-[400] text-[gray]'>{convertToMonYear(item.startDate)} - {convertToMonYear(item.endDate)}</div>
                </div>
            </div>)}
          </section>

          <section id='education' className='bg-[white] border flex flex-col p-5 card-shadow-lite2 rounded-[14px] '>
            <div className='flex justify-between w-[100%] mb-5'>
            <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide max-md:text-lg'>Education</div></div>
                {type=="private" && <div onClick={()=>setEditEducation(!editEducation)} className='flex gap-1 items-center justify-center'><img src='/edit.svg' className='w-[30px]'/></div>}
            </div>

          {data?.profile?.education.map((item)=><div className='flex gap-5'>
              <img src='/graduate.svg' id='edulogo' className='w-[60px]'/>
              <div className='text-sm max-md:text-xs'>
                  <div className='font-[500] tracking-wider'>{item.instituteName}</div>
                  <div className='font-[300]'>{item.fieldOfStudy}</div>
                  <div className='font-[400] text-[gray]'>{convertToMonYear(item.startDate)} - {convertToMonYear(item.endDate)}</div>
              </div>
          </div>)}
          </section>

          

         

         

      </div>
      <div id='sider' className="max-md:w-[80%] max-sm:w-[90%] flex flex-col gap-2 text-nowrap">
        <section className='bg-white p-5 card-shadow-lite2 rounded-[12px]'>
            
                <div className='flex justify-between mb-2 gap-2 items-center'><div className='flex justify-between'><div className='font-[600] text-xl max-md:text-lg'>Languages Known</div></div>{type=="private" && <img onClick={()=>setEditAdditional(!editAdditional)}  src='/edit.svg' className='w-[30px]'/>}</div>
                <div className='flex gap-1 border-b pb-5 mb-3'>
                  {data?.profile?.locations.map((item)=><span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>{item}</span>)}
                </div> 
           
            <div>
            <div className='flex justify-between mb-2 gap-2 items-center'><div className='flex justify-between'><div className='font-[600] text-xl max-md:text-lg'>Preffered Locations</div></div>{type=="private" && <img onClick={()=>setEditAdditional(!editAdditional)} src='/edit.svg' className='w-[30px]'/>}</div>
                <div className='flex gap-1  mb-3'>
                {data?.profile?.languages.map((item)=><span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>{item}</span>)}
                </div> 
            </div>
           
        </section>

        <section className='bg-white p-3 card-shadow-lite2 rounded-[12px] p-5'> 
        <div className='flex justify-between mb-2 gap-2 items-center'><div className='flex justify-between'><div className='font-[600] text-xl max-md:text-lg'>Connect</div></div>{type=="private" && <img onClick={()=>setEditAdditional(!editAdditional)} src='/edit.svg' className='w-[30px]'/>}</div>
            <div className='flex gap-3 pb-1 '><img src='/portfolio.svg'className='w-[25px] '/><span className='text-sm font-[500]'>portfolio.com</span></div>
            <div className='flex gap-3 pb-1 '><img src='/github.svg'className='w-[25px]'/><span className='text-sm font-[500]'>github.com</span></div>
            <div className='flex gap-3  '><img src='/mail.svg'className='w-[25px]'/><span className='text-sm font-[500]'>mail@test.com</span></div>

        </section>

        {type=="public" && <section className='bg-white p-3 card-shadow-lite2 rounded-[12px] p-5'>
          <div className='flex justify-between mb-4'><div className='font-[600] text-xl '>Top Recruiters</div></div>
          {[1,2,3,4,5,6].map((item)=><div className='flex gap-3 mb-3'><Avatar/><div><div className='text-md font-[500]'>Company Name</div> <div className='text-xs font-[500] text-[gray]'>software</div></div></div>)}
        </section>}
      <AboutEdit/>
      <ProjectsEdit/>
      <SkillEdit/>
      <ExperienceEdit/>
      <EducationEdit/>
      <AdditionalEdit/>
      <BasicEdit open={editOpen} onClose={setEditOpen}/>
      </div>
    </div>
  )
}

const svgs={
  download:<svg className='w-[45px] max-md:w-[30px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7L12 14M12 14L15 11M12 14L9 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 17H12H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
}