import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import BlackButton from './BlackButton'
import Chips from './Chips'
import { TypeAnimation } from 'react-type-animation';
import FadeText from './FadeText';
import {motion, useInView} from 'framer-motion'
import NumberCard from './NumberCard';
import Timeline from './Timeline';
import Display from './Display';
import IconCards from './IconCards';
import AskCard from './AskCard';
import FAQ from './FAQ';
import Footer from './Footer';
import GetStartedButton from './GetStartedButton';
import verified from "../../assets/verified.svg"
import suitcase from "../../assets/suitcase.svg"
import company from "../../assets/company.svg"
import mentor from "../../assets/mentor.svg"
import Slider from './Slider';
import Templates from './Templates';
import Carausel from './Carausel';

const data={
  "For Job Seekers":["Job search with personalized recommendations.","Integrated profile for showcasing skills","Quick and simple online application process","Track applications and interview status.","Customizable resume templates for easy creation."],
  "For Recruiters":["Post jobs and review applications easily","Automated candidate shortlisting and filtering","Manage interviews and feedback efficiently","Collaborate with teams on hiring decisions","Integration with popular applicant tracking systems"],
  "For Mentors":["Help shape others professional paths","Connect with emerging talent and professionals","Enhance your leadership and teaching skills","Share industry insights and experiences"," Build your reputation as a career expert"]
}
export default function Landing() {


  return (
    <div>
      <Nav/>

      <section>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed z-[-1] opacity-50 w-screen"
        src='https://static.vecteezy.com/system/resources/previews/044/179/493/mp4/clean-and-clear-black-professional-loop-able-background-with-black-color-grid-moving-slowly-free-video.mp4'
      >
    
        Your browser does not support the video tag.
      </video>
      <div class="flex flex-col items-start px-1 pb-9 pt-[64px] md:items-center md:gap-3 md:pb-10 md:pt-[84px] md:text-center h-[90vh]">
        <div class="flex flex-col md:flex-row ">
          <p class=" text-[36px] font-semibold leading-[44px] -tracking-[0.72px] text-[#272727] md:text-[60px] md:font-medium md:leading-[72px] md:-tracking-[3px] font-[inter]">Your All-In-One&nbsp;</p>
          <p class=" text-[36px] font-semibold leading-[44px] -tracking-[0.72px] text-[#272727]  md:text-[60px] md:font-medium  md:leading-[72px] md:-tracking-[3px]"> Platform for</p></div>
          <div class="flex flex-col gap-6 md:gap-5 mb-3">
            {/* <h1 class="fontins text-[40px] leading-[48px]   -tracking-[0.8px] text-[#007AFF] md:text-[68px] md:leading-[72px] md:-tracking-[1.36px]">Long Term Mentorship</h1> */}
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Finding Jobs',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hiring Talent',
        1000,
        'Building Teams',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{display: 'inline-block',fontFamily:"" }}
      className='fontins text-[40px] leading-[48px]   -tracking-[0.8px] text-[#007AFF] md:text-[68px] md:leading-[72px] md:-tracking-[1.36px]'
      repeat={Infinity}
    />
            <p class=" hidden text-[16px] leading-[26px] text-[#5C5C5C] md:flex md:text-[18px] md:leading-6 md:-tracking-[0.2px] font-[400] ">Empowering Job Seekers and Employers with Cutting-Edge Recruitment Solutions</p>
            <p class="text-[16px] leading-[26px] text-[#5C5C5C] md:hidden font-[400]">Empowering Job Seekers and Employers with Cutting-Edge Recruitment Solutions</p>
          </div>
          <GetStartedButton/>
        {/* <div className='flex gap-3'>
          <BlackButton title="Book a Free Trial" changes="!bg-[white] !text-[black] font-[400] px-5 py-3"/>
          <BlackButton title={"Find your mentor"} arrow={true}/>
        </div> */}
        <div class="hidden items-center gap-6 pt-[28px] md:flex"><div class="flex items-center gap-2 "><img src={verified} className='h-[20px]'/><p class="text-[14px]  leading-[24px]">Free to use</p></div><div class="flex items-center gap-2"><img src={verified} className='h-[20px]'/><p class="text-[14px]  leading-[24px]">Resume Builder</p></div><div class="flex items-center gap-2"><img src={verified} className='h-[20px]'/><p class="text-[14px]  leading-[24px]">Verified Mentors</p></div></div>
      </div>
      </section>

    <section style={{background:"linear-gradient(to bottom, rgba(0,0,0,0) 30%, #EDF7FE 70%)"}} className='w-[99vw] flex justify-center items-center flex-col  relative '> 
     <div className='flex max-w-[1200px] min-w-[800px] w-[90%] bg-[white] relative border z-[1000] rounded-[32px] card-shadow'> 
        {Object.keys(data).map((item)=><div className={`font-[inter] flex-1  h-[100%] ${item=="For Job Seekers"?"":"border-l"} pb-10`}>
          <div className='flex justify-between p-5 px-8 text-2xl flex items-center font-semibold'>{item} { 
             item=="For Job Seekers"? <img src={suitcase} className='h-[20px]'/> : 
             item=="For Recruiters" ? <img src={company} className='h-[20px]'/> : 
             item=="For Mentors" ? <img src={mentor} className='h-[20px]'/> : 
             ""}</div>
          {data[item].map((item)=><Chips label={item}/>)}
          <div className='px-5 pb-10'><BlackButton title={`Signup as ${item.slice(3,item.length - 1)}`} arrow={true} changes="w-[28%] !absolute !bottom-5"/></div>
        </div>
      )}
     </div>
     <div className='w-[99vw] relative bg-[#020617] -top-[220px] pt-[220px] flex justify-center rounded-[32px] flex-col pb-20'>
      <FadeText/>
      <div className='w-full flex justify-center items-center gap-10'>
      <NumberCard head="30%" sub="Cheaper"/>
      <NumberCard head="4x" sub="Results"/>
      <NumberCard head="50%" sub="Faster"/>
      </div>
      </div>
    </section>

    <section className='bg-[#EDF7FE] relative -top-[137px] pb-10 rounded-[36px]'>
    <div class=" flex flex-col gap-2 pb-8 md:gap-2 md:pb-[50px]"><p class="text-center text-[20px] font-semibold leading-[26px] -tracking-[0.8px] text-[#272727] md:text-[36px] md:font-medium md:leading-[50px]">Get Started in 3 Easy Steps</p><p class="text-center text-[12px] leading-[18px] text-[#5C5C5C] md:text-[16px] md:leading-[24px] md:-tracking-[0.176px] ">Follow these three simple steps to get started with Long Term Mentorship</p></div>
    <Timeline/>
    </section>

    <section className='flex items-center flex-col gap-10 mb-20'>
    <div class="flex w-full flex-col items-center px-1 "><p class="text-center text-[20px] font-semibold leading-[24px] -tracking-[0.8px] text-[#272727] md:text-[36px] md:font-medium md:leading-[44px] md:-tracking-[1.44px]">No need to Struggle Alone Anymore</p><p class="mt-2 text-center text-[12px] leading-[16px]  text-[#5C5C5C] md:text-[16px] md:leading-[24px] md:-tracking-[0.176px]">Long term mentorship gets fully covered</p></div>
      <div className='w-full flex flex-wrap items-center justify-center w-[75%]'>
        {[1,2,3,4,5,6].map((item)=><IconCards/>)}
      </div>
    </section>

    <section className='bg-[#F3F0FB] rounded-[32px] py-10 flex items-center'>
      <Display/>
    </section>

  <Templates/>
  {/* <Carausel/> */}

    <section className='flex flex-col justif-center items-center bg-[#F0F9F5] rounded-[32px] p-10'>
      <div class="flex flex-col gap-2 border-b border-[#EBEBEB] pb-[20px] md:border-none md:pb-[46px]"><p class="text-center text-[20px] font-semibold leading-[24px] -tracking-[0.8px] text-[#272727] md:text-[36px] md:font-medium md:leading-[50px] md:-tracking-[1.44px]">Ask Mentor Anything</p><p class="text-center text-[12px] leading-4 text-[#5C5C5C]  md:text-[16px] md:leading-6 md:-tracking-[0.176px]">Get answers from our mentors in the forum. They're here to help with your questions about your career.</p></div>
        <div className='flex gap-1 p-10 flex-col border w-[70%] bg-white rounded-[20px] card-shadow'>
          <p class="pb-4 text-[12px] font-semibold leading-4 md:pb-6 md:text-[20px] ">Ask your questions here</p>
          <div className='flex gap-3'>
            <p class=" hidden w-full rounded-[8px]  border p-4 text-[14px] leading-6 text-[#98A2B3] md:block ">Our mentors are here to help. Directly submit your questions or doubts to them...</p>
            <BlackButton arrow={true} title="Ask a question"/>
          </div>
          <div className='flex flex-col gap-5 mt-5'>
          {[1,2,3].map((item)=><AskCard/>)}
          </div>
          
        </div>  
      </section>

      <section className='relative fog-shadow'>
        <div class="flex flex-col gap-2 border-b border-[#E4D4FF] pb-[20px] md:border-none md:pb-[60px] "><p class="text-center text-[20px] font-semibold leading-[24px] -tracking-[0.8px] text-[#272727] md:text-[36px] md:font-medium md:leading-[50px] md:-tracking-[1.44px]">Success Reviews & Testimonials</p><p class="text-center text-[12px] leading-4 text-[#5C5C5C]  md:text-[16px] md:leading-6 md:-tracking-[0.176px]">Get inspired by the real-life experiences of our mentee and their journey to success with Preplaced.</p></div>
        <Slider/>
      </section>

      <section className='flex flex-col justify-center items-center bg-[#272727] rounded-[32px] p-10' >
      <div class="flex flex-col gap-1 pb-10 "><h2 class="text-center text-[18px] font-normal text-white sm:text-[40px] sm:font-normal sm:leading-[60px]">Frequently Asked Questions</h2><p class="text-center text-[10px] text-[#8F8F8F] sm:text-lg sm:leading-[28px]">Find answers to commonly asked questions about Long Term Mentorship</p></div>
      <FAQ/>
      </section>

      <Footer/>
    </div>
  )
}

const svgs={
  tick:<svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF"></path></svg>,
  arrowButton:<svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#arrow-circle_svg__a)"><rect x="3" y="2" width="40" height="40" rx="20" fill="#fff"></rect><path d="M16.333 22h13.333m0 0-5-5m5 5-5 5" stroke="#101828" stroke-width="1.66" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><filter id="arrow-circle_svg__a" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4144_913"></feMorphology><feOffset></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.921569 0 0 0 0 0.921569 0 0 0 0 0.921569 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4144_913"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.560784 0 0 0 0 0.560784 0 0 0 0 0.560784 0 0 0 0.2 0"></feColorMatrix><feBlend in2="effect1_dropShadow_4144_913" result="effect2_dropShadow_4144_913"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow_4144_913" result="shape"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="-2.4"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix values="0 0 0 0 0.243137 0 0 0 0 0.243137 0 0 0 0 0.243137 0 0 0 0.04 0"></feColorMatrix><feBlend in2="shape" result="effect3_innerShadow_4144_913"></feBlend></filter></defs></svg>,
  
}
