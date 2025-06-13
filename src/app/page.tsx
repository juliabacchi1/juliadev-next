import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechSection from "./components/TechSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechSection />
      <WorkSection />
      <ContactSection />
      <BlogSection />
    </main>
  );
}
