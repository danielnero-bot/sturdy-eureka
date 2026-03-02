import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import wallsImg from '../assets/walls.png'
import conflictImg from '../assets/conflict.png'
import wall1 from '../assets/rose.png'
import wall2 from '../assets/maria.png'
import wall3 from '../assets/sheena.png'

gsap.registerPlugin(ScrollTrigger)

const World = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)
  const wallCardsRef = useRef([])
  const conflictTextRef = useRef(null)
  const conflictImageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title and Intro Animation
      gsap.fromTo([titleRef.current, introRef.current], 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.3,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      )

      // Wall Cards Animation
      gsap.fromTo(wallCardsRef.current,
        { scale: 0.9, y: 100, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wallCardsRef.current[0],
            start: "top 75%",
          }
        }
      )

      // Conflict Section Animation
      gsap.fromTo(conflictTextRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: conflictTextRef.current,
            start: "top 80%",
          }
        }
      )

      gsap.fromTo(conflictImageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: conflictImageRef.current,
            start: "top 80%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const walls = [
    { name: 'Wall Maria', desc: 'The outermost wall, the first line of defense.', distance: 'Outer', img: wall1 },
    { name: 'Wall Rose', desc: 'The middle wall, protecting the inner cities.', distance: 'Middle', img: wall2 },
    { name: 'Wall Sheena', desc: 'The innermost wall, where the elite reside.', distance: 'Core', img: wall3 }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-deep-black py-32 px-6 overflow-hidden"
    >
      {/* Cinematic Background Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${wallsImg})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Short World Overview */}
        <div className="mb-32 text-center md:text-left max-w-3xl">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-off-white italic"
          >
            The World <span className="text-blood-red">Behind the Walls</span>
          </h2>
          <div ref={introRef} className="space-y-6 text-steel-silver text-sm md:text-lg leading-relaxed uppercase tracking-wider font-medium">
            <p>Humanity lives behind massive walls, prisoners in their own sanctuary.</p>
            <p className="text-off-white font-black">Titans threaten extinction. Every day is a struggle for survival.</p>
            <p>The fight for freedom begins here, in the shadow of the giants.</p>
          </div>
        </div>

        {/* The Three Walls (Visual Feature) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {walls.map((wall, index) => (
            <div 
              key={wall.name}
              ref={el => wallCardsRef.current[index] = el}
              className="group relative h-[350px] md:h-[450px] bg-ash-gray border border-white/5 rounded-sm overflow-hidden flex flex-col justify-end p-6 md:p-8 transition-all duration-500 hover:border-blood-red/30"
            >
              {/* Card Image Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-700 " 
                style={{ backgroundImage: `url(${wall.img})` }}
              ></div>
              
              <div className="relative z-20">
                <span className="text-blood-red text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black mb-2 block">
                  {wall.distance}
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-off-white mb-4  transition-colors">
                  {wall.name}
                </h3>
                <p className="text-steel-silver text-xs leading-relaxed uppercase tracking-widest font-bold">
                  {wall.desc}
                </p>
              </div>
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-0 bg-blood-red/50 transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="hidden xl:block absolute top-[50%] -right-20 -rotate-90 select-none pointer-events-none">
        <span className="text-[150px] font-black text-white/[0.02] uppercase tracking-[0.5em]">
          SURVIVE
        </span>
      </div>
    </section>
  )
}

export default World
