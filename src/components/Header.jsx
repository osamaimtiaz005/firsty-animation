import { useState, useEffect, useRef } from "react"
import clsx from "clsx"
import Logo from "./Logo/Logo"
import { RxDownload } from "react-icons/rx"
import { IoClose, IoReorderTwoOutline } from "react-icons/io5"
import MenuCard from "./card/SmallCard"
import { FaCaretUp } from "react-icons/fa6"
import { CgChevronDown } from "react-icons/cg"

const Header = () => {
  const headerRef = useRef(null)
  const [bgColor, setBgColor] = useState("transparent")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeMobileItem, setActiveMobileItem] = useState(null)

  const navItems = [
    { name: "plans", label: "Plans", path: "#" },
    { name: "calling", label: "Calling", path: "#" },
    { name: "countries", label: "Countries", path: "#" },
    { name: "support", label: "Support", path: "#" },
    { name: "aboutus", label: "About Us", path: "#" },
    { name: "partners", label: "Partners", path: "#" },
  ]

  const menuData1 = {
    title: "Free Plan",
    heading: "Watch an ad & unlock free minutes",
    list: [
      { name: "Basic speed only (mail, text & nav)" },
      { name: "Free forever" },
      { name: "With Ads" },
      { name: "Email, messaging apps and Uber" },
    ],
    button: "Learn More",
  }
  const menuData2 = { ...menuData1 }

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [showMobileMenu])

  useEffect(() => {
    if (!headerRef.current?.parentElement) return
    const parent = headerRef.current.parentElement
    const updateBgColor = () => {
      const computedStyle = window.getComputedStyle(parent)
      setBgColor(computedStyle.backgroundColor)
    }
    updateBgColor()
    const observer = new MutationObserver(updateBgColor)
    observer.observe(parent, { attributes: true, attributeFilter: ["style"] })
    return () => observer.disconnect()
  }, [])

  const hasDropdown = (name) =>
    ["plans", "calling", "aboutus", "partners"].includes(name)

  return (
    <div ref={headerRef} className="w-full bg-transparent p-2 relative z-10">
      <div className="flex flex-row justify-between items-center">
        {/* Mobile toggle */}
        {!showMobileMenu ? (
          <IoReorderTwoOutline
            className="size-8 p-2 rounded-full border md:hidden block cursor-pointer"
            onClick={() => setShowMobileMenu(true)}
          />
        ) : (
          <IoClose
            className="size-8 p-2 rounded-full border md:hidden block cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
        )}

        <Logo />

        {/* Desktop nav */}
        <div
          className={clsx(
            "rounded-2xl flex flex-row justify-between items-center gap-2 p-1 shadow-lg backdrop-blur-sm border border-white/20 md:flex hidden"
          )}
          style={{
            backgroundColor: bgColor ? `${bgColor}CC` : "secondary",
          }}
        >
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href="#"
                className="text-secondary font-bold px-4 py-2 text-sm hover:bg-ternary/40 rounded-4xl cursor-pointer drop-shadow-sm"
              >
                {item.label}
              </a>

              {item.name === "plans" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block z-10">
                  <div className="flex justify-between gap-4 p-3 bg-ternary rounded-4xl shadow-lg relative">
                    <FaCaretUp className="absolute left-1/2 -translate-x-1/2 -top-4 text-ternary size-8" />
                    <MenuCard data={menuData1} />
                    <MenuCard data={menuData2} />
                    <MenuCard data={menuData2} />
                  </div>
                </div>
              )}

              {item.name === "calling" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block z-10">
                  <div className="flex flex-col gap-2 px-6 py-6 bg-ternary rounded-4xl shadow-lg relative">
                    <FaCaretUp className="absolute left-1/2 -translate-x-1/2 -top-4 text-ternary size-8" />
                    <a href="#">International Calling</a>
                    <a href="#">Rates</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="justify-between items-center gap-4 md:flex hidden">
          <button>En</button>
          <button className="bg-primary text-secondary rounded-full font-medium px-4 py-2 text-sm">
            Download Now
          </button>
        </div>

        {/* Mobile download */}
        <div className="bg-primary rounded-full p-2 md:hidden block">
          <RxDownload className="size-6" />
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-white pt-6 rounded-t-2xl shadow-lg overflow-y-auto md:hidden block z-50"
          style={{ height: "100vh" }}
        >
          {navItems.map((item) => {
            const open = activeMobileItem === item.name
            const dropdown = hasDropdown(item.name)
            return (
              <div key={item.name}>
                <div
                  className={clsx(
                    "flex justify-between items-center py-4 px-4 border-t border-gray-100 text-secondary font-semibold",
                    dropdown ? "cursor-pointer" : "cursor-default"
                  )}
                  onClick={() =>
                    dropdown
                      ? setActiveMobileItem(open ? null : item.name)
                      : setShowMobileMenu(false)
                  }
                >
                  {dropdown ? (
                    <span>{item.label}</span>
                  ) : (
                    <a href="#" className="w-full">
                      {item.label}
                    </a>
                  )}

                  {dropdown && (
                    <CgChevronDown
                      className={clsx(
                        "transition-transform duration-200",
                        open && "rotate-180"
                      )}
                    />
                  )}
                </div>

                {dropdown && (
                  <div
                    className={clsx(
                      "transition-all overflow-hidden px-4",
                      open ? "max-h-[600px] py-2" : "max-h-0 py-0"
                    )}
                  >
                    {item.name === "plans" && (
                      <div className="space-y-2">
                        <div>
                          <h1 className="uppercase text-secondary font-extrabold text-lg">
                            Free
                          </h1>
                          <p className="text-gray-400 text-sm ">
                            Basic speed ideal for email & texts
                          </p>
                        </div>
                        <div>
                          <h1 className="uppercase text-secondary font-extrabold text-lg">
                            Comfort +
                          </h1>
                          <p className="text-gray-400 text-sm ">
                            High speed data perfect for browsing, <br />
                            navigation, socialmedia
                          </p>
                        </div>
                        <div>
                          <h1 className="uppercase text-secondary font-extrabold text-lg">
                            First Class
                          </h1>
                          <p className="text-gray-400 text-sm ">
                            High-speed data perfect for streaming, <br />
                            remote work, hotspot
                          </p>
                        </div>
                      </div>
                    )}

                    {item.name === "calling" && (
                      <div className="flex flex-col gap-2 text-md font-medium text-secondary">
                        <a href="#">International Calling</a>
                        <a href="#">Rates</a>
                      </div>
                    )}

                    {item.name === "aboutus" && (
                      <div className="flex flex-col gap-2 text-md font-medium text-secondary">
                        <a href="#">About us</a>
                        <a href="#">Help</a>
                        <a href="#">The Wanderer</a>
                        <a href="#">Jobs</a>
                        <a href="#">Press kit</a>
                      </div>
                    )}

                    {item.name === "partners" && (
                      <div className="flex flex-col gap-2 text-md font-medium text-secondary">
                        <a href="#">Overview</a>
                        <a href="#">Firsty for Employees</a>
                        <a href="#">Integration Partners</a>
                        <a href="#">Affiliate</a>
                        <a href="#">Uber One x Firsty</a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Header
