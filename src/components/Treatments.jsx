import React from 'react'
import { icons } from '../assets/images/imgs'
import { Link } from 'react-router-dom'
import { treatments } from '../assets/images/data'



const Treatments = () => {
    return (
        <section className="w-full bg-[#f7f7f4] px-4 py-10 sm:px-6 sm:py-14 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Top Header */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                        <p className="text-sm sm:text-base font-medium text-[#234244]">
                            Our Treatments
                        </p>
                        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0f2d2f] leading-tight">
                            Caring for your smile with
                            <br className="hidden sm:block" />
                            advanced dental solutions.
                        </h2>
                    </div>

                    <Link to="/services" className="inline-flex w-fit items-center self-start lg:mt-4">
                        <span className="inline-flex items-center rounded-full bg-[#032c34] px-6 py-3 text-sm sm:text-base font-medium text-white">
                            Explore All Services
                        </span>
                        {/* <span className="ml-[-10px] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#032c34] text-white">
                            <ArrowUpRight size={18} />
                        </span> */}
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {treatments.map((item, index) =>
                        item.type === 'image' ? (
                            <div
                                key={index}
                                className="overflow-hidden rounded-[18px] bg-[#efefec] min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="flex min-h-[260px] sm:min-h-[300px] lg:min-h-[320px] flex-col justify-between rounded-[18px] bg-[#efefec] p-5 sm:p-6 lg:p-7"
                            >
                                <div>
                                    <span className="text-5xl sm:text-6xl font-serif leading-none text-[#bcc4c4]">
                                        {item.id}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-2xl sm:text-[30px] font-serif text-[#0f2d2f] leading-tight">
                                        {item.title}
                                    </h3>
                                    <div className="mt-3 h-px w-full bg-[#d8dcda]"></div>
                                    <p className="mt-3 text-sm sm:text-[15px] leading-6 text-[#385254]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Treatments