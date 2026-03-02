import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CharacterPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple fade-in for the page
            gsap.fromTo(
                containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power2.inOut" }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-deep-black text-off-white pt-32 pb-20 px-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-blood-red mb-4">
                        Character Profiles
                    </h1>
                    <p className="text-xl md:text-2xl text-steel-silver max-w-3xl mx-auto">
                        Meet the heroes and villains who shaped the world of Attack on Titan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Eren Yeager */}
                    <div className="bg-dark-grey rounded-xl overflow-hidden shadow-2xl hover:shadow-blood-red/20 transition-all duration-300 group">
                        <div className="h-64 overflow-hidden">
                            <img
                                src="https://i.pinimg.com/1200x/9a/79/2b/9a792b3a261dc41459858edfd2a46c78.jpg"
                                alt="Eren Yeager"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-off-white mb-2">Eren Yeager</h2>
                            <p className="text-blood-red font-semibold mb-4">Protagonist</p>
                            <p className="text-steel-silver leading-relaxed">
                                A determined young man who dreams of freedom and seeks revenge against the Titans after his hometown is destroyed.
                            </p>
                        </div>
                    </div>

                    {/* Mikasa Ackerman */}
                    <div className="bg-dark-grey rounded-xl overflow-hidden shadow-2xl hover:shadow-blood-red/20 transition-all duration-300 group">
                        <div className="h-64 overflow-hidden">
                            <img
                                src="https://i.pinimg.com/736x/70/d0/f2/70d0f28d27f2274880ffb1250a455763.jpg"
                                alt="Mikasa Ackerman"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-off-white mb-2">Mikasa Ackerman</h2>
                            <p className="text-blood-red font-semibold mb-4">Central Figure</p>
                            <p className="text-steel-silver leading-relaxed">
                                Eren's childhood friend and adoptive sister, known for her exceptional combat skills and unwavering loyalty.
                            </p>
                        </div>
                    </div>

                    {/* Armin Arlert */}
                    <div className="bg-dark-grey rounded-xl overflow-hidden shadow-2xl hover:shadow-blood-red/20 transition-all duration-300 group">
                        <div className="h-64 overflow-hidden">
                            <img
                                src="https://i.pinimg.com/736x/cb/c8/34/cbc8340f8f3177b7aa2812e2c7fa6e9b.jpg"
                                alt="Armin Arlert"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-off-white mb-2">Armin Arlert</h2>
                            <p className="text-blood-red font-semibold mb-4">Strategist</p>
                            <p className="text-steel-silver leading-relaxed">
                                Eren and Mikasa's intelligent friend who relies on his wits rather than strength to overcome challenges.
                            </p>
                        </div>
                    </div>

                    {/* Levi Ackerman */}
                    <div className="bg-dark-grey rounded-xl overflow-hidden shadow-2xl hover:shadow-blood-red/20 transition-all duration-300 group">
                        <div className="h-64 overflow-hidden">
                            <img
                                src="https://i.pinimg.com/736x/92/b8/32/92b832be1baa248ff4ae930ccc2cce53.jpg"
                                alt="Levi Ackerman"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-off-white mb-2">Levi Ackerman</h2>
                            <p className="text-blood-red font-semibold mb-4">Humanity's Strongest</p>
                            <p className="text-steel-silver leading-relaxed">
                                The stoic and highly skilled captain of the Survey Corps, renowned for his combat prowess.
                            </p>
                        </div>
                    </div>

                    {/* Erwin Smith */}
                    <div className="bg-dark-grey rounded-xl overflow-hidden shadow-2xl hover:shadow-blood-red/20 transition-all duration-300 group">
                        <div className="h-64 overflow-hidden">
                            <img
                                src="https://i.pinimg.com/1200x/9e/c5/cd/9ec5cd844c8e7313a7340c80b7c4b8c3.jpg"
                                alt="Erwin Smith"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-off-white mb-2">Erwin Smith</h2>
                            <p className="text-blood-red font-semibold mb-4">Commander</p>
                            <p className="text-steel-silver leading-relaxed">
                                The charismatic and strategic commander of the Survey Corps, dedicated to uncovering the truth.
                            </p>
                        </div>
                    </div>

                    {/* Hange Zoë */}
                    <div className="bg-dark-grey rounded-xl overflow-hidden shadow-2xl hover:shadow-blood-red/20 transition-all duration-300 group">
                        <div className="h-64 overflow-hidden">
                            <img
                                src="https://i.pinimg.com/1200x/f5/20/8b/f5208ba95bf860423fdf78ad9f7f931d.jpg"
                                alt="Hange Zoë"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-off-white mb-2">Hange Zoë</h2>
                            <p className="text-blood-red font-semibold mb-4">Scientist</p>
                            <p className="text-steel-silver leading-relaxed">
                                An eccentric and brilliant scientist of the Survey Corps, known for her intense interest in Titans and her role in developing new technologies for humanity's survival.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
