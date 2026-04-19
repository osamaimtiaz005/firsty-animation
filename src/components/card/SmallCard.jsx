import React from "react"
import Button from "../Button/Button"

const MenuCard = ({ data }) => {
  return (
    <div className="px-8 py-2 bg-white w-full rounded-2xl space-y-2">
      <div>
        <div className="border rounded-md p-1 whitespace-nowrap italic text-secondary font-medium inline-block">
          {data.title}
        </div>
      </div>
      <div className="text-wrap text-sm font-bold"> {data.heading}</div>
      {data.list.map((item, index) => (
        <div key={index} className="whitespace-nowrap text-sm ">
          ✔️ {item.name}
        </div>
      ))}
      <div className="p-1">
        <Button variant="transparent" className="!text-xs ">
          {data.button}
        </Button>
      </div>
    </div>
  )
}

export default MenuCard
