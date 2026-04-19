import DetailBanner from "../../components/DetailBanner"
import DownloadApp from "../../components/DownloadApp"
import Faqs from "../../components/Faqs"
import GetConnected from "../../components/GetConnected"
import HeroBanner from "../../components/HeroBanner"
import InstructionBanner from "../../components/InstructionBanner"
import PLanBanner from "../../components/PLanBanner"
import PriceBanner from "../../components/PriceBanner"
import Reviews from "../../components/Reviews"

const Landing = () => {
  return (
    <div className="bg-transparnt flex flex-col justify-center items-center py-4 gap-16">
      <HeroBanner />
      <DetailBanner />
      <PLanBanner />
      <PriceBanner />
      <InstructionBanner />
      <Reviews />
      <DownloadApp />
      <GetConnected />
      <Faqs />
    </div>
  )
}

export default Landing
