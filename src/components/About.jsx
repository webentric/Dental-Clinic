import React from 'react'
import aboutImg from '../assets/images/about.jpg'
import { Link } from 'react-router-dom'
import { stats } from '../assets/images/data.js'


const About = () => {
    return (
        <section className="w-full bg-[#f7f7f4] px-4 py-10 sm:px-6 sm:py-14 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

                    {/* Left Side */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0f2d2f] leading-tight">
                                About DentoCare+
                            </h2>

                            <Link to="/about" className="inline-flex w-fit items-center">
                                <span className="inline-flex items-center rounded-full bg-[#032c34] px-6 py-3 text-sm sm:text-base font-medium text-white">
                                    Read More
                                </span>
                                {/* <span className="ml-[-10px] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#032c34] text-white">
                                    <icons.right_arrow />
                                </span> */}
                            </Link>
                        </div>

                        <div className="overflow-hidden rounded-[24px]">
                            <img
                                src={aboutImg}
                                alt="Dental treatment in progress"
                                className="h-[260px] w-full object-cover sm:h-[320px] md:h-[380px] lg:h-[420px]"
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-between gap-8">
                        <p className="max-w-2xl text-lg leading-relaxed text-[#234244] sm:text-xl lg:text-[2rem] lg:leading-[1.5]">
                            At DentoCare+, we know a great smile can change everything. For more than ten years,
                            we've been providing top-notch dental care with the latest tech and a friendly vibe.
                        </p>

                        <div className="grid grid-cols-2 gap-y-8 gap-x-6 sm:gap-y-10 sm:gap-x-10">
                            {stats.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0f2d2f] leading-none">
                                        {item.value}
                                    </h3>
                                    <p className="mt-3 text-base sm:text-lg text-[#234244]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About