import React from 'react'
import NavbarList from './NavbarList'

function Navbar() {
  return (
    <div className='flex justify-center w-full text-cyan-500 bg-slate-800 light p-4'>
        <NavbarList title="Trending Movie" params="Trending"/>
        <NavbarList title="Top Rated" params="Top"/>
    </div>
  )
}

export default Navbar