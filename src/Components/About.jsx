import React, {useNavigator} from 'react'
import {useNavigate } from 'react-router-dom'


const About = () => {
    const navi=useNavigate();
   
     
    const handelcick = ()=>{
        navi('/Contact')
    }
  return (
    <div>
        About
        <button onClick={handelcick}>click</button>

        </div>
  )
}

export default About