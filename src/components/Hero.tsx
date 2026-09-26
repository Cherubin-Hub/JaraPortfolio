import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
        {/* ── Left Column: Text Content ── */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-4 py-1.5 text-sm text-primary-light">
            🎨 Product Designer | UI/UX Specialist
          </span>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-bold leading-tight font-heading sm:text-5xl lg:text-6xl">
            Designing Digital
            <br />
            Experiences That
            <br />
            Users{" "}
            <span className="text-primary-light">Love.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-lg text-base text-foreground-muted sm:text-lg mx-auto md:mx-0">
            UI/UX Designer helping startups and businesses create modern web &
            mobile products.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
            >
              Hire Me
              <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-border-hover hover:bg-background-card transition-colors"
            >
              <Eye size={16} />
              Latest Work
            </a>
          </div>
        </div>

        {/* ── Right Column: Profile Image ── */}
        <div className="relative flex-1 flex justify-center">
          {/* Purple glow effect behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/30 blur-3xl sm:h-80 sm:w-80" />

          {/* Profile image */}
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border-2 border-border">
            <Image
              src="/images/profile.png"
              alt="Profile photo"
              fill
              className="object-cover object-[center_20%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
