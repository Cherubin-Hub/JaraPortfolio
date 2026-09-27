import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectGallery />
      <Services />
      <Process />
      <Testimonials />
    </main>
  );
}
