import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const characters = [
    {
        name: "Eren Yeager",
        role: "The Attack Titan",
        description: "A determined young man who dreams of freedom and seeks revenge against the Titans, eventually becoming the catalyst for the world's restructuring.",
        image: "https://i.pinimg.com/1200x/9a/79/2b/9a792b3a261dc41459858edfd2a46c78.jpg",
        group: "Protagonists"
    },
    {
        name: "Mikasa Ackerman",
        role: "Humanity's Strongest Blade",
        description: "Eren's childhood friend and adoptive sister, known for her exceptional combat skills, unwavering loyalty, and unparalleled strength as an Ackerman.",
        image: "https://i.pinimg.com/736x/70/d0/f2/70d0f28d27f2274880ffb1250a455763.jpg",
        group: "Protagonists"
    },
    {
        name: "Armin Arlert",
        role: "The Colossal Strategist",
        description: "Eren and Mikasa's intelligent friend who relies on his wits and strategic mind, eventually inheriting the power of the Colossal Titan.",
        image: "https://i.pinimg.com/736x/cb/c8/34/cbc8340f8f3177b7aa2812e2c7fa6e9b.jpg",
        group: "Protagonists"
    },
    {
        name: "Levi Ackerman",
        role: "Humanity's Strongest Soldier",
        description: "The stoic and highly skilled captain of the Survey Corps, renowned for his ruthless efficiency in combat and unwavering dedication to humanity.",
        image: "https://i.pinimg.com/736x/92/b8/32/92b832be1baa248ff4ae930ccc2cce53.jpg",
        group: "Survey Corps"
    },
    {
        name: "Erwin Smith",
        role: "Commander of the Corps",
        description: "The charismatic 13th Commander of the Survey Corps, known for his bold strategies and his willingness to sacrifice everything for the truth.",
        image: "https://i.pinimg.com/1200x/9e/c5/cd/9ec5cd844c8e7313a7340c80b7c4b8c3.jpg",
        group: "Survey Corps"
    },
    {
        name: "Hange Zoë",
        role: "14th Commander & Scientist",
        description: "An eccentric and brilliant scientist of the Survey Corps, known for her intense interest in Titans and her role in developing new technologies.",
        image: "https://i.pinimg.com/1200x/f5/20/8b/f5208ba95bf860423fdf78ad9f7f931d.jpg",
        group: "Survey Corps"
    },
    {
        name: "Jean Kirstein",
        role: "Pragmatic Leader",
        description: "A graduate of the 104th Training Corps who evolved from a selfish cadet into one of the Survey Corps' most reliable and realistic leaders.",
        image: "https://i.pinimg.com/736x/8a/0a/6a/8a0a6a386927a3c3e7f2249e0835f8c3.jpg",
        group: "Survey Corps"
    },
    {
        name: "Sasha Blouse",
        role: "Expert Marksman",
        description: "A skilled hunter from the Dauper District known for her incredible instincts, archery skills, and her brave heart in the face of danger.",
        image: "https://i.pinimg.com/736x/da/ac/45/daac45300dd34676646736287cd94824.jpg",
        group: "Survey Corps"
    },
    {
        name: "Reiner Braun",
        role: "The Armored Titan",
        description: "A warrior from Marley who infiltrated the Walls, Reiner's fractured psyche reflects his deep guilt and internal conflict between his dual identities.",
        image: "https://i.pinimg.com/736x/01/9b/6e/019b6e511116086f6858e77a28e932b5.jpg",
        group: "Marley Warriors"
    },
    {
        name: "Annie Leonhart",
        role: "The Female Titan",
        description: "A stoic and deadly martial artist who isolated herself from others to complete her secret mission for Marley within the Walls.",
        image: "https://i.pinimg.com/736x/6f/4e/9b/6f4e9b99e9e8f1998fde7c82e0717e88.jpg",
        group: "Marley Warriors"
    },
    {
        name: "Zeke Yeager",
        role: "The Beast Titan",
        description: "The War Chief of the Marley Warriors and Eren's half-brother, who possesses a complex and tragic vision for the fate of all Eldians.",
        image: "https://i.pinimg.com/736x/43/d8/64/43d86498585698b68337777777777777.jpg", // Placeholder Pinterest ID
        group: "Marley Warriors"
    },
    {
        name: "Historia Reiss",
        role: "Queen of the Walls",
        description: "The true heir to the Reiss royal family who rejected her father's legacy to become a strong, independent leader for her people.",
        image: "https://i.pinimg.com/736x/e3/3d/8c/e33d8c8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg", // Placeholder Pinterest ID
        group: "Other"
    }
];

const CharacterCard = ({ character }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <div 
            ref={cardRef}
            className="bg-dark-grey rounded-xl overflow-hidden shadow-2xl hover:shadow-blood-red/20 transition-all duration-300 group"
        >
            <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-blood-red/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1594746858244-e17700204f0f?w=800&auto=format&fit=crop" }}
                />
            </div>
            <div className="p-6">
                <h2 className="text-3xl font-bold text-off-white mb-2">{character.name}</h2>
                <p className="text-blood-red font-semibold mb-4 uppercase tracking-wider text-sm">{character.role}</p>
                <p className="text-steel-silver leading-relaxed">
                    {character.description}
                </p>
            </div>
        </div>
    );
};

const CharacterSection = ({ title, groupCharacters }) => (
    <div className="mb-20">
        <h2 className="text-3xl font-black uppercase text-blood-red mb-10 border-l-4 border-blood-red pl-4">
            {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupCharacters.map((char, index) => (
                <CharacterCard key={index} character={char} />
            ))}
        </div>
    </div>
);

export default function CharacterPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-blood-red mb-4 tracking-tighter">
                        Character Profiles
                    </h1>
                    <div className="h-1 w-24 bg-blood-red mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-steel-silver max-w-3xl mx-auto italic">
                        "If you don't fight, you can't win."
                    </p>
                </div>

                <CharacterSection 
                    title="Key Protagonists" 
                    groupCharacters={characters.filter(c => c.group === "Protagonists")} 
                />
                
                <CharacterSection 
                    title="The Survey Corps" 
                    groupCharacters={characters.filter(c => c.group === "Survey Corps")} 
                />

                <CharacterSection 
                    title="Marleyan Warriors" 
                    groupCharacters={characters.filter(c => c.group === "Marley Warriors")} 
                />

                <CharacterSection 
                    title="Others" 
                    groupCharacters={characters.filter(c => c.group === "Other")} 
                />
            </div>
        </div>
    );
}
