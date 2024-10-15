import React from 'react'
import IconCards from './IconCards'

const captions = {
    profileBuilding: "Build a professional profile that highlights your strengths and attracts top recruiters.",
    profileOptimization: "Optimize your profile to stand out and increase visibility to potential employers.",
    industryMentorship: "Receive personalized guidance from industry mentors to enhance your career trajectory.",
    upskilling: "Gain new skills and stay competitive with tailored upskilling opportunities.",
    jobPlanning: "Plan your career steps strategically with tools that align your goals and opportunities.",
    selfAssessment: "Assess your strengths and weaknesses to guide your professional growth.",
    directHiring: "Connect directly with recruiters for faster, more effective hiring.",
    valueCalculator: "Know your market value and leverage it in job negotiations and career planning."
  };
export default function Features() {
  return Object.keys(captions).map((item,index)=><IconCards header={item} content={captions[item]} index={index}/>)

 
}
