import Presentation from "@/components/Presentation";
import About from "@/components/About";
import Tecnologies from "@/components/Tecnologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center font-mono">
      <Presentation />
      <section className="w-9/12">
        <About />
        <Tecnologies />
        <Projects />
        <Contact />
      </section>
    </main>
  );
}
