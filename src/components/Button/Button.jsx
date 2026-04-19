import React from "react"

const Button = ({ children, className = "", variant = "default" }) => {
  const variantStyles = {
    default:
      "bg-secondary hover:bg-primary text-white hover:text-secondary text-sm md:text-lg rounded-full font-medium",
    transparent:
      "bg-transparent text-secondary text-sm md:text-xl border-[1px] border-gray-200 hover:border-secondary hover:border-1 rounded-full",
  }

  return (
    <button
      className={`${variantStyles[variant]} ${className} md:py-3 md:px-5 py-1 px-2 whitespace-nowrap `}
    >
      {children}
    </button>
  )
}

export default Button
