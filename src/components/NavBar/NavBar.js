import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

export default function NavBar() {

    return (
        <div className='navCont'>
            <div className='navLeft'></div>
            <div className='navLinks'>
               <Link to='/'><a className='links'>Home</a></Link>
               <Link to='/about'><a className='links'>About Us</a></Link>
               <Link to='/donate'><a className='links'>Donate</a></Link>
               <Link to='/join'><a className='links'>Join the Choir!</a></Link>
               <Link to='/upcoming'><a className='links'>Upcoming Events</a></Link>
               <Link to='/contact'><a className='links'>Contact Us</a></Link>
            </div>
            <div className='navRight'></div>
        </div>
    )
}