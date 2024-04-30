import React from 'react'
import { useParams } from 'react-router-dom'

const ContactNo = () => {
    const {id}=useParams();
    console.log(id);
  return (
 <div>
    <h1>ConatctNumber</h1>
    <h1>
        NumberId: <span>{id}</span>
    </h1>
 </div>
  )
}

export default ContactNo