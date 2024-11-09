import React from 'react'
import Scheduler from "@mormat/react-scheduler";
import '@mormat/react-scheduler/dist/react_scheduler.css'
export default function Schedule() {
  const currentDate = "2024-10-08";
  const events = [
    { "label": "interview",  "start": "2024-10-08 10:00", "bgColor": "#0288d1" },
    { "label": "conference", "start": "2024-10-09 14:00", "end": "2024-10-09 18:00", "bgColor": "#9575cd" },
    { "label": "meeting", "start": "2024-10-11 09:00", "end": "2024-10-11 18:00", "bgColor": "#0fc4a7" },
    { "label": "training course", "start": "2024-10-08 09:00", "end": "2024-10-11 18:00", "bgColor": "#856404" },
]
  return (
    <div className='w-full h-full bg-[#F9FAFB] !font-[inter] p-5 overflow-auto '>
    
          <Scheduler 
              
              currentDate = { currentDate } 
              events = { events } 
          />

    
    </div>
  )
}
