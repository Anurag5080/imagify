import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { user, setShowLogin, logout, credit } = useContext(AppContext)

    const navigate = useNavigate();


    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className='flex items-center justify-between py-4'>
            <div>
                <Link to='/'><img src={assets.logo} alt='' className='w-28 sm:w-32 lg:w-40' /></Link>
            </div>
            <div>
                {
                user
                    ?
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button onClick={()=>navigate('/buy')} className='flex items-center bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full gap-2 hover:scale-105 transition-all duration-500'>
                            <img className='w-5 cursor-pointer' src={assets.credit_star} alt=''/>
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit} </p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi! {user.name}</p>
                        <div className='relative group cursor-pointer'>
                            <img className='w-10 drop-shadow' src={assets.profile_icon} alt=''/>
                            <div className='absolute hidden group-hover:block top-0 right-0 pt-12 z-10 text-black rounded'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                    <li onClick={handleLogout} className='py-1 px-2 cursor-pointer pr-10'>
                                        Logout
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
                        <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar