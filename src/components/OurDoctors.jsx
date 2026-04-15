import React from 'react'
import { Link } from 'react-router-dom'
import { doctors } from '../assets/images/data.js'

const MetaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
    </svg>
)

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
)

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const OurDoctors = () => {
    return (
        <section
            id="doctors"
            className="w-full bg-[#f7f7f4] px-4 py-10 sm:px-6 sm:py-14 lg:px-20 lg:py-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-14 xl:gap-20">
                    <div>
                        <p className="text-sm sm:text-base font-medium text-[#234244]">
                            Our Doctors Team
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0f2d2f] leading-tight">
                            Introducing our <br className="hidden sm:block" />
                            medical professionals
                        </h2>
                    </div>

                    <div className="flex items-center">
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#234244] max-w-xl">
                            At DentoCare+, our compassionate doctors prioritize your comfort and safety.
                            With unique skills and years of experience, our team ensures every smile
                            gets the best care.
                        </p>
                    </div>
                </div>

                {/* Doctor Cards */}
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between overflow-hidden rounded-[18px] border border-[#e0e4e3] bg-white min-h-[360px] sm:min-h-[400px]"
                        >
                            {/* Card Top: Text */}
                            <div className="flex flex-col gap-3 p-5 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-serif text-[#0f2d2f] leading-snug">
                                    {doctor.name}
                                </h3>
                                <p className="text-sm sm:text-[15px] leading-6 text-[#385254]">
                                    {doctor.description}
                                </p>
                                <span className="mt-1 inline-flex w-fit items-center rounded-full border border-[#c8d4d2] px-4 py-1.5 text-xs sm:text-sm text-[#234244]">
                                    {doctor.specialty}
                                </span>
                            </div>

                            {/* Card Bottom: Social Icons + Image */}
                            <div className="flex items-end justify-between px-5 sm:px-6 pb-0">
                                {/* Social Icons */}
                                <div className="flex flex-col gap-2 pb-5">
                                    {[
                                        { icon: <MetaIcon />, href: doctor.social.meta },
                                        { icon: <InstagramIcon />, href: doctor.social.instagram },
                                        { icon: <LinkedInIcon />, href: doctor.social.linkedin },
                                    ].map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#dde3e2] bg-[#f4f5f4] text-[#385254] hover:bg-[#032c34] hover:text-white transition duration-200"
                                        >
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>

                                {/* Doctor Image */}
                                <div className="w-[55%] sm:w-[58%] overflow-hidden rounded-t-2xl">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="h-[180px] sm:h-[210px] w-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurDoctors