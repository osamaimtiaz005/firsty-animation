import React from "react"

const DownloadApp = () => {
  return (
    <div className="m-4 flex md:flex-row flex-col  justify-between items-center p-20">
      <div className="space-y-8 flex flex-col md:items-start items-center md:order-1 order-2">
        <h1 className="md:text-7xl  text-4xl text-secondary uppercase font-extrabold">
          Download The Free App Now
        </h1>
        <h2 className="text-xl text-center text-gray-400 ">
          Stay online anywhere - No contracts, no hassle.
        </h2>
        <div className="w-40 h-40 p-2 bg-primary rounded-xl">
          <img src="images/default-qr-code.png" className="" />
        </div>
      </div>
      <div className="md:order-2 order-1">
        <div className="md:w-150 p-2 w-80 ">
          <img
            src="images/image_12.png"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
