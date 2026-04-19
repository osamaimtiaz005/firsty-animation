import React from "react"
import { FaUserLarge } from "react-icons/fa6"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { IoFootsteps, IoStarSharp } from "react-icons/io5"

const DetailBanner = () => {
  return (
    <div className="w-full p-4 border-t-2 border-b-2 border-ternary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-8 ">
        <div className="flex md:justify-center items-center  gap-2">
          <div className="bg-ternary rounded-full  py-2 px-4   flex justify-center">
            <HiOutlineGlobeAlt className="size-7 -skew-x-6  " />
          </div>
          <div className="md:text-xl text-md whitespace-nowrap">
            A <span className="font-medium">Free Global Connection</span>
          </div>
        </div>
        <div className="flex md:justify-center items-center gap-2">
          <div className="bg-ternary rounded-full  py-2 px-4   flex justify-center">
            <IoFootsteps className="size-7 -skew-x-6  " />
          </div>
          <div className="md:text-xl text-md">
            <span className="font-medium">One eSIM</span>
            <span className="font-normal"> for the globe</span>
          </div>
        </div>
        <div className="flex md:justify-center items-center gap-2">
          <div className="bg-ternary rounded-full  py-2 px-4   flex justify-center">
            <FaUserLarge className="size-7 -skew-x-6  " />
          </div>
          <div className="md:text-xl text-md whitespace-nowrap">
            <span className="font-normal">Trusted by </span>
            <span className="font-medium"> 800.000+ travelers</span>
          </div>
        </div>
        <div className="flex md:justify-center items-center gap-2">
          <div className="bg-ternary rounded-full  py-2 px-4   flex justify-center">
            <IoStarSharp className="size-7 -skew-x-6 text-green-600 " />
          </div>
          <div className="md:text-xl text-md whitespace-nowrap">
            <span className="font-medium">Trustpoilt</span>
            <span className="font-normal"> score of 4.6 out of 5!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailBanner
