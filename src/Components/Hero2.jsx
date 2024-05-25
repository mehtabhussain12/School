import React from "react";
import image1 from '../assets/iamge1.png'
import Experties from "./Experties";
const Hero2 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-12 px-4 lg:px-24 py-12 mt-8 lg:mt-32 mb-28">
      <div className="pb-6 lg:pr-6 lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold">Every Client Matters</h1>
        <p className="mt-4 lg:mt-6">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <button className="mt-4 text-[#96BB7C]">Learn More</button>
      </div>
      <div className="lg:w-1/2">
        <img src={image1} alt="" className="w-full lg:w-auto" />
      </div>
    </div>
<Experties/>
    </>
  );
};

export default Hero2;
