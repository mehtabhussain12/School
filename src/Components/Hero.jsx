import React from 'react';
import { FaGraduationCap, FaBook, FaLaptop } from 'react-icons/fa';
import hero from '../assets/Placeholder.png';
import Stats from './Stats';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-12 bg-[#FAFAFA]">
        <div className="max-w-md lg:mr-12">
          <button className="text-[#96BB7C] text-lg font-semibold py-4">
            JOIN US
          </button>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">25K+ STUDENTS TRUST US</h1>
          <p className="text-lg mb-6">Every day brings with it a fresh set of learning possibilities.</p>
          <div className="relative lg:w-1/2 lg:hidden sm:block md:hidden">
          <img src={hero} alt="Student" className="w-full" />
        </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4">
            <button className="bg-[#96BB7C] hover:bg-white hover:text-[#96BB7C] hover:border hover:border-[#96BB7C] text-white px-6 py-3 rounded mb-4 lg:mb-0">Get Quote Now</button>
            <button className="border border-[#96BB7C] text-[#96BB7C] px-6 py-3 rounded hover:bg-[#96BB7C] hover:text-white hover:border-none">Learn More</button>
          </div>
        </div>
        <div className="relative lg:w-1/2 hidden sm:hidden lg:block md:block">
          <img src={hero} alt="Student" className="w-full" />
        </div>
      </section>
      
      {/* Cards Section */}
      <section className="lg:flex lg:flex-row sm:flex sm:flex-col justify-center gap-8 px-4 lg:px-24 py-12 ">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center mb-2">
          <div className="text-red-500 mb-4">
            <FaGraduationCap className="text-4xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Expert instruction</h2>
          <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center mb-2">
          <div className="text-red-500 mb-4">
            <FaBook className="text-4xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Training Courses</h2>
          <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <div className="text-red-500 mb-4">
            <FaLaptop className="text-4xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Expert instruction</h2>
          <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
      </section>
      <Stats/>
    </>
  );
};

export default Hero;
