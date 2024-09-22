import React from 'react'
import Marquee from "react-fast-marquee";
import CommentCards from './CommentCards';
import {jobSeekerReviews,recruiterReviews,mentorshipAndTalentSearchReviews} from '../../helpers/landingReviews.js'

const data={undefined:mentorshipAndTalentSearchReviews,"left":jobSeekerReviews,"right":recruiterReviews}
export default function Slider() {
  return (

<div className='fog-shadow bg-white'>
{Object.keys(data).map((item)=><Marquee pauseOnHover direction={item}>
        {Object.keys(data[item]).map((item2)=><CommentCards name={item2} review={data[item][item2]}/>)}
    </Marquee>)}
</div>
  )
}
