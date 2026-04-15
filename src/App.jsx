import React from "react"
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import BookingForm from "./pages/BookingForm.jsx"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book-appointment' element={<BookingForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App