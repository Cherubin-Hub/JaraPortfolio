import Image from "next/image";
import { Play } from "lucide-react";

// Gagamitin muna natin yung profile.png as placeholder image.
const testimonials = [
  {
    id: 1,
    name: "Mitch Brutus",
    role: "Founder - Enutus Vanguard, Inc",
    location: "New York, USA",
    image: "/images/profile.png", 
  },
  {
    id: 2,
    name: "Amir Arshia",
    role: "Owner - Coco-Tours",
    location: "Kingston, Canada",
    image: "/images/profile.png",
  },
  {
    id: 3,
    name: "Mitch Brutus",
    role: "Founder - Enutus Vanguard, Inc",
    location: "New York, USA",
    image: "/images/profile.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative bg-background">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Section Heading ── */}
        <h2 className="text-3xl font-bold font-heading sm:text-4xl mb-16 max-w-md">
          Testimonials That Speak to <span className="text-primary-light italic">My Results</span>
          <span className="text-primary-light"> ✧</span>
        </h2>

        {/* ── Testimonial Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi) => (
            <div 
              key={testi.id} 
              className="group relative rounded-2xl border border-border overflow-hidden bg-background-card h-96 cursor-pointer"
            >
              
              {/* 1. Background Image (Pinaka-ilalim) */}
              <Image
                src={testi.image}
                alt={testi.name}
                fill
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* 2. Dark Gradient Overlay (Nasa ibabaw ng image) */}
              {/* Para siguradong mababasa ang text sa ilalim kahit maputi ang image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />

              {/* 3. Play Button Icon (Nasa pinaka-gitna) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300 shadow-lg">
                <Play className="text-white ml-1" size={24} fill="white" />
              </div>

              {/* 4. Text Info (Nasa pinaka-baba) */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-lg font-bold font-heading text-white">{testi.name}</h3>
                <p className="text-sm text-foreground-muted mt-1">{testi.role}</p>
                <p className="text-xs text-primary-light font-medium mt-1">{testi.location}</p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
