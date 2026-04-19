import React, { useState } from "react"
import Logo from "./Logo/Logo"

const Sidebar = () => {
  const [isActive, setIsActive] = useState("dashboard") // default active
  const sidebarNav = [
    { name: "dashboard", icon: "dashboard.svg" },
    { name: "plus", icon: "plus.svg" },
    { name: "recycle", icon: "recycle.svg" },
    { name: "chartbar", icon: "ChartBar.svg" },
    { name: "wallet", icon: "wallet.svg" },
  ]

  return (
    <div className="bg-black w-fit h-screen flex flex-col items-center justify-between py-4 px-3 border-r border-gray-100/20 relative">
      <div>
        {/* Header */}
        <Logo className="w-10 h-10" />
        {/* Body */}
        <div className="flex flex-col items-center py-6  gap-4 relative">
          {sidebarNav.map((item) => (
            <div
              key={item.name}
              onClick={() => setIsActive(item.name)}
              className={`relative w-10 h-10  flex items-center justify-center cursor-pointer transition-all duration-300 p-2 ${
                isActive === item.name
                  ? "bg-primary-gradient rounded-full"
                  : "bg-transparent hover:bg-gradient hover:rounded-lg "
              }`}
            >
              {/* Active indicator (absolute color bar) */}
              {isActive === item.name && (
                <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 bg-primary w-[3px] h-[40px] rounded-r-lg"></div>
              )}
              <img
                src={`icons/${item.icon}`}
                alt={item.name}
                className="w-4 h-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-2 shadow-md shadow-white/20 border border-white/40 p-1 rounded-4xl">
        {[
          { src: "icons/settings.svg", alt: "settings" },
          { src: "icons/headsets.svg", alt: "support" },
        ].map((item) => (
          <div
            key={item.alt}
            className="group relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-300 hover:bg-primary-gradient"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
