import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectGallery() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-border bg-background-card overflow-hidden hover:border-border-hover transition-colors"
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                  {project.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Explore All Button ── */}
        <div className="mt-12 flex justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-background-card transition-colors"
          >
            Explore All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
