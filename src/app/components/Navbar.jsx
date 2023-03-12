import React from 'react'
import NavbarList from './NavbarList'
import SearchBox from './SearchBox'

function Navbar() {
  return (
    <div className='flex justify-between w-full max-w-6xl mx-auto rounded-md text-cyan-500 bg-nav-color light p-4 items-center'>
      <div className='flex justify-between'>
        <NavbarList title="Trending Movie" params="Trending"/>
        <NavbarList title="Top Rated" params="Top"/>
      </div>
      <div>
        <SearchBox/>
      </div>
        
    </div>
  )
}

export default Navbar