import { useState, useRef } from 'react';
import sunlogo from '@assets/sunlogo.svg';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

const INTERSECT_THESHOLD = 0.2;

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const logoRef = useRef(null);

  const isLogoVisible = useIntersectionObserver(logoRef, {
    threshold: INTERSECT_THESHOLD,
  });

  return (
    <>
      <nav className="nav">
        <div className="max-w-6xl mx-auto py-3 flex items-center justify-between">
          <div className="text-2xl font-bold flex flex-row items-center group">
            <img
              ref={logoRef}
              className={`w-10 transition-all group-hover:rotate-0 duration-400 ease-in-out ${
                isLogoVisible && 'rotate-90'
              }`}
              src={sunlogo}
            />
            &nbsp;
            <a className="font-SpaceGrotesk font-normal text-xl transition-all group-hover:text-2xl duration-200">
              Smogday
            </a>
          </div>

          <div className="hidden md:flex gap-8 text-lg items-baseline">
            <a
              href="#home"
              className="hover:text-[var(--bg-homepage)] transition"
            >
              Home
            </a>
            <a
              href="#location"
              className="hover:text-[var(--bg-homepage)] transition"
            >
              Location
            </a>
            <a
              href="tel:16507329732"
              className="font-SpaceGrotesk uppercase px-8 py-2 border-2 border-black mt-4 mb-6 font-medium md:block hidden hover:bg-black hover:text-[var(--bg-nav)]"
              aria-label="Call now"
            >
              Call now
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-t-2 border-black mt-2 md:hidden">
          <a
            href="tel:16507329732"
            className="font-SpaceGrotesk uppercase px-12 py-3 border-2 border-black mt-4 mb-6 font-medium"
            aria-label="Call now"
          >
            Call now
          </a>
        </div>
      </nav>

      <button
        className="md:hidden absolute w-8 h-6 flex flex-col justify-between top-0 right-0 z-[99] m-4"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-full bg-black rounded transition-all duration-300 ${
            open ? 'translate-y-3 rotate-45' : ''
          }`}
        ></span>
        <span
          className={`block h-1 w-full bg-black rounded transition-all duration-300 ${
            open ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block h-1 w-full bg-black rounded transition-all duration-300 ${
            open ? '-translate-y-2 -rotate-45' : ''
          }`}
        ></span>
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white px-6 pt-24 pb-4 gap-4 text-lg shadow-xl z-50 
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col">
          <a
            href="#home"
            className="py-2 border-b border-gray-200"
            onClick={() => setOpen(!open)}
          >
            Home
          </a>
          <a
            href="#location"
            className="py-2 border-b border-gray-200"
            onClick={() => setOpen(!open)}
          >
            Location
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
