"use client"

import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

function NavbarList({title, params}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre')
  return (
        <div className='flex cursor-pointer'>
            <Link className={`ml-5 hover:text-orange-600 font-bold 
            ${
                genre && genre === params && "underline underline-offset-8 decoration-3 decoration-cyan-500"
            }`} 
            href={`/?genre=${params}`}>
                {title}
            </Link>
        </div>
  )
}

export default NavbarList