import { Lightbulb, Search, LayoutGrid, MonitorPlay, Smartphone, CheckCircle } from "lucide-react";

const processSteps = [
  { 
    id: "01", 
    title: "Understand", 
    desc: "I listen closely to understand your business goals, user needs, and product vision.", 
    icon: Lightbulb 
  },
  { 
    id: "02", 
    title: "Research", 
    desc: "I explore user behavior and competitor trends to shape effective design strategies.", 
    icon: Search 
  },
  { 
    id: "03", 
    title: "Wireframe", 
    desc: "I create low-fidelity layouts to map out structure, navigation, and user flow.", 
    icon: LayoutGrid 
  },
  { 
    id: "04", 
    title: "Visual Design", 
    desc: "I create high-fidelity layouts to map out structure, navigation, and user flow.", 
    icon: MonitorPlay 
  },
  { 
    id: "05", 
    title: "Prototyping", 
    desc: "I build interactive prototypes to test user experience before development.", 
    icon: Smartphone 
  },
  { 
    id: "06", 
    title: "Handoff & Support", 
    desc: "I deliver organized design assets and support developers for a smooth launch.", 
    icon: CheckCircle 
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Section Heading ── */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold font-heading sm:text-4xl">
            From <span className="text-primary-light italic">Idea to Interface</span>
          </h2>
          <p className="mt-4 text-foreground-muted max-w-2xl">
            A seamless journey that transforms ideas into user-friendly digital products.
          </p>
        </div>

        {/* ── 6-Step Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                className="p-8 rounded-2xl border border-border bg-background-card hover:border-primary/50 transition-colors relative overflow-hidden group"
              >
                {/* Large Background Number (Watermark effect) */}
                <span className="absolute top-2 right-4 text-7xl font-black font-heading text-background opacity-50 group-hover:text-primary/10 transition-colors pointer-events-none select-none z-0">
                  {step.id}
                </span>
                
                {/* Card Content (z-10 para nasa ibabaw ng background number) */}
                <div className="relative z-10">
                  <Icon className="text-primary-light mb-6" size={32} />
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
