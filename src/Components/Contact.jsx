import React from 'react';
import { Link } from 'react-router-dom'



const Contact = () => {


  return (
    <div>
         <h1 className='text-2xl'>ConatctNo</h1>
    <ul className='m-3 list-none'>
        <li className='list-item'>
            <Link to='/contact/8271941838'>number 1</Link>
        </li>
        <li className='list-item'>
            <Link to='/contact/9430126108'>number 2</Link>
        </li>
        <li className='list-item'>
            <Link to='/contact/8252538797'>number 3</Link>
        </li>
    </ul>
    <hr />
     
    </div>
  )
}

export default Contact