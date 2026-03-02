import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import erenImg from '../assets/ereny.png';
import mikasaImg from '../assets/m.png';
import leviImg from '../assets/lev.png'; 

gsap.registerPlugin(ScrollTrigger);

const Characters = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cursorRef = useRef(null);
    const [showAll, setShowAll] = useState(false);

    const characters = [
        {
            id: 'eren',
            name: 'Eren Yeager',
            role: 'The Attack Titan',
            desc: 'A boy who seeks the horizon. "I will kill them all... every last one of them."',
            img: erenImg,
            color: '#8B0000',
            stats: { strength: 95, skill: 85, courage: 100 }
        },
        {
            id: 'mikasa',
            name: 'Mikasa Ackerman',
            role: 'The Protector',
            desc: 'The deadliest soldier of the 104th. Her strength is matched only by her loyalty.',
            img: mikasaImg,
            color: '#2C2C2C',
            stats: { strength: 100, skill: 100, courage: 90 }
        },
        {
            id: 'levi',
            name: 'Levi Ackerman',
            role: 'Humanity\'s Strongest',
            desc: 'Squad Captain of the Special Operations Squad. A storm of steel on the battlefield.',
            img: leviImg,
            color: '#B0B0B0',
            stats: { strength: 110, skill: 110, courage: 95 }
        },
        {
            id: 'armin',
            name: 'Armin Arlert',
            role: 'The Tactician',
            desc: 'His genius has saved humanity more times than any blade. "Someone who can\'t sacrifice anything, can\'t change anything."',
            img: erenImg, // Placeholder
            color: '#EAEAEA',
            stats: { strength: 40, skill: 115, courage: 85 }
        },
        {
            id: 'erwin',
            name: 'Erwin Smith',
            role: 'The Commander',
            desc: 'The 13th Commander of the Survey Corps. A man who sacrificed his heart for the truth.',
            img: leviImg, // Placeholder
            color: '#B0B0B0',
            stats: { strength: 90, skill: 100, courage: 115 }
        },
        {
            id: 'hange',
            name: 'Hange Zoe',
            role: 'The Scientist',
            desc: 'Exuberant, eccentric, and brilliant. Her curiosity is as dangerous as her blades.',
            img: mikasaImg, // Placeholder
            color: '#8B0000',
            stats: { strength: 80, skill: 105, courage: 90 }
        }
    ];

    const visibleCharacters = showAll ? characters : characters.slice(0, 3);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance Title
            gsap.fromTo(titleRef.current, 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Card Entrance
            gsap.fromTo(".char-card", 
                { y: 100, opacity: 0, scale: 0.9 },
                { 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    duration: 1.2, 
                    stagger: 0.2, 
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: ".char-grid",
                        start: "top 75%",
                    }
                }
            );

            // Custom Cursor follower logic
            const moveCursor = (e) => {
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', moveCursor);
            return () => window.removeEventListener('mousemove', moveCursor);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const toggleShowAll = () => {
        if (!showAll) {
            setShowAll(true);
            // Animate new cards appearing
            setTimeout(() => {
                gsap.fromTo(".char-card:nth-child(n+4)", 
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
                );
            }, 0);
        } else {
            setShowAll(false);
        }
    };

    return (
        <section 
            ref={sectionRef}
            className="relative min-h-screen bg-deep-black py-40 px-6 overflow-hidden select-none"
            id="characters"
        >
            {/* Custom Interactive Cursor for this section */}
            <div 
                ref={cursorRef}
                className="hidden lg:block fixed top-0 left-0 w-8 h-8 border border-blood-red rounded-full pointer-events-none z-[100] translate-x-[-50%] translate-y-[-50%] mix-blend-difference"
            />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 char-header">
                    <div className="max-w-xl">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="h-px w-12 bg-blood-red"></div>
                            <span className="text-blood-red text-[10px] md:text-xs uppercase tracking-[1em] font-black">Archive // 104th</span>
                        </div>
                        <h2 
                            ref={titleRef}
                            className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-off-white italic leading-none"
                        >
                            Soldiers <br/> of the <span className="text-blood-red">Abyss</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right mb-4">
                        <span className="text-steel-silver text-[10px] uppercase tracking-[0.5em] font-bold">Total Enlisted: 0{characters.length}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 char-grid">
                    {visibleCharacters.map((char, index) => (
                        <div 
                            key={char.id}
                            className="char-card group relative aspect-[3/4] overflow-hidden bg-ash-gray border border-white/5 cursor-crosshair"
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {/* Character Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${char.img})` }}
                            />
                            
                            {/* Gradients & Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-b from-deep-black/30 via-transparent to-deep-black/30 opacity-60" />
                            
                            {/* Red Flash on Hover */}
                            <div className="absolute inset-0 bg-blood-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Info Overlay */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <span className="text-blood-red text-[10px] uppercase tracking-[0.4em] font-black mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {char.role}
                                </span>
                                <h3 className="text-3xl font-black uppercase tracking-widest text-off-white mb-6 group-hover:text-blood-red transition-colors duration-300 italic text-shadow-lg">
                                    {char.name}
                                </h3>
                                
                                <p className="text-steel-silver text-xs leading-relaxed uppercase tracking-widest font-bold mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    {char.desc}
                                </p>

                                {/* Stats Bar */}
                                <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                    {Object.entries(char.stats).map(([key, val]) => (
                                        <div key={key} className="flex items-center space-x-4">
                                            <span className="text-[8px] uppercase tracking-widest text-white/40 w-16">{key}</span>
                                            <div className="flex-1 h-[2px] bg-white/10 overflow-hidden">
                                                <div 
                                                    className="h-full bg-blood-red transition-all duration-1000 delay-300"
                                                    style={{ width: `${(val / 115) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Corner Design Element */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/10 group-hover:border-blood-red transition-colors" />
                            <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-white/10 group-hover:border-blood-red transition-colors" />
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <div className="mt-20 flex justify-center">
                    <button 
                        onClick={toggleShowAll}
                        className="group relative px-12 py-5 border border-white/10 overflow-hidden transition-all duration-500 hover:border-blood-red/50 active:scale-95"
                    >
                        <span className="relative z-10 text-off-white text-[10px] uppercase tracking-[0.5em] font-black group-hover:text-white transition-colors">
                            {showAll ? 'Collapse File' : 'See Full Register'}
                        </span>
                        <div className="absolute inset-0 bg-blood-red translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                </div>

                {/* Background Large Text (Parallax) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none whitespace-nowrap opacity-[0.02]">
                    <span className="text-[400px] font-black uppercase tracking-[0.1em] text-white italic">
                        RECLAIM
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Characters;
