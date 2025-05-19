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
    <main className="relative bg-[#0d0d0d] text-white">
      <Head>
        <title>Nguyễn Ngọc Quỳnh Như - CV cá nhân</title>
        <meta name="description" content="CV cá nhân ngành QA - Nguyễn Ngọc Quỳnh Như" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Nền particles */}
      <ParticlesBackground />

      {/* Section Avatar + Thông tin ngắn */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-6 pt-24 pb-10">
        <AvatarSection />
      </section>

      {/* About Me + Contact Info */}
      <section className="relative z-10 px-6 py-16 bg-[#0d0d0d]">
        <AboutSection />
      </section>

      {/* My Work Skills */}
      <section className="relative z-10 px-6 py-16 bg-[#0d0d0d]">
        <SkillsSection />
      </section>

      {/* My Services */}
      <section className="relative z-10 px-6 py-16 bg-[#0d0d0d]">
        <ServicesSection />
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-16 bg-[#0d0d0d]">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-6 py-16 bg-[#0d0d0d]">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
