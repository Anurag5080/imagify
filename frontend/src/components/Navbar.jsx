import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>
           <Link to='/'><img src={assets.logo} alt='' className='' /></Link> 
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar