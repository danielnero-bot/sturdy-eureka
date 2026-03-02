import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Link } from 'react-router-dom';

// Importing assets
import humanityImg from '../assets/humanity_bg.png';
import titanImg from '../assets/titan_bg.png';

gsap.registerPlugin(ScrollTrigger);

const Conflict = () => {
  const containerRef = useRef(null);
  const humanityRef = useRef(null);
  const titanRef = useRef(null);
  const contentTitanRef = useRef(null);
  const contentHumanityRef = useRef(null);
  const finalOverlayRef = useRef(null);
  const finalMessageRef = useRef(null);
  const humanityBgRef = useRef(null);
  const titanBgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Initial State: 50/50 split
      
      // Phase 2: Titans Advance
      tl.to(titanRef.current, {
        width: "75%",
        duration: 2,
        ease: "power2.inOut"
      }, 0)
      .to(humanityRef.current, {
        width: "25%",
        duration: 2,
        ease: "power2.inOut"
      }, 0)
      .to(contentHumanityRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power2.inOut"
      }, 0.5)
      .to(humanityBgRef.current, {
        filter: "grayscale(100%) brightness(0.2)",
        scale: 1.5,
        duration: 2
      }, 0);

      // Rumble effect during transition
      tl.to(containerRef.current, {
        x: (i) => (i % 2 === 0 ? 5 : -5),
        duration: 0.05,
        repeat: 40,
        yoyo: true,
        ease: "none"
      }, 0.5);

      // Phase 3: Domination
      tl.to(titanRef.current, {
        width: "100%",
        duration: 2,
        ease: "power3.inOut"
      }, 2)
      .to(humanityRef.current, {
        width: "0%",
        duration: 2,
        ease: "power3.inOut"
      }, 2)
      .to(titanBgRef.current, {
        scale: 1,
        filter: "contrast(150%) brightness(0.5) sepia(0.3) hue-rotate(-15deg)",
        duration: 3
      }, 2)
      .to(finalOverlayRef.current, {
        opacity: 1,
        backgroundColor: "rgba(139, 0, 0, 0.5)",
        duration: 2
      }, 2.5);

      // Big Headline and CTA
      tl.fromTo(finalMessageRef.current, 
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "expo.out" },
        3.5
      )
      .set(finalMessageRef.current, { pointerEvents: "auto" }, 3.5);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-deep-black"
      id="conflict"
    >
      {/* Humanity Side */}
      <div 
        ref={humanityRef}
        className="absolute left-0 top-0 h-full w-1/2 overflow-hidden z-10"
      >
        <div 
          ref={humanityBgRef}
          className="absolute inset-0 grayscale contrast-125 scale-110"
          style={{ 
            backgroundImage: `url(${humanityImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div ref={contentHumanityRef} className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center w-[50vw]">
            <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-8 bg-white/30"></div>
                <span className="text-steel-silver text-[10px] md:text-xs uppercase tracking-[1em] font-medium">The Last Bastion</span>
                <div className="h-px w-8 bg-white/30"></div>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase text-off-white italic drop-shadow-2xl">
                Humanity
            </h2>
            <p className="mt-8 text-steel-silver/60 text-[10px] md:text-xs uppercase tracking-[0.5em] max-w-xs leading-relaxed">
                Standing within the false peace of the walls.
            </p>
        </div>
      </div>

      {/* Titan Side */}
      <div 
        ref={titanRef}
        className="absolute right-0 top-0 h-full w-1/2 overflow-hidden z-20"
      >
        <div 
          ref={titanBgRef}
          className="absolute inset-0 contrast-150 scale-125"
          style={{ 
            backgroundImage: `url(${titanImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div ref={contentTitanRef} className="z-10 h-full flex flex-col items-center justify-center p-12 text-center w-[50vw] absolute right-0">
            <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-8 bg-blood-red/50"></div>
                <span className="text-blood-red text-[10px] md:text-xs uppercase tracking-[1em] font-bold">The Looming Threat</span>
                <div className="h-px w-8 bg-blood-red/50"></div>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase text-blood-red italic drop-shadow-[0_0_30px_rgba(139,0,0,0.6)]">
                Titans
            </h2>
            <p className="mt-8 text-blood-red/40 text-[10px] md:text-xs uppercase tracking-[0.5em] max-w-xs leading-relaxed">
                A legacy of hunger and absolute domination.
            </p>
        </div>
      </div>

      {/* Phase 3 Red Overlay */}
      <div 
        ref={finalOverlayRef}
        className="absolute inset-0 z-30 pointer-events-none opacity-0"
      />
      
      {/* Phase 3 Final Content */}
      <div 
        ref={finalMessageRef}
        className="absolute inset-0 z-40 flex flex-col items-center justify-center p-6 text-center opacity-0 pointer-events-none"
      >
        <div className="mb-6 h-[2px] w-24 bg-white/80"></div>
        <h3 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter text-white italic mb-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] leading-none">
          When Fear <br/> Takes Control...
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 mt-12">
            <Link to="/characters" className="group relative px-16 py-6 bg-blood-red text-white uppercase tracking-[0.4em] font-black transition-all hover:shadow-[0_0_60px_rgba(139,0,0,0.8)] active:scale-95 no-underline">
                <span className="relative z-10">Fight Back</span>
                <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </Link>
            <Link to="/titans" className="px-16 py-6 border border-white text-white uppercase tracking-[0.4em] font-black hover:bg-white hover:text-black transition-all duration-500 active:scale-95 no-underline">
                Witness Their Power
            </Link>
        </div>

        <div className="mt-20 flex flex-col items-center opacity-40">
            <div className="w-1 h-12 bg-linear-to-b from-white to-transparent"></div>
            <span className="text-[8px] uppercase tracking-[1em] mt-4">Scroll to Survive</span>
        </div>
      </div>

      {/* Center Divider - disappears as Titans take over */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 z-30 transform -translate-x-1/2 pointer-events-none" />

      {/* Atmospheric particles or vignette could go here */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/80 z-50"></div>
    </section>
  );
};

export default Conflict;
