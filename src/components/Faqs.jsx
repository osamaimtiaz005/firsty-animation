import React, { useState } from "react"
import Button from "./Button/Button"
import { CgChevronDown } from "react-icons/cg"

const Faqs = () => {
  const [showAnswer, setShowAnswer] = useState(null)
  const faqs = [
    {
      id: 1,
      question: "How does Firsty app work?",
      answer:
        "You first need to download the Firsty app in the Apple App store or the Google Play store. Next step is to activate your eSIM once, and the final step is to select Firsty as your mobile data provider. Once this is done, you're good to go for whatever time you choose, anywhere in the world. No more dealing with different SIMs or eSIMs for each place you visit. Firsty's global eSIM covers the entire world, so you don't need multiple local or regional eSIM cards.",
    },
    {
      id: 2,
      question: "How does Firsty app work?",
      answer:
        "You first need to download the Firsty app in the Apple App store or the Google Play store. Next step is to activate your eSIM once, and the final step is to select Firsty as your mobile data provider. Once this is done, you're good to go for whatever time you choose, anywhere in the world. No more dealing with different SIMs or eSIMs for each place you visit. Firsty's global eSIM covers the entire world, so you don't need multiple local or regional eSIM cards.",
    },
    {
      id: 3,
      question: "How does Firsty app work?",
      answer:
        "You first need to download the Firsty app in the Apple App store or the Google Play store. Next step is to activate your eSIM once, and the final step is to select Firsty as your mobile data provider. Once this is done, you're good to go for whatever time you choose, anywhere in the world. No more dealing with different SIMs or eSIMs for each place you visit. Firsty's global eSIM covers the entire world, so you don't need multiple local or regional eSIM cards.",
    },
    {
      id: 4,
      question: "How does Firsty app work?",
      answer:
        "You first need to download the Firsty app in the Apple App store or the Google Play store. Next step is to activate your eSIM once, and the final step is to select Firsty as your mobile data provider. Once this is done, you're good to go for whatever time you choose, anywhere in the world. No more dealing with different SIMs or eSIMs for each place you visit. Firsty's global eSIM covers the entire world, so you don't need multiple local or regional eSIM cards.",
    },
    {
      id: 5,
      question: "How does Firsty app work?",
      answer:
        "You first need to download the Firsty app in the Apple App store or the Google Play store. Next step is to activate your eSIM once, and the final step is to select Firsty as your mobile data provider. Once this is done, you're good to go for whatever time you choose, anywhere in the world. No more dealing with different SIMs or eSIMs for each place you visit. Firsty's global eSIM covers the entire world, so you don't need multiple local or regional eSIM cards.",
    },
    {
      id: 6,
      question: "How does Firsty app work?",
      answer:
        "You first need to download the Firsty app in the Apple App store or the Google Play store. Next step is to activate your eSIM once, and the final step is to select Firsty as your mobile data provider. Once this is done, you're good to go for whatever time you choose, anywhere in the world. No more dealing with different SIMs or eSIMs for each place you visit. Firsty's global eSIM covers the entire world, so you don't need multiple local or regional eSIM cards.",
    },
  ]
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="w-full space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
            Questions? We've got you.
          </h1>
          <h2 className="text-base md:text-lg lg:text-xl text-gray-600">
            We know, it sounds too good to be true. But it’s real. Here’s how.
          </h2>
          <Button
            variant="transparent"
            className="mt-6 md:mt-10 w-full md:w-auto"
          >
            {" "}
            {/* Responsive margin and width */}
            Get Support
          </Button>
        </div>

        <div className="w-full space-y-0">
          {faqs.map((item) => (
            <div className="w-full" key={item.id}>
              <div
                onClick={() =>
                  setShowAnswer(showAnswer === item.id ? null : item.id)
                }
                className="w-full border-b border-gray-300 py-4 md:py-6 px-2 md:px-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="text-base md:text-lg font-medium pr-4 flex-1">
                  {item.question}
                </div>
                <CgChevronDown
                  className={`transition-transform duration-300 ${
                    showAnswer === item.id ? "rotate-180" : ""
                  }`}
                />
              </div>
              {showAnswer === item.id && (
                <div className="w-full px-2 md:px-4 pb-4 text-sm md:text-base text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
