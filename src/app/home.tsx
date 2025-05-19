import AvatarSection from "@/components/AvatarSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function HomePage() {
  return (
    <main className="relative bg-[#0d0d0d] text-white scroll-smooth">
      <Head>
        <title>Nguyễn Ngọc Quỳnh Như - CV cá nhân</title>
        <meta name="description" content="CV cá nhân ngành QA - Nguyễn Ngọc Quỳnh Như" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Nền particles */}
      <ParticlesBackground />

      {/* Home / Avatar Section */}
      <section id="home" className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-6 pt-32 pb-10 scroll-mt-28">
        <AvatarSection />
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-6 py-16 scroll-mt-28">
        <AboutSection />
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 px-6 py-16 scroll-mt-28">
        <SkillsSection />
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 px-6 py-16 scroll-mt-28">
        <ServicesSection />
      </section>

      {/* Portfolio / Testimonials */}
      <section id="portfolio" className="relative z-10 px-6 py-16 scroll-mt-28">
        <TestimonialsSection />
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 px-6 py-16 scroll-mt-28">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
