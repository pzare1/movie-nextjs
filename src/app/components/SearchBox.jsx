"use client"
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from "next/navigation";

function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form className="relative flex justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-4 pr-2 py-2 placeholder-gray-600 border border-gray-600 rounded-tr-none rounded-br-none rounded-md bg-transparent focus:outline-none focus:border-cyan-500 flex items-center"
      />
      <button disabled={!search} className='bg-cyan-500 p-2 rounded-tr-md rounded-br-md'><BiSearch className="text-white" /></button>
    </form>
  );
}

export default SearchBox;
