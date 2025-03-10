import React, { useState } from 'react'
import { FaSearch, FaUser } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [menuOpened, setmenuOpened] = useState(false);
    const [dropdownMenu,setdropdownMenu] = useState(false);
    const navigate = useNavigate()

    const toggleMenu = ()=>{
        setmenuOpened(!menuOpened)
    }
   
  return (
    <header className='mx-auto max-w-[1440px] px-6 lg:px-12 flex justify-between items-center rounded-xl py-4'>
        {/* Logo */}
        <div className='text-[24px] font-bold leading-[120%]'>
          Lease<span className='text-blue-900'>Lodge</span>
        </div>

       {/* Search Bar */}
<div className="flex items-center bg-gray-100 rounded-4xl px-4 py-2 shadow-md w-md">
  <input 
    type="text"
    placeholder="Search here..."
    className="flex-1 bg-transparent outline-none px-2 py-1 text-gray-700"
  />
  <button className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition">
    <FaSearch />
  </button>
</div>



        {/* Dropdown Menu Placeholder */}
        <div>
            <div>
                <div><FaUser/></div>
            </div>
          
        </div>
    </header>
  )
}

export default Header
