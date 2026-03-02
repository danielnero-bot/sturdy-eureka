import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import Logo from '../assets/image.png' 

const Navbar = () => {
  const navRef = useRef(null)
  const menuItemsRef = useRef([])
  const mobileMenuRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Entrance animation
    const tl = gsap.timeline()
    
    tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(menuItemsRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.6"
    )
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.8,
        ease: "power4.out"
      })
      gsap.fromTo(".mobile-link", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.3 }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.8,
        ease: "power4.in"
      })
    }
  }, [isMenuOpen])

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Characters', to: '/characters' },
    { name: 'Timeline', to: '/timeline' },
    { name: 'Quotes', to: '/quotes' },
    { name: 'Titans', to: '/titans' },
    { name: 'Gallery', to: '/gallery' },
  ]

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[60] bg-deep-black/80 backdrop-blur-xl border-b border-white/5 px-6 lg:px-12 py-4 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group cursor-pointer z-50">
            <img 
              src={Logo} 
              alt="AOT Logo" 
              className="h-8 md:h-10 w-auto filter brightness-110 contrast-125 transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Menu Items */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                ref={el => menuItemsRef.current[index] = el}
              >
                <Link 
                  to={link.to}
                  className="text-steel-silver hover:text-blood-red font-bold tracking-[0.2em] text-[10px] uppercase transition-all duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blood-red transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Action Button */}
          <div className="hidden lg:block" ref={el => menuItemsRef.current[navLinks.length] = el}>
            <button className="relative group px-6 py-2 bg-blood-red text-off-white text-[10px] uppercase tracking-[0.2em] font-black overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,0,0,0.5)] active:scale-95 border border-white/10">
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 inline-block">Enter the Walls</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
          >
            <span className={`w-6 h-0.5 bg-off-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-off-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-off-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Menu */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-[55] translate-x-full bg-deep-black flex flex-col items-center justify-center p-12 lg:hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <span className="text-[200px] font-black uppercase text-white origin-center rotate-90 whitespace-nowrap">MARLEY</span>
        </div>
        
        <ul className="relative z-10 flex flex-col items-center space-y-8 w-full">
          {navLinks.map((link) => (
            <li key={link.name} className="mobile-link w-full text-center">
              <Link 
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-off-white hover:text-blood-red font-black tracking-[0.4em] text-2xl uppercase transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 w-full mobile-link">
            <button className="w-full py-6 bg-blood-red text-off-white text-xs uppercase tracking-[0.4em] font-black border border-white/10 shadow-2xl">
                Enter the Walls
            </button>
        </div>

        <div className="absolute bottom-12 flex space-x-6 mobile-link opacity-40">
            <span className="text-[10px] uppercase tracking-widest">S4 // Final Arc</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
