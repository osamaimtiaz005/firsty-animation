import React from "react"
import Button from "../Button/Button"

const PlanCard = ({
  listData,
  title,
  subTitle,
  className,
  iconClassName,
  standard = false,
}) => {
  return (
    <div className={`bg-ternary rounded-2xl shadow-md relative ${className}`}>
      {standard && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-primary text-md text-center flex items-center justify-center h-8 font-medium text-secondary px-3 py-0.5 rounded-md">
          Popular
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col justify-center items-center py-8 border-b border-dashed border-gray-300">
        <h1 className="text-4xl font-bold text-secondary py-4">{title}</h1>
        <h2 className="text-2xl text-secondary font-medium">{subTitle}</h2>
      </div>

      {/* List */}
      <div className="flex flex-col justify-center items-center py-8 px-4">
        {Array.isArray(listData) &&
          listData.map((item, index) => {
            const Icon = item?.icon
            return (
              <div
                key={index}
                className="flex justify-between gap-4 items-center w-full mb-4"
              >
                <div
                  className={`bg-white rounded-full py-2 px-4 flex justify-center  text-secondary  ${iconClassName}`}
                >
                  <Icon className={`size-7`} />
                </div>
                <div className="text-secondary font-medium">{item?.text}</div>
              </div>
            )
          })}
      </div>
      {/* Buttons */}
      <div className="flex smd:flex-row flex-col justify-center items-center gap-4 py-4 ">
        <Button>Download App</Button>
        <Button variant="transparent">Learn More</Button>
      </div>
    </div>
  )
}

export default PlanCard
