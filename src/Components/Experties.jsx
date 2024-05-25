import React from "react";
import image2 from "../assets/image2.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Team from "./Team";

const Expertise = () => {
  return (
    <>
    <div className="bg-[#FFF2F3] py-24 px-4 lg:px-28 lg:py-40">
      <div className="text-center lg:text-left mb-12">
        <p className="text-[#96BB7C]">Practice Advice</p>
        <h1 className="text-4xl lg:text-5xl font-bold">Our Expert Teachers</h1>
        <p className="text-[#737373] text-sm lg:text-base pt-2">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      {/* Card container */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden  sm:w-auto max-w-xs">
          <div className="p-2">
            <div className="relative">
              <div className="absolute bg-red-600 text-white rounded-md mt-2 ml-2 py-2 px-2">
                <p>Sales</p>
              </div>
              <div className="absolute bottom-0 mb-6 left-4 flex gap-2 ">
                <CiHeart className="bg-white  rounded-full  text-2xl " />
                <CiShoppingCart className="bg-white  rounded-full  text-2xl" />
                <FaEye className="bg-white  rounded-full  text-2xl" />
              </div>
              <img src={image2} alt="" className="w-full mb-4" />
            </div>
            <p className="text-[#96BB7C]">Training Courses</p>
            <h1 className="text-2xl lg:text-xl font-bold ">
              Get Quality Education
            </h1>
            <p className="text-[#737373] text-sm lg:text-base mb-4">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <MdOutlineFileDownload className="text-[#96BB7C] mr-2" />
              <p className="text-sm lg:text-base mr-4">15 Sales</p>
            </div>
            <div>
              <span className="text-[#737373] line-through mr-2">$16.48</span>
              <span className="text-[#96BB7C] font-bold">$6.48</span>
            </div>
            <button className="mt-4 bg-[#96BB7C] text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden  w-full sm:w-auto max-w-xs">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden  w-full sm:w-auto max-w-xs">
            <div className="p-2">
              <div className="relative">
                <div className="absolute bg-red-600 text-white rounded-md mt-2 ml-2 py-2 px-2">
                  <p>Sales</p>
                </div>
                <div className="absolute bottom-0 mb-6 left-4 flex gap-2 ">
                  <CiHeart className="bg-white  rounded-full  text-2xl " />
                  <CiShoppingCart className="bg-white  rounded-full  text-2xl" />
                  <FaEye className="bg-white  rounded-full  text-2xl" />
                </div>
                <img src={image2} alt="" className="w-full mb-4" />
              </div>
              <p className="text-[#96BB7C]">Training Courses</p>
              <h1 className="text-2xl lg:text-xl font-bold ">
                Our Popular Courses
              </h1>
              <p className="text-[#737373] text-sm lg:text-base mb-4">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <MdOutlineFileDownload className="text-[#96BB7C] mr-2" />
                <p className="text-sm lg:text-base mr-4">15 Sales</p>
              </div>
              <div>
                <span className="text-[#737373] line-through mr-2">$16.48</span>
                <span className="text-[#96BB7C] font-bold">$6.48</span>
              </div>
              <button className="mt-4 bg-[#96BB7C] text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden  w-full sm:w-auto max-w-xs">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden  w-full sm:w-auto max-w-xs">
            <div className="p-2 ">
              <div className="relative">
                <div className="absolute bg-red-600 text-white rounded-md mt-2 ml-2 py-2 px-2">
                  <p>Sales</p>
                </div>
                <div className="absolute bottom-0 mb-6 left-4 flex gap-2 ">
                  <CiHeart className="bg-white  rounded-full  text-2xl " />
                  <CiShoppingCart className="bg-white  rounded-full  text-2xl" />
                  <FaEye className="bg-white  rounded-full  text-2xl" />
                </div>
                <img src={image2} alt="" className="w-full mb-4" />
              </div>
              <p className="text-[#96BB7C]">Most Popular Courses</p>
              <h1 className="text-2xl lg:text-xl font-bold ">
                Get Quality Education
              </h1>
              <p className="text-[#737373] text-sm lg:text-base mb-4">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <MdOutlineFileDownload className="text-[#96BB7C] mr-2" />
                <p className="text-sm lg:text-base mr-4">15 Sales</p>
              </div>
              <div>
                <span className="text-[#737373] line-through mr-2">$16.48</span>
                <span className="text-[#96BB7C] font-bold">$6.48</span>
              </div>
              <button className="mt-4 bg-[#96BB7C] text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Team/>
    </>
  );
};

export default Expertise;
