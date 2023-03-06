import React from 'react'
import MenuItems from './MenuItems'
import Logo from './Logo'
import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineCompass } from 'react-icons/ai';
import Link from 'next/link';

function Header() {
  return (
    <>
    <div className='flex justify-between sm:my-7 sm:mx-10 my-5 mx-3'>
        <div className='menu flex mx-2'>
            <MenuItems title="Home" address="/" Icon={HiOutlineHome}/>
            <MenuItems title="About" address="/about" Icon={AiOutlineCompass}/>
        </div>
        <div className='logo mx-2'>
          <Link href={'/'} className='cursor-pointer'>
            <Logo/>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Header