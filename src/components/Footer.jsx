import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Features', to: '#treatments' },
    { name: 'Pricing', to: '#pricing' },
    { name: 'Reviews', to: '#reviews' },
    { name: 'Contact', to: '#contact' },
]

const legalLinks = [
    { name: 'Legal', to: '#' },
    { name: 'Privacy Policy', to: '#' },
    { name: 'Cookies Policy', to: '#' },
]

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
)

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const LogoIcon = () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
        <rect x="2" y="6" width="5" height="16" rx="2.5" fill="white" opacity="0.9" />
        <rect x="9" y="3" width="5" height="22" rx="2.5" fill="white" opacity="0.7" />
        <rect x="16" y="8" width="5" height="12" rx="2.5" fill="white" opacity="0.5" />
    </svg>
)

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleSubscribe = (e) => {
        e.preventDefault()
        setEmail('')
    }

    return (
        <footer className="w-full bg-[#032c34] text-white">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20 pt-10 pb-8 sm:pt-12 sm:pb-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

                    {/* Left Side */}
                    <div className="flex flex-col gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <LogoIcon />
                            <span className="text-xl font-semibold tracking-wide">DentoCare+</span>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex flex-wrap gap-x-5 gap-y-2">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    to={link.to}
                                    className="text-sm text-white/75 hover:text-white transition duration-150"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
                                { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
                                { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/75 hover:bg-white/10 hover:text-white transition duration-200"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side — Subscribe */}
                    <div className="flex flex-col justify-center gap-5">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif leading-snug max-w-sm">
                            Subscribe to get updates and tips for keeping your teeth healthy!
                        </h3>

                        <form
                            onSubmit={handleSubscribe}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-white/10 border border-white/15 rounded-full p-1 sm:pl-5"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Email*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-transparent text-sm text-white placeholder-white/50 outline-none px-4 sm:px-0 py-3 sm:py-0"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 bg-white text-[#032c34] text-sm font-semibold px-5 py-3 rounded-full hover:bg-gray-100 transition duration-200 whitespace-nowrap"
                            >
                                Book Appointment
                                <ArrowUpRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 h-px w-full bg-white/10"></div>

                {/* Bottom Bar */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-white/60">
                    <p>Copyright — All rights reserved 2025</p>

                    <div className="flex flex-wrap gap-x-5 gap-y-1 items-center">
                        {legalLinks.map((link, i) => (
                            <Link
                                key={i}
                                to={link.to}
                                className="hover:text-white transition duration-150"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="mailto:hello@dentocare.com"
                            className="hover:text-white transition duration-150"
                        >
                            hello@dentocare
                        </a>
                    </div>
                </div>
            </div>

            {/* Webentric Branding Strip */}
            <div className="w-full border-t border-white/10 bg-[#021f25]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20 py-3 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-white/40">
                    <p>
                        Designed & Developed by{' '}
                        <a
                            href="https://webentric.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition duration-150 font-medium"
                        >
                            Webentric
                        </a>
                    </p>
                    <a
                        href="mailto:webentric2026@gmail.com"
                        className="text-white/40 hover:text-white/70 transition duration-150"
                    >
                        webentric2026@gmail.com
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer