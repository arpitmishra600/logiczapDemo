import zIndex from '@mui/material/styles/zIndex'
import React from 'react'

export default function FootForm() {
  return (

      <form class="form left-20 -bottom-[100px] absolute">
  <ul class="wrapper">
    
    <li style={{zIndex:'4'}}><input class="input" type="text" placeholder="Name" required=""/></li>
    <li style={{zIndex:'3'}}><input class="input" placeholder="Phone number" required="" name="phone"/></li>
    <li style={{zIndex:'2'}}><input class="input" type="email" placeholder="E-mail" required="" name="email"/></li>
    <button className='footsubmit' style={{zIndex:'1'}}>Subscribe</button>
  </ul>
</form>

  )
}
