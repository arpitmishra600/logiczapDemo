import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function Timeline() {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work font-[inter]"
    contentStyle={{ background: '#007aff', color: '#fff' }} // #375DFB
    contentArrowStyle={{ borderRight: '7px solid  #007aff' }}
    date={"Book a FREE Trial Session"}
    dateClassName='text-[black]'
    iconStyle={{ background: '#007aff', color: '#fff' }}
    icon={<h2 className='font-[inter] text-2xl flex items-center justify-center h-full'>1</h2>}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work font-[inter]"
    date="Find Your Ideal Mentor"
    iconStyle={{ background: '#007aff', color: '#fff' }}
    icon={<h2 className='font-[inter] text-2xl flex items-center justify-center h-full'>2</h2>}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work font-[inter]"
    contentStyle={{ background: '#007aff', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #007aff' }}
    date="Start 1:1 Long Term Mentorship"
    dateClassName='text-[black]'
    iconStyle={{ background: '#007aff', color: '#fff' }}
    icon={<h2 className='font-[inter] text-2xl flex items-center justify-center h-full'>3</h2>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
  )
}
