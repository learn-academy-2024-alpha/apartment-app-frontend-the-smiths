import React, { useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import "./App.css"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home.js"
import NotFound from "./pages/NotFound.js"
import Index from "./pages/Index.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)
  const location = useLocation()
  const isIndexPage = location.pathname === "/apartments"

  return (
    <div className={!isIndexPage ? "tropical-bg" : "muted-bg"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/apartments"
          element={<Index mockApartments={mockApartments} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
