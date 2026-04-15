import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../assets/images/data.js'


const StarRating = ({ count }) => (
    <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                viewBox="0 0 24 24"
                fill={i < count ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.5"
                className={`w-5 h-5 ${i < count ? 'text-[#234244]' : 'text-[#c8d4d2]'}`}
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
)

const CARDS_PER_VIEW = {
    mobile: 1,
    desktop: 2,
}

const Testimonials = () => {
    const [current, setCurrent] = useState(0)
    const [cardsVisible, setCardsVisible] = React.useState(
        typeof window !== 'undefined' && window.innerWidth >= 768
            ? CARDS_PER_VIEW.desktop
            : CARDS_PER_VIEW.mobile
    )

    React.useEffect(() => {
        const handleResize = () => {
            setCardsVisible(
                window.innerWidth >= 768
                    ? CARDS_PER_VIEW.desktop
                    : CARDS_PER_VIEW.mobile
            )
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const maxIndex = testimonials.length - cardsVisible

    const prev = () => setCurrent((c) => Math.max(c - 1, 0))
    const next = () => setCurrent((c) => Math.min(c + 1, maxIndex))

    return (
        <section className="w-full bg-[#f7f7f4] px-4 py-10 sm:px-6 sm:py-14 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Header Row */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="text-sm sm:text-base font-medium text-[#234244]">
                            Testimonials
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0f2d2f] leading-tight max-w-lg">
                            Check out our patients' <br className="hidden sm:block" />
                            thoughts on our doctors!
                        </h2>
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex items-start gap-3 self-start sm:mt-4">
                        <button
                            onClick={prev}
                            disabled={current === 0}
                            className={`flex h-12 w-12 items-center justify-center rounded-lg border transition duration-200
                ${current === 0
                                    ? 'border-[#dde3e2] bg-[#efefec] text-[#b0bcba] cursor-not-allowed'
                                    : 'border-[#c8d4d2] bg-[#e5ebea] text-[#234244] hover:bg-[#032c34] hover:text-white hover:border-[#032c34]'
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            disabled={current === maxIndex}
                            className={`flex h-12 w-12 items-center justify-center rounded-lg border transition duration-200
                ${current === maxIndex
                                    ? 'border-[#dde3e2] bg-[#efefec] text-[#b0bcba] cursor-not-allowed'
                                    : 'border-[#032c34] bg-[#032c34] text-white hover:bg-[#0a4047]'
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Cards Viewport */}
                <div className="mt-8 overflow-hidden">
                    <div
                        className="flex gap-5 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(calc(-${current} * (100% / ${cardsVisible} + 20px / ${cardsVisible})))` }}
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full md:w-[calc(50%-10px)] rounded-[18px] border border-[#e0e4e3] bg-white p-6 sm:p-7 flex flex-col justify-between gap-6"
                            >
                                {/* Top: Stars + Review */}
                                <div className="flex flex-col gap-4">
                                    <StarRating count={item.rating} />
                                    <p className="text-base sm:text-lg leading-relaxed text-[#385254]">
                                        {item.review}
                                    </p>
                                </div>

                                {/* Bottom: Name + Role */}
                                <div>
                                    <div className="h-px w-full bg-[#e8edec] mb-4"></div>
                                    <div>
                                        <p className="text-lg sm:text-xl font-serif font-semibold text-[#0f2d2f]">
                                            {item.name}
                                        </p>
                                        <p className="mt-0.5 text-sm text-[#5a7476]">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="mt-6 flex justify-center gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-[#032c34]' : 'w-2.5 bg-[#c4cfce]'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials