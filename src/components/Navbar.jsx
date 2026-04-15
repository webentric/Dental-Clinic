import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAVBAR_LINKS } from '../assets/images/data';
import { icons } from '../assets/images/imgs';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative flex justify-between items-center mx-5 lg:mx-20 mt-3 px-4 py-3 bg-primary rounded-4xl z-50">
            <div>
                <p className="text-white text-3xl py-2 px-3">DentoCare+</p>
            </div>

            <div className="hidden md:flex gap-10">
                {NAVBAR_LINKS.map((item) => (
                    <NavLink
                        key={item.link}
                        to={item.link}
                        end={item.link === '/'}
                        className={({ isActive }) =>
                            `transition-all duration-300 ${isActive
                                ? 'text-white underline decoration-1 underline-offset-4'
                                : 'text-border hover:text-white'
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            <div className="hidden lg:flex">
                <Link to="/book-appointment">
                    <button
                        className="px-5 py-3 rounded-full text-white text-md font-normal bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/15 transition-all duration-300 cursor-pointer"
                    >
                        Book Appointment
                    </button>
                </Link>
            </div>

            <button
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (<icons.cross_icon className="w-10 h-10 text-white" />) : (<icons.menu_icon className="w-8 h-8 text-white" />)}
            </button>

            {menuOpen && (
                <div className="absolute top-full left-0 mt-3 w-full rounded-3xl bg-primary p-6 md:hidden shadow-lg">
                    <div className="flex flex-col gap-2 ">
                        {NAVBAR_LINKS.map((item) => (
                            <NavLink
                                key={item.link}
                                to={item.link}
                                end={item.link === '/'}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `transition-all duration-300 rounded-2xl px-3 py-2 ${isActive
                                        ? 'bg-border text-primary '
                                        : 'text-border hover:text-white '
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;