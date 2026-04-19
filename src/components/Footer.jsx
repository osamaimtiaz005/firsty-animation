import React from "react"
import { FiGlobe } from "react-icons/fi"
import { Link } from "react-router-dom"

const Footer = () => {
  const menuList = [
    {
      id: 1,
      heading: "Popular Destinations",
      items: [
        { name: "United States", url: "" },
        { name: "Canada", url: "" },
        { name: "United Kingdom", url: "" },
        { name: "Japan", url: "" },
        { name: "Indonesia", url: "" },
        { name: "Italy", url: "" },
        { name: "Turkey", url: "" },
        { name: "France", url: "" },
        { name: "Spain", url: "" },
        { name: "China", url: "" },
        { name: "Germany", url: "" },
      ],
    },
    {
      id: 2,
      heading: "Firsty",
      items: [
        { name: "About Firsty", url: "" },
        { name: "Partnerships", url: "" },
        { name: "Jobs", url: "" },
        { name: "Refer a Friend", url: "" },
        { name: "Press Kit", url: "" },
        { name: "The Wanderer", url: "" },
        { name: "Carrier Roaming Comparison", url: "" },
      ],
    },
    {
      id: 3,
      heading: "Help",
      items: [
        { name: "Firsty Free", url: "" },
        { name: "Comfort+", url: "" },
        { name: "First Class", url: "" },
        { name: "Refer a Friend", url: "" },
        { name: "International Calling", url: "" },
        { name: "Help", url: "" },
        { name: "Cookies Management", url: "" },
      ],
    },
    {
      id: 4,
      heading: "eSIM",
      items: [
        { name: "What is an eSIM", url: "" },
        { name: "Supported Devices", url: "" },
        { name: "Use an eSIM on a Locked Phone", url: "" },
        { name: "Help With a Deleted eSIM", url: "" },
        { name: "Activate Firsty eSIM - Complete Guide", url: "" },
      ],
    },
  ]

  return (
    <div className="bg-ternary p-2 w-full space-y-18 ">
      <div>
        <div className="flex md:flex-row flex-col  ">
          <div className="flex gap-2 w-full col-span-4">
            <div>
              <div className="bg-primary p-2 rounded-2xl">
                <FiGlobe className="size-14 stroke-2 -skew-x-6" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold -skew-x-6 bg-secondary text-white  rounded-full px-8 py-4">
                firsty
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full col-span-8">
            {menuList.map((menu) => (
              <div key={menu.id} className="spacey-8">
                <h1 className="text-xl text-gray-500 font-bold pb-4">
                  {menu.heading}
                </h1>

                {menu.items.map((item) => (
                  <Link
                    to={item.url}
                    className="text-black hover:underline font-medium  gap-2 flex flex-col text-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div>{"LIst of social icons"}</div>
          <div className="text-gray-500 text-xs space-y-2">
            <div>©2025 Firsty Inc.</div>
            <div>
              <ol className="flex flex-col gap-1">
                <Link>• Cookies</Link>
                <Link>• Privacy</Link>
                <Link>• Policy</Link>
                <Link>• Terms and Conditions</Link>
                <Link>• Trust Center</Link>
              </ol>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-40 h-40 p-2 bg-primary rounded-2xl">
            <img src="images/default-qr-code.png" />
          </div>
          <div className="text-gray-500 text-xs">
            Apple® and the Apple logo® are trademarks of Apple Inc., registered
            in the U.S. and other countries. App Store is a service mark of
            Apple Inc. Google Play and the Google Play logo are trademarks of
            Google LLC.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
