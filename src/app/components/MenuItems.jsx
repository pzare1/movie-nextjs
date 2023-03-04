import Link from 'next/link'
import React from 'react'

function MenuItems({title,address,Icon}) {
  return (
        <div>
            <Link href={address} className='lg:mx-6 hover:text-amber-600'>
                <Icon className="text-3xl font-bold text-cyan-500 mx-4 sm:hidden"/>
                <p className='hidden sm:inline my-2 font-bold text-cyan-500 '>{title}</p>
            </Link>
        </div>
  )
}

export default MenuItems