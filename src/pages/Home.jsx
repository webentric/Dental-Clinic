import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Treatments from '../components/Treatments.jsx'
import OurDoctors from '../components/OurDoctors.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Booking from '../components/Booking.jsx'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Treatments />
            <OurDoctors />
            <Testimonials />
            <Booking />
        </>
    )
}

export default Home
