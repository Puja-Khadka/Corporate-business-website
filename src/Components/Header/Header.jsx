import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
function Header() {
  return (
    <>
      <header className="bg-black py-2 text-white">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-20 gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 text-center sm:text-left">
            <span className="flex items-center gap-1">
              <IoLocationSharp className="text-blue-500" size={20} />
              <h3 className="font-bold text-gray-500 text-sm sm:text-base">
                Tinkune, Kathmandu
              </h3>
            </span>
            <span className="flex items-center gap-1">
              <MdEmail className="text-blue-500" size={20} />
              <h3 className="font-bold text-gray-500 text-sm sm:text-base">
                Info@email.com
              </h3>
            </span>
          </div>

          <div className="flex-1 overflow-hidden relative mx-0 sm:mx-4 h-6 w-full sm:w-auto">
            <p className="absolute whitespace-nowrap animate-slide-right text-green-600 font-semibold px-4">
              Note: We help you to grow your business
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
              <FaFacebookF className="text-blue-500" />
            </span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
              <FaTwitter className="text-blue-500" />
            </span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
              <RiInstagramFill className="text-blue-500" />
            </span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
              <FaLinkedinIn className="text-blue-500" />
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
