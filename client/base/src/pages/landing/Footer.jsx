import React from 'react'
import FootForm from './FootForm'
import FooterCard from './FooterCard'
import Social from './Social'

const data=[
    ["Our Company",{"About us":"","Updates":"","Press":"","Enterprise":"","Work For Us":""}],
    ["Career Guides",{"How to make a resume":"","How to write a cover letter":"","How to get hired":"","Negotiating salaries":"","Following up a job offer":""}],
    ["Career Advice",{"Resumes & CVs":"","Cover letters":"","Interviewing":"","Finding a Job":"","Career Development":""}],
    ["Support",{"FAQ":"","Contact Us":"","Terms of Service":"","Privacy Policy":"","Cookie Policy":""}],
]
export default function Footer() {
  return (
    <div className='bg-[white]'>
        <div className='flex relative relative -bottom-10 '>
          <div className='flex flex-col justify-center w-screen h-[70vh] items-center bg-[#ECF0F6] rounded-[32px] ' style={{background:"linear-gradient(to bottom, rgba(0,0,0,0) 30%, #ECF0F6 70%)"}}>
          <FootForm/>
        <p class="text-center text-[20px] font-semibold leading-[26px] -tracking-[0.8px] text-[#272727] md:text-[40px] md:font-medium md:leading-[50px] px-10">Connect with us</p>
        <p class="text-center text-[20px] leading-[26px] -tracking-[0.8px] text-[#272727] md:text-[30px]  md:leading-[50px] px-10">"Stay Updated about the latest job alerts, subscribe to our newsletter."</p>
        {/* <div className='w-[55%]'><img src='./arrow.png' className='rotate-[180deg] scale-x-[-1] h-[200px]'/></div> */}
          </div>
        </div>
        <footer className='flex justify-between p-10 pt-[70px] pb-0 bg-[#020617]'>
            <div className='flex items-end'><img src="./logo.webp" className='w-[120px] h-[50px]' alt="" srcset="" /></div>
            <div className='w-[70%] flex justify-between border-b border-[#303848] pb-5'>
                {data.map((item)=><FooterCard head={item[0]} det={item[1]}/>)}
            </div>
      </footer>
      <div className='bg-[#020617] flex justify-between px-10 items-center'>
      <span className='text-[rgba(159,166,187,0.4)]'>© 2024 Logiczap All Rights Reserved</span>
        <Social/>
        </div>
    </div>
  )
}
