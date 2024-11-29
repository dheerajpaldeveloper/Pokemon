import React from 'react'
import HeaderMenu from './header-menu'

export default function header() {
  return (
    <div className='flex flex-row justify-between p-3'>
        <div className='text-white font-bold'>Flix.id</div>
        <div className='w-1/4'><HeaderMenu /></div>
        <div> profile and notification</div>
    </div>
  )
}
