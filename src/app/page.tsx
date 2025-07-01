import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/Projects";
import Showcase from "@/components/layout/Showcase";
import Testimonials from "@/components/layout/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <Testimonials />
      <Projects />
    </main>
  );
}
