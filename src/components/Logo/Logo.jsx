import React, { useEffect, useState } from "react"
import { CiGlobe } from "react-icons/ci"

const Logo = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout

    const handleScroll = () => {
      setIsScrolling(true)

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <a
        className="inline-flex flex-none items-center gap-1"
        aria-label="Go to home page"
        href="/"
      >
        <CiGlobe
          className={`size-8 text-secondary stroke-1 transition-transform duration-200  -skew-x-8 ${
            isScrolling ? "transform-3d  " : ""
          }`}
        />
        <div className="text-4xl text-secondary -skew-x-8 font-bold">
          firsty
        </div>
      </a>
    </div>
  )
}

export default Logo
