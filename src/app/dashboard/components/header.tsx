import React from 'react'
import HeaderMenu from './header-menu'
import Profile from './profile'

export default function Header() {
  return (
    <div className='flex flex-row xs:flex-col justify-between p-3'>
        {/* Logo */}
        <div className='text-white font-bold text-center  py-2 '>
          Flix.id
        </div>

        {/* Header Menu */}
        <div className='flex justify-center items-center  xs:w-full'>
          <HeaderMenu />
        </div>

        {/* Profile and Notification */}
        <div className=' text-white  py-2 flex justify-center  '>
          <Profile/>
        </div>
    </div>
  )
}
