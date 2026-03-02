import React, { useLayoutEffect, useRef } from 'react';
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Desktop Horizontal Split
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
    
          tl.to(containerRef.current, {
            x: (i) => (i % 2 === 0 ? 5 : -5),
            duration: 0.05,
            repeat: 40,
            yoyo: true,
            ease: "none"
          }, 0.5);
    
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
    
          tl.fromTo(finalMessageRef.current, 
            { y: 200, opacity: 0 },
            { y: 0, opacity: 1, duration: 2, ease: "expo.out" },
            3.5
          )
          .set(finalMessageRef.current, { pointerEvents: "auto" }, 3.5);
      });

      mm.add("(max-width: 1023px)", () => {
        // Mobile Vertical Split
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
    
          tl.to(titanRef.current, {
            height: "100%",
            duration: 2,
            ease: "power2.inOut"
          }, 0)
          .to(humanityRef.current, {
            height: "0%",
            duration: 2,
            ease: "power2.inOut"
          }, 0)
          .to(contentHumanityRef.current, {
            opacity: 0,
            y: -50,
            duration: 1.5,
            ease: "power2.inOut"
          }, 0.5)
          .to(humanityBgRef.current, {
            filter: "grayscale(300%) brightness(0.1)",
            scale: 1.3,
            duration: 2
          }, 0);
    
          tl.to(containerRef.current, {
            x: (i) => (i % 2 === 0 ? 4 : -4),
            duration: 0.05,
            repeat: 20,
            yoyo: true,
            ease: "none"
          }, 0.5);
    
          tl.to(titanBgRef.current, {
            scale: 1,
            filter: "contrast(130%) brightness(0.4) sepia(0.2)",
            duration: 3
          }, 2)
          .to(finalOverlayRef.current, {
            opacity: 1,
            backgroundColor: "rgba(139, 0, 0, 0.6)",
            duration: 2
          }, 2.5);
    
          tl.fromTo(finalMessageRef.current, 
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 2, ease: "expo.out" },
            3.5
          )
          .set(finalMessageRef.current, { pointerEvents: "auto" }, 3.5);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="conflict-viewport bg-deep-black">
      <div 
        ref={containerRef} 
        className="relative h-screen w-full overflow-hidden"
        id="conflict"
      >
      {/* Humanity Side */}
      <div 
        ref={humanityRef}
        className="absolute left-0 top-0 w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden z-10"
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
        
        <div ref={contentHumanityRef} className="relative z-10 h-full flex flex-col items-center justify-center p-6 lg:p-12 text-center w-full lg:w-[50vw]">
            <div className="flex items-center space-x-4 mb-4 lg:mb-6">
                <div className="h-px w-6 lg:w-8 bg-white/30"></div>
                <span className="text-steel-silver text-[8px] lg:text-xs uppercase tracking-[1em] font-medium">The Last Garrison</span>
                <div className="h-px w-6 lg:w-8 bg-white/30"></div>
            </div>
            <h2 className="text-4xl lg:text-8xl font-black uppercase text-off-white italic drop-shadow-2xl">
                Humanity
            </h2>
            <p className="mt-4 lg:mt-8 text-steel-silver/60 text-[8px] lg:text-xs uppercase tracking-[0.5em] max-w-[200px] lg:max-w-xs leading-relaxed">
                Standing within the false peace of the walls.
            </p>
        </div>
      </div>

      {/* Titan Side */}
      <div 
        ref={titanRef}
        className="absolute left-0 lg:left-auto right-0 bottom-0 lg:top-0 h-1/2 lg:h-full w-full lg:w-1/2 overflow-hidden z-20"
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
        
        <div ref={contentTitanRef} className="z-10 h-full flex flex-col items-center justify-center p-6 lg:p-12 text-center w-full lg:w-[50vw] absolute right-0">
            <div className="flex items-center space-x-4 mb-4 lg:mb-6">
                <div className="h-px w-6 lg:w-8 bg-blood-red/50"></div>
                <span className="text-blood-red text-[8px] lg:text-xs uppercase tracking-[1em] font-bold">The Looming Threat</span>
                <div className="h-px w-6 lg:w-8 bg-blood-red/50"></div>
            </div>
            <h2 className="text-4xl lg:text-8xl font-black uppercase text-blood-red italic drop-shadow-[0_0_30px_rgba(139,0,0,0.6)]">
                Titans
            </h2>
            <p className="mt-4 lg:mt-8 text-blood-red/40 text-[8px] lg:text-xs uppercase tracking-[0.5em] max-w-[200px] lg:max-w-xs leading-relaxed">
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
        <div className="mb-4 lg:mb-6 h-[2px] w-16 lg:w-24 bg-white/80"></div>
        <h3 className="text-3xl lg:text-[10rem] font-black uppercase tracking-tighter text-white italic mb-8 lg:mb-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] leading-none">
          When Fear <br/> Takes Control...
        </h3>
        
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-4 lg:mt-12">
            <Link to="/characters" className="group relative px-10 lg:px-16 py-4 lg:py-6 bg-blood-red text-white uppercase tracking-[0.4em] font-black transition-all hover:shadow-[0_0_60px_rgba(139,0,0,0.8)] active:scale-95 no-underline text-[10px] lg:text-base">
                <span className="relative z-10">Fight Back</span>
                <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </Link>
            <Link to="/titans" className="px-10 lg:px-16 py-4 lg:py-6 border border-white text-white uppercase tracking-[0.4em] font-black hover:bg-white hover:text-black transition-all duration-500 active:scale-95 no-underline text-[10px] lg:text-base">
                Witness Their Power
            </Link>
        </div>

        <div className="mt-12 lg:mt-20 flex flex-col items-center opacity-40">
            <div className="w-1 h-8 lg:h-12 bg-linear-to-b from-white to-transparent"></div>
            <span className="text-[6px] lg:text-[8px] uppercase tracking-[1em] mt-4">Scroll to Survive</span>
        </div>
      </div>

      {/* Center Divider - disappears as Titans take over */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 z-30 transform -translate-x-1/2 pointer-events-none" />

      {/* Atmospheric particles or vignette could go here */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/80 z-50"></div>
      </div>
    </section>
  );
};

export default Conflict;
