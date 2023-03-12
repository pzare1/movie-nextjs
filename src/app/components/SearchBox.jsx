import React from 'react'
import {BiSearch} from 'react-icons/bi'
function SearchBox() {
  return (
    <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
      <BiSearch className="text-gray-400" />
    </div>
    <input
      type="text"
      placeholder="Search..."
      className="pl-8 pr-2 py-2 border border-slate-500 rounded-md bg-transparent focus:outline-none focus:border-cyan-500 flex items-center"
    />
  </div>
  );
}

export default SearchBox