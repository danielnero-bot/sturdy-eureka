import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import heroImage from '../assets/hero.png'

const Hero = () => {
  const heroRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const subTextRef = useRef(null)
  const ctaRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Background scale/fade in
    tl.fromTo(bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out" }
    )
    // Headline reveal
    .fromTo([title1Ref.current, title2Ref.current],
      { y: 150, skewY: 10, opacity: 0 },
      { y: 0, skewY: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "expo.out" },
      "-=1.5"
    )
    // Subheading reveal
    .fromTo(subTextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    // CTAs reveal
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-deep-black"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Overlays for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/30 to-deep-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-transparent to-deep-black opacity-60"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-deep-black/80"></div>
          
          {/* Blood-red atmospheric glow */}
          <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-blood-red/20 to-transparent"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-20">
        {/* Decorative element */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="h-px w-12 bg-blood-red"></div>
          <span className="text-steel-silver text-[10px] md:text-xs uppercase tracking-[1em] font-black">
            The Final Season
          </span>
          <div className="h-px w-12 bg-blood-red"></div>
        </div>

        {/* Massive Emotional Headline */}
        <h1 className="overflow-hidden leading-[0.8] mb-8">
          <span 
            ref={title1Ref}
            className="block text-5xl sm:text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-off-white italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            Freedom
          </span>
          <span 
            ref={title2Ref}
            className="block text-5xl sm:text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-blood-red italic drop-shadow-[0_10px_40px_rgba(139,0,0,0.4)]"
          >
            Is Death
          </span>
        </h1>

        {/* Subheading */}
        <p 
          ref={subTextRef}
          className="max-w-xl mx-auto text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] leading-loose uppercase font-bold mb-12 opacity-80"
        >
          "If you win, you live. If you lose, you die. If you don't fight, you can't win."
        </p>
        
        {/* CTA Buttons */}
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA */}
          <button className="relative group overflow-hidden px-12 py-5 bg-blood-red text-off-white text-[10px] uppercase tracking-[0.4em] font-black border border-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,0,0,0.6)] active:scale-95">
            <span className="relative z-10">Join the Corps</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>

          {/* Secondary CTA */}
          <button className="px-12 py-5 border border-white/20 text-off-white text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-deep-black transition-all duration-500 active:scale-95">
            Legacy Story
          </button>
        </div>
      </div>

      
      
      {/* Corner Accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/5 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/5 pointer-events-none"></div>
    </section>
  )
}

export default Hero
