import React from "react"
import PlanCard from "./card/PlanCard"
import { IoFootsteps } from "react-icons/io5"

const PLanBanner = () => {
  const data = [
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
  ]
  const data2 = [
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
  ]
  const data3 = [
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
    {
      icon: IoFootsteps,
      text: "Available for User in North-America ,  Europe & APAC",
    },
  ]

  return (
    <div className=" w-full  gap-4 py-24 px-8">
      <div className="md:text-7xl text-4xl text-secondary py-6 uppercase font-bold text-center">
        Choose Your Plan
      </div>
      <div className="  grid grid-cols-1 lg:grid-cols-3 md:mt-18 gap-6">
        <PlanCard
          title={"First Free"}
          subTitle={"Watch ads- Zero costs"}
          listData={data}
        />

        <PlanCard
          title={"First Free"}
          subTitle={"Watch ads- Zero costs"}
          listData={data2}
          standard
          className={`border-4 border-primary shadow-lg shadow-primary to-yellow-200`}
          iconClassName={`!bg-primary !text-secondary`}
        />
        <PlanCard
          title={"First Free"}
          subTitle={"Watch ads- Zero costs"}
          listData={data3}
          iconClassName={`!bg-secondary !text-primary`}
        />
      </div>
    </div>
  )
}

export default PLanBanner
