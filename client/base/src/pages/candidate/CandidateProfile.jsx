import { Avatar, Chip } from '@mui/material'
import React from 'react'



export default function CandidateProfile() {
  return (
    <div className='flex justify-center pt-10  gap-5 bg-[#F5F5F5] font-[inter] overflow-auto max-md:flex-col'>
      <div className='flex gap-3 flex-col w-[70%]' >
          <section className='bg-[white] card-shadow-lite2 relative rounded-[14px]'>
           <div className='relative items-center'>
                <img id="coverPhoto" className='border rounded-[14px]' src="https://marketplace.canva.com/EAE7AbabFNY/1/0/1600w/canva-blue-gold-elegant-minimalist-digital-marketer-linkedin-banner-yFznKtTfH0U.jpg"/>
                <Avatar className='fixed -top-[80px] -right-7 border-[3px] border-white' sx={{height:150,width:150}} src='https://media.licdn.com/dms/image/v2/D5603AQE7qE57r2VRpw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702878086850?e=1733356800&v=beta&t=XygdGuY_6iRM7hG-cZlgcFVO5upSo3to2zc08yrz3V4'/>
           </div>
           
            <div id='infoBox' className='font-[inter]  flex flex-col relative -mt-[129px] ml-[185px] tracking-wide gap-1 mb-3'>
                <div id="name" className='text-3xl font-[600] font-[inter] pb-1 flex justify-between items-center '>Arpit Mishra<button className='flex text-white bg-[#5064F7] text-sm tracking-wide rounded-lg gap-1 py-1 items-center pr-3 !font-[400] mr-3'><img src='/send.svg' className='w-[30px] rotate-[45deg]'/>Share Profile</button></div>
                <div id='about' className='text-[#686868] text-xs font-[500] pb-'>MERN stack developer @ Logiczap</div>
                <div class="text-[#686868]  text-xs font-[500]">Bhubaneswar, Odisha, India</div>
            </div>
            <div className='rounded-sm gap-2 flex-wrap flex rounded-sm flex ml-[185px] py-2 pb-5'>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>UX Dev</span>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>Designer</span>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>Freelancer</span>
                
            </div>    
          </section>

          <section id='aboutme' className='bg-[white] card-shadow-lite2 relative rounded-[14px] p-5 pb-14'>
          <div className='flex justify-between items-center w-[100%] mb-3'>
                <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide'>About Me</div></div>
                <div className='flex gap-1 items-center justify-center'><img src='/add.svg' className='w-[30px]'/><img src='/edit.svg' className='w-[30px]'/></div>
            </div>
          <div className='text-sm'>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Iure illo dolorem est quasi doloribus voluptates facere velit fuga iusto. Vero officia quasi similique sit itaque dolores sed.<br/><br/> Nemo dolorem asperiores sapiente natus minus eligendi doloremque, maxime neque iusto modi quae. Nesciunt ipsa perferendis voluptate at ducimus nostrum alias numquam ab, nemo culpa quibusdam!<br/> Corrupti optio tempora iure, reprehenderit voluptatum nihil quae magnam earum libero deserunt sapiente nesciunt unde dignissimos quaerat accusamus. Sed neque quaerat atque, esse quasi nam facilis, quidem ducimus itaque, aut dolores inventore voluptate ullam quam velit ea.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit obcaecati exercitationem error aperiam sunt nemo maxime commodi, quaerat culpa illo maiores non omnis voluptatibus, cum ducimus. Beatae, alias officia consequuntur facilis totam atque aspernatur eligendi explicabo consequatur fugit saepe.".slice(0,600)+" ..."}</div>
          <button className='bg-[#EEEEEE] text-xs py-1  tracking-wide px-3 rounded-[7px] font-[500] absolute bottom-6'>Read More...</button>
          </section>

          <div className='flex gap-3'>
            <section id='projects' className='flex-1 bg-[white] w-[700px] border flex flex-col p-5 card-shadow-lite2 rounded-[14px] max-h-[400px]'>
              <div className='flex justify-between w-[100%] mb-3'>
              <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide'>Projects</div></div>
                  <div className='flex gap-1 items-center justify-center'><img src='/add.svg' className='w-[30px]'/><img src='/edit.svg' className='w-[30px]'/></div>
              </div>
  
              <div className='overflow-hidden hover:overflow-auto  flex flex-col gap-5 projectscroll pr-3'>
                {[1,2,3,4].map((item)=><div className='flex gap-5'>
                    <img src='/blankimage.webp' id='edulogo' className='w-[70px] h-[55px]'/>
                    <div>
                        <div className='text-md font-[500] mb-2'>Digifolio - career guidance website</div>
                        <div className='text-xs text-[gray] pr-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, at ea, qui facilis accusantium exercitationem fugiat quia velit id, possimus recusandae animi aspernatur pariatur odit nostrum neque alias ullam enim.</div>
                        
                    </div>
                </div>)}
              </div>
            </section>
  
            <section id='skills' className=' flex-[0.7] bg-[white] w-[700px] border flex flex-col p-5 card-shadow-lite2 rounded-[14px] max-h-[400px] '>
              <div className='flex justify-between w-[100%] mb-3'>
              <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide'>Skils</div></div>
                  <div className='flex gap-1 items-center justify-center'><img src='/add.svg' className='w-[30px]'/><img src='/edit.svg' className='w-[30px]'/></div>
              </div>

              <div className='overflow-hidden hover:overflow-auto  flex flex-col gap-5 projectscroll pr-3'>
              {[1,2,3,5,5,67,7,8].map((item)=><div className='border-b'>HTML</div>)}
              </div>
            </section>
          </div>

          <section id='experience' className='bg-[white] rounded-[12px] border flex flex-col p-5 card-shadow-lite2'>
            <div className='flex justify-between w-[100%] mb-5'>
            <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide'>Experience</div></div>
                <div className='flex gap-1 items-center justify-center'><img src='/add.svg' className='w-[30px]'/><img src='/edit.svg' className='w-[30px]'/></div>
            </div>

            <div className='flex gap-5'>
                <img src='/office.svg' id='edulogo' className='w-[60px]'/>
                <div>
                    <div className='text-sm font-[500] tracking-wider'>GANDHI INSTITUTE FOR TECHNOLOGY[GIFT] , BHUBANESWAR</div>
                    <div className='text-sm font-[300]'>Bachelor of Technology - BTech, Computer Science</div>
                    <div className='text-sm font-[400] text-[gray]'>2021 - 2025</div>
                </div>
            </div>
          </section>

          <section id='education' className='bg-[white] border flex flex-col p-5 card-shadow-lite2 rounded-[14px]'>
            <div className='flex justify-between w-[100%] mb-5'>
            <div className='flex justify-between'><div className='font-[600] text-xl tracking-wide'>Education</div></div>
                <div className='flex gap-1 items-center justify-center'><img src='/add.svg' className='w-[30px]'/><img src='/edit.svg' className='w-[30px]'/></div>
            </div>

            <div className='flex gap-5'>
                <img src='/graduate.svg' id='edulogo' className='w-[60px]'/>
                <div>
                    <div className='text-sm font-[500] tracking-wider'>GANDHI INSTITUTE FOR TECHNOLOGY[GIFT] , BHUBANESWAR</div>
                    <div className='text-sm font-[300]'>Bachelor of Technology - BTech, Computer Science</div>
                    <div className='text-sm font-[400] text-[gray]'>2021 - 2025</div>
                </div>
            </div>
          </section>

          

         

         

      </div>
      <div id='sider' className="w-[300px] flex flex-col gap-2 ">
        <section className='bg-white p-5 card-shadow-lite2 rounded-[12px] '>
            
                <div className='flex justify-between mb-2'><div className='flex justify-between'><div className='font-[600] text-xl'>Languages Known</div></div><img src='/edit.svg' className='w-[30px]'/></div>
                <div className='flex gap-1 border-b pb-5 mb-3'>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>Hindi</span>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>English</span>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>Odia</span>
                </div> 
           
            <div>
            <div className='flex justify-between mb-2'><div className='flex justify-between'><div className='font-[600] text-xl'>Preffered Locations</div></div><img src='/edit.svg' className='w-[30px]'/></div>
                <div className='flex gap-1  mb-3'>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>Delhi</span>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>Odisha</span>
                <span className='bg-[#EEEEEE] text-xs py-1 px-2 rounded-[7px] font-[500]'>West Bengal</span>
                </div> 
            </div>
           
        </section>

        <section className='bg-white p-3 card-shadow-lite2 rounded-[12px] p-5'> 
        <div className='flex justify-between'><div className='font-[600] text-xl pb-2'>Connect</div></div>
            <div className='flex gap-3 pb-1'><img src='/portfolio.svg'className='w-[25px]'/><span className='text-sm font-[500]'>portfolio.com</span></div>
            <div className='flex gap-3 pb-1 '><img src='/github.svg'className='w-[25px]'/><span className='text-sm font-[500]'>github.com</span></div>
            <div className='flex gap-3  '><img src='/mail.svg'className='w-[25px]'/><span className='text-sm font-[500]'>mail@test.com</span></div>

        </section>

        <section className='bg-white p-3 card-shadow-lite2 rounded-[12px] p-5'>
          <div className='flex justify-between mb-4'><div className='font-[600] text-xl '>Top Recruiters</div></div>
          {[1,2,3,4,5,6].map((item)=><div className='flex gap-3 mb-3'><Avatar/><div><div className='text-md font-[500]'>Company Name</div> <div className='text-xs font-[500] text-[gray]'>software</div></div></div>)}
        </section>
      
      </div>
    </div>
  )
}
