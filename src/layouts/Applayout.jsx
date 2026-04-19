import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

const Applayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <header className="fixed top-0 left-0 right-0 z-100">
        <Header />
      </header>

      <div className="flex flex-1 pt-[60px]">
        {/* Sidebar if needed */}
        {/* <aside className="flex h-full sticky top-0">
          <Sidebar />
        </aside> */}

        <main className="flex-1 overflow-auto p-2">
          {children}
          <footer className="w-full">
            <Footer />
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Applayout
