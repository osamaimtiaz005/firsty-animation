import { IoStar } from "react-icons/io5"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  const reviews = [
    {
      name: "Ruben Lenten",
      date: "2025-06-10 12:10",
      title: "Great Product",
      text: "Super easy to use and good connection",
      rating: 4,
    },
    {
      name: "Anna White",
      date: "2025-06-12 14:00",
      title: "Fantastic Quality",
      text: "Really satisfied with the performance.",
      rating: 5,
    },
    {
      name: "John Carter",
      date: "2025-07-01 09:30",
      title: "Solid Experience",
      text: "Everything works as expected.",
      rating: 4,
    },
    {
      name: "Lisa Brown",
      date: "2025-07-15 10:45",
      title: "Worth Every Penny",
      text: "Highly recommend for anyone looking for reliability.",
      rating: 5,
    },
    {
      name: "Tom Green",
      date: "2025-08-01 11:20",
      title: "Good Value",
      text: "Affordable and efficient.",
      rating: 4,
    },
  ]

  return (
    <div className="my-12 w-screen overflow-hidden bg-white">
      <h1 className="text-center md:text-7xl text-4xl text-secondary font-bold uppercase mb-8">
        Aww, We love you too!!
      </h1>

      <div className="-mx-2">
        {" "}
        {/* removes side gaps */}
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              {" "}
              {/* internal gap between slides */}
              <div className="bg-ternary p-4 space-y-6 rounded-2xl shadow-lg min-h-[200px] w-full">
                <div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <IoStar key={i} className="fill-amber-400 size-6" />
                    ))}
                  </div>
                  <div className="text-xl text-gray-400 font-medium mt-1">
                    {review.name} {review.date}
                  </div>
                </div>

                <div>
                  <div className="text-lg text-black font-semibold">
                    {review.title}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {review.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews
