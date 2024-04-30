import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full flex justify-center gap-5 p-3'>
        <NavLink to="/">Home</NavLink>
        <NavLink  to="/About">About</NavLink>
        <NavLink className={(e)=>(e.isActive ? "bg-red-200" : '')} to="/Contact">Contact</NavLink>
        

    </nav>
  )
}

export default Nav