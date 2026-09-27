import { LayoutTemplate, Smartphone, PenTool, Code, ArrowRight } from "lucide-react";

// Dito natin nilagay yung listahan ng services para madaling i-edit.
const servicesList = [
  {
    title: "UX & UI Design",
    description: "Clean and intuitive interfaces for better user experiences.",
    icon: LayoutTemplate,
  },
  {
    title: "Web & Mobile App",
    description: "Modern and responsive web and mobile applications.",
    icon: Smartphone,
  },
  {
    title: "Design & Creative",
    description: "Creative designs that elevate your brand identity.",
    icon: PenTool,
  },
  {
    title: "Development",
    description: "Scalable front-end architectures and full-stack solutions.",
    icon: Code,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative bg-background">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16">
        
        {/* ── Left Side: Text Content ── */}
        <div className="flex-1 lg:sticky lg:top-32 h-fit">
          <span className="inline-block rounded-full bg-background-card px-4 py-1.5 text-sm text-foreground-muted border border-border mb-6">
            WHAT I DO
          </span>
          <h2 className="text-4xl font-bold font-heading leading-tight sm:text-5xl">
            Digital Service to<br />
            Grow <span className="text-primary-light">Your Business.</span>
          </h2>
          <p className="mt-6 text-foreground-muted max-w-md">
            We provide modern UI/UX design, web & mobile app development, creative design, and scalable development solutions to help businesses build powerful digital experiences.
          </p>
        </div>

        {/* ── Right Side: Service Cards ── */}
        <div className="flex-1 flex flex-col gap-4">
          {servicesList.map((service, index) => {
            // Kinukuha natin yung icon mula sa data natin
            const Icon = service.icon; 
            
            return (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl border border-border bg-background-card hover:bg-background-card-hover hover:border-border-hover transition-all cursor-pointer gap-4"
              >
                <div className="flex items-center gap-6">
                  {/* Icon Container */}
                  <div className="p-3 bg-background rounded-xl border border-border">
                    <Icon className="text-primary-light" size={24} />
                  </div>
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground">{service.title}</h3>
                    <p className="text-sm text-foreground-muted mt-1">{service.description}</p>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-full bg-background items-center justify-center border border-border group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
