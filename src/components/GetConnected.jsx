import React from "react"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"

const GetConnected = () => {
  return (
    <div className="bg-ternary rounded-2xl p-6 flex flex-col items-center justify-center w-full h-full mx-8 gap-8">
      <div className="space-y-2 flex flex-col items-center md:justify-start justify-center">
        <h1 className="text-secondary md:text-7xl text-4xl   font-extrabold uppercase">
          Where's Life Taking You next?
        </h1>
        <h1 className="text-secondary text-2xl font-medium">
          Get connected to the Firsty Network
        </h1>
      </div>

      <div className="bg-white   rounded-full flex items-center px-4 border-1 border-gray-200 hover:border-secondary ">
        <input
          className="outline-none md:min-w-[450px] py-4  px-6 placeholder:text-xl placeholder:font-medium placeholder:text-gray-400"
          placeholder="Search Country"
        />{" "}
        <BiSearch className="size-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-8 gap-4 items-center justify-between md:p-18 p-8">
        <Link
          to="/"
          className="bg-transparent hover:bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-1 py-5 gap-3 "
        >
          <div className="w-15 h-15">
            <img src="images/us.svg" />
          </div>
          <div className="text-xs text-sm">United Sates</div>
        </Link>
        <Link
          to="/"
          className="bg-transparent hover:bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-1 py-5 gap-3 "
        >
          <div className="w-15 h-15">
            <img src="images/gb.svg" />
          </div>
          <div className="text-xs text-sm whitespace-nowrap">
            United Kingdom
          </div>
        </Link>
        <Link
          to="/"
          className="bg-transparent hover:bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-1 py-5 gap-3 "
        >
          <div className="w-15 h-15">
            <img src="images/fr.svg" />
          </div>
          <div className="text-xs text-sm">France</div>
        </Link>
        <Link
          to="/"
          className="bg-transparent hover:bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-1 py-5 gap-3 "
        >
          <div className="w-15 h-15">
            <img src="images/mx.svg" />
          </div>
          <div className="text-xs text-sm">Mexico</div>
        </Link>
        <Link
          to="/"
          className="bg-transparent hover:bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-1 py-5 gap-3 "
        >
          <div className="w-15 h-15">
            <img src="images/us.svg" />
          </div>
          <div className="text-xs text-sm">United Sates</div>
        </Link>
        <Link
          to="/"
          className="bg-transparent hover:bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-1 py-5 gap-3 "
        >
          <div className="w-15 h-15">
            <img src="images/gb.svg" />
          </div>
          <div className="text-xs text-sm whitespace-nowrap">
            United Kingdom
          </div>
        </Link>
        <Link
          to="/"
          className="bg-transparent hover:bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-1 py-5 gap-3 "
        >
          <div className="w-15 h-15">
            <img src="images/fr.svg" />
          </div>
          <div className="text-xs text-sm">France</div>
        </Link>
        <Link
          to="/"
          className="bg-transparent hover:bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-1 py-5 gap-3 "
        >
          <div className="w-15 h-15">
            <img src="images/mx.svg" />
          </div>
          <div className="text-xs text-sm">Mexico</div>
        </Link>
      </div>
    </div>
  )
}

export default GetConnected
