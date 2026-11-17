import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
    ];

    return (
        <>
            {/* Floating Navbar Pill */}
           <nav
  className={`
    fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[350px] z-50
    backdrop-blur-md border border-foreground/10 rounded-2xl
    px-4 py-3 shadow-md flex justify-between items-center
    transition-all duration-300 bg-card/80`}
>

                {/* Left: Hamburger Menu */}
                <div className="flex-1 flex justify-start">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-foreground/80 cursor-pointer hover:text-foreground transition-colors focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Center: Profile Picture */}
                <div className="flex-1 flex justify-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-foreground/10 ring-2 ring-background">
                    <a href="/">
                        <img
                            src="/Ava.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </a>

                    </div>
                </div>

                {/* Right: Theme Toggle */}
                <div className="flex-1 flex justify-end">
                    <button
                        onClick={toggleTheme}
                        className="relative w-14 h-7 cursor-pointer rounded-full bg-foreground/10 p-1 transition-colors duration-300 focus:outline-none"
                        aria-label="Toggle theme"
                    >
                        <div
                            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-background shadow-sm transform transition-transform duration-300 flex items-center justify-center
                                ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}
                            `}
                        >
                            {theme === 'dark' ? (
                                <Moon className="w-3 h-3 text-foreground" />
                            ) : (
                                <Sun className="w-3 h-3 text-foreground" />
                            )}
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mini Dropdown Menu */}
         <div
  className={`
    fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[350px] z-40
    backdrop-blur-lg bg-card/80 border border-foreground/10 rounded-2xl p-4
    shadow-2xl transition-all duration-300 ease-in-out origin-top
    ${
      isMenuOpen
        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
    }
  `}
>
                <div className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                       <NavLink
  key={item.name}
  to={item.path}
  onClick={() => setIsMenuOpen(false)}
  className={({ isActive }) => `
    px-4 py-3 rounded-3xl transition-all duration-200
    flex items-center justify-between group
    ${
      isActive
        ? "bg-foreground text-background font-semibold shadow-md"
        : "text-foreground/70 font-medium hover:bg-foreground/5 hover:text-foreground"
    }
  `}
>
  {({ isActive }) => (
    <>
      {/* Link Text */}
      <span className="text-base">{item.name}</span>

      {/* Arrow Indicator */}
      <span
        className={`
          transition-transform duration-200 text-sm
          ${
            isActive
              ? "-rotate-45"
              : "rotate-0 opacity-0 group-hover:opacity-100"
          }
        `}
      >
        →
      </span>
    </>
  )}
</NavLink>

                    ))}

                    {/* Divider */}
                    <div className="h-px bg-foreground/5 my-2" />

                    {/* Footer / CTA in dropdown */}
  <NavLink
  to="/contact"
  onClick={() => setIsMenuOpen(false)}
  className={({ isActive }) => `
    w-full py-3 rounded-full flex items-center justify-center
    font-semibold text-base text-background bg-foreground transition-all
    ${
      theme === "dark"
        ? "hover:bg-neutral-200"
        : "hover:bg-neutral-600"
    }
  `}
>
  Contact Me
</NavLink>

                </div>
            </div>
        </>
    );
};


