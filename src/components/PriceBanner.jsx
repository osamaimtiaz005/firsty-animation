import React from "react"
import Button from "./Button/Button"
import { BiSearch } from "react-icons/bi"

const PriceBanner = () => {
  return (
    <div className="md:px-12 py-4 bg-transparent w-full">
      <h1 className="md:text-7xl text-4xl text-secondary py-8 text-center font-extrabold uppercase">
        Fair prices, No hidden fees
      </h1>

      <div className="md:rounded-full md:p-38 bg-[url('/images/bg-video.webp')] bg-cover bg-center">
        <div className="bg-ternary rounded-md p-18 flex flex-col justify-center items-center gap-4">
          <div className=" md:flex-row flex-col grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 justify-between items-center gap-8">
            <div className="bg-transparent border-1  hover:border-secondary border-secondary/10 p-2 rounded-md flex justify-between items-center gap-x-18 cursor-pointer">
              <div>
                <p className="text-secondary text-xl font-medium">Where to?</p>
                <p className="text-gray-500 text-md font-medium whitespace-nowrap ">
                  Select one or more countries
                </p>
              </div>
              <div>
                <BiSearch className="size-6" />
              </div>
            </div>
            <div className="bg-transparent border-1  hover:border-secondary border-secondary/10 p-2 rounded-md flex justify-between items-center gap-x-18 cursor-pointer">
              <div>
                <p className="text-secondary text-xl font-medium">How Long?</p>
                <p className="text-gray-500 text-md font-medium whitespace-nowrap">
                  Select number of days
                </p>
              </div>
              <div>
                <BiSearch className="size-6" />
              </div>
            </div>
            <div className="bg-transparent border-1  hover:border-secondary border-secondary/10 p-2 rounded-md flex justify-between items-center gap-x-18 cursor-pointer">
              <div className="">
                <p className="text-secondary text-xl font-medium">What plan?</p>
                <p className="text-gray-500 text-sm font-medium whitespace-nowrap ">
                  Choose Comfort+ or First Class
                </p>
              </div>
              <div>
                <BiSearch className="size-6" />
              </div>
            </div>
          </div>
          <Button>Buy now use later</Button>
        </div>
      </div>
    </div>
  )
}

export default PriceBanner
