import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollDisplaySection from "@/components/ScrollDisplaySection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <ScrollDisplaySection />
      <About />
      <Skills />
      <Projects />
      <Pricing />
      <Footer />
    </main>
  );
}
