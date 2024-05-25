import React from 'react';
import Footer from './Footer';

const Newsletter = () => {
  return (

<>
<div className=" py-16 px-4 lg:px-28">
      <div className="text-center mb-8">
        <p className='text-[#96BB7C] mb-4 font-bold'>Newsletter</p>
        <h2 className="text-3xl lg:text-4xl font-bold  mb-4">Watch our Courses</h2>
        <p className="text-[#737373] text-sm lg:text-base">
        Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics 
        </p>
      </div>
      <form className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full lg:w-auto lg:pr-[300px] pl-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#96BB7C]"
          required
        />
        <button
          type="submit"
          className="bg-[#96BB7C] text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
    <Footer/>
</>
  );
};

export default Newsletter;
