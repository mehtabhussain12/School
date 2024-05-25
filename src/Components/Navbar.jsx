import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import Hero from './Hero';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (

    <>
     <nav className="lg:flex md:flex sm:hidden hidden justify-between items-center p-6 mx-16">
        <div className="text-2xl font-bold">Brandname</div>
        <ul className="flex gap-x-8 font-semibold text-[#737373] text-lg">
          <li>
            <a href="#" className="hover:text-[#96BB7C]">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#96BB7C]">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#96BB7C]">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#96BB7C]">
              Contact
            </a>
          </li>
        </ul>
        <div className="gap-x-6 flex">
          <button className="text-[#96BB7C] text-lg font-semibold">
            Login
          </button>

          <button className="bg-[#96BB7C] text-white px-8 py-2 rounded">
            JOIN US
          </button>
        </div>
      </nav>

      {/* mobile view */}
      <nav className='flex justify-between items-center lg:hidden md:hidden sm:flex px-6 pt-2 pb-2  border-b-2 '>
      <div className='flex items-center bg-inherit'>
        {isOpen ? (
          <MdClose className='text-2xl mr-4 cursor-pointer' onClick={toggleMenu} />
        ) : (
          <MdMenu className='text-2xl mr-4 cursor-pointer' onClick={toggleMenu} />
        )}
         <div className="text-2xl font-bold">Brandname</div>
      </div>
      <div className={`md:hidden fixed top-0  left-0  w-full mt-20  rounded-md flex justify-center items-center z-50 bg-opacity-100   bg-white text-black ${isOpen ? 'block' : 'hidden'}`}>
      <ul className="flex flex-col gap-y-4 font-semibold text-[#737373] text-lg">
          <li>
            <a href="#" className="hover:text-[#96BB7C]">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#96BB7C]">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#96BB7C]">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#96BB7C]">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="gap-x-6 flex">
          <button className="text-[#96BB7C] text-lg font-semibold">
            Login
          </button>
        </div>
    </nav>
    <Hero/>
    </>
  );
};

export default Navbar;
