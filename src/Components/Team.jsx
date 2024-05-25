import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import user from "../assets/user-cover-1.png";
import Newsletter from "./Newsletter";

const Team = () => {
  return (
   <>
    <div className="py-24 px-4 lg:px-28 lg:py-40 ">
      <div className="text-center lg:text-left mb-12">
        <p className="text-[#96BB7C]">Team</p>
        <h1 className="text-4xl lg:text-5xl font-bold">Our Popular Courses</h1>
        <p className="text-[#737373] text-sm lg:text-base pt-2">
          Problems trying to resolve the conflict between the two major realms{" "}
          <br className="hidden lg:block" />
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="lg:flex  lg:justify-center gap-8 ">
        <div className="bg-white rounded-lg shadow-lg  flex flex-col items-center mb-4 ">
          <img src={user} alt="Julian Jameson" className=" mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">Julian Jameson</h2>
            <p className="text-[#96BB7C] mb-4">Profession</p>
            <div className="flex justify-center gap-4 mb-4">
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Repeat the above div for additional team members */}
        <div className="bg-white rounded-lg shadow-lg  flex flex-col items-center mb-4">
          <img src={user} alt="Julian Jameson"  />
          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">Julian Jameson</h2>
            <p className="text-[#96BB7C] mb-4">Profession</p>
            <div className="flex justify-center gap-4 ">
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg  flex flex-col items-center mb-4 ">
          <img src={user} alt="Julian Jameson"  />
          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">Julian Jameson</h2>
            <p className="text-[#96BB7C] mb-4">Profession</p>
            <div className="flex justify-center gap-4 ">
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg  flex flex-col items-center mb-4 ">
          <img src={user} alt="Julian Jameson"  />
          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">Julian Jameson</h2>
            <p className="text-[#96BB7C] mb-4">Profession</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#96BB7C] hover:text-opacity-80 transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Newsletter/>
   </>
  );
};

export default Team;
