import { React, useState, useEffect } from 'react'

import heroBg from '../assets/images/homeBg.jpg'
import { Link } from 'react-router-dom'
import { HERO_SECTION_LINKS, slides } from '../assets/images/data.js'




const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
    return (
        <section
            className="relative overflow-hidden rounded-3xl mx-4 my-5 sm:mx-6 lg:mx-20 bg-cover bg-center bg-no-repeat flex justify-around  "
            style={{ backgroundImage: `url(${heroBg})` }}>

            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/20 "></div>

            <div className="flex flex-col relative z-10 px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-14 lg:py-16 w-full">

                <div className="max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
                        Your smile is what <br className="hidden sm:block" />
                        matters most to us!
                    </h1>

                    <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 tracking-wide leading-relaxed max-w-2xl">
                        We offer fantastic dental care in a friendly atmosphere! Our team ensures your
                        visit is comfortable and enjoyable, leaving you with a bright smile.
                    </p>

                    <Link to="/appointment">
                        <button className="mt-6 sm:mt-8 bg-white text-black py-3 px-6 sm:px-7 rounded-full text-sm sm:text-base font-medium hover:scale-105 transition duration-200">
                            Book Appointment
                        </button>
                    </Link>
                </div>

                <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:w-150">
                    {HERO_SECTION_LINKS.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Link
                                to={item.link}
                                key={index}
                                className="group w-full"
                            >
                                <div className="h-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 sm:p-6 hover:bg-white/15 hover:scale-[1.02] transition duration-200">
                                    <div className="flex items-start justify-between gap-4">
                                        <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-snug">
                                            {item.name}
                                        </h2>
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 group-hover:translate-x-1 transition duration-200" />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="hidden w-full lg:flex items-center justify-center">
                <div className=" lg:flex relative h-[500px] w-[50%] overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">

                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8">
                                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                                    {slide.title}
                                </h3>
                                <p className="mt-2 text-white/85 text-sm sm:text-base max-w-md leading-relaxed">
                                    {slide.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 rounded-full transition-all ${currentSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero