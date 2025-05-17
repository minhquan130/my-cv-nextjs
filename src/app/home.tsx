"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import clsx from "clsx";
import Image from "next/image";
import avatar from "../../public/images/avatar.jpg";



export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  const skills = [
    { name: "HTML", color: "border-red-500" },
    { name: "CSS", color: "border-blue-400" },
    { name: "JavaScript", color: "border-yellow-400" },
    { name: "Node.js", color: "border-green-500" },
    { name: "React", color: "border-cyan-400" },
  ];

  const timeline = [
    { year: "2021 - 2023", color: "bg-pink-500", position: "right" },
    { year: "2023 - 2024", color: "bg-blue-500", position: "left" },
  ];

  const projects = [
    {
      name: "CV cá nhân",
      tech: "Next.js, Tailwind, Framer Motion",
      description: "Một trang web giới thiệu bản thân với animation và dark mode.",
      link: "https://github.com/yourusername/cv-project",
    },
    {
      name: "Trang quản lý bug",
      tech: "React, Node.js",
      description: "Hệ thống quản lý bug đơn giản cho team QA",
      link: "https://github.com/yourusername/bug-tracker",
    },
  ];

  return (
    <div className={clsx("font-sans transition-colors duration-500", darkMode ? "bg-black text-white" : "bg-white text-black")}>
      {/* Header Navbar */}
      <header
        className={clsx(
          "flex justify-between items-center px-10 py-6 sticky top-0 z-50 shadow-md bg-opacity-80 backdrop-blur-md transition-colors duration-500",
          darkMode ? "bg-black text-white" : "bg-white text-black"
        )}
      >
        <nav className="flex gap-6 text-sm">
          {["Home", "Projects", "About", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="hover:text-pink-400 transition"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="text-sm border px-4 py-1 rounded-md hover:bg-pink-500 hover:text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-60 h-60 rounded-full border-4 border-pink-400 overflow-hidden shadow-xl"
        >
          <Image src={avatar} alt="Avatar" className="object-cover w-full h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-lg space-y-4"
        >
          <p>Xin chào! Mình là Nguyễn Ngọc Quỳnh Như, đam mê công nghệ và kiểm thử phần mềm. Luôn sẵn sàng học hỏi và phát triển!</p>
          <p className="italic text-pink-400">"Luôn nỗ lực để hoàn thiện và học hỏi mỗi ngày!"</p>
          <a
            href="/Nguyen-Ngoc-Quynh-Nhu-CV.pdf"
            download
            className="inline-block px-6 py-2 bg-white text-black rounded-md hover:bg-pink-500 hover:text-white transition"
          >
            Download CV
          </a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 px-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className={`w-24 h-24 rounded-full border-8 flex items-center justify-center font-bold text-xl ${skill.color}`}>
                98%
              </div>
              <h3 className="mt-4 font-semibold">{skill.name}</h3>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-16">Dự án đã làm</h2>
        <div className="grid gap-10 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-lg border shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-pink-400">{project.name}</h3>
              <p className="text-sm italic mb-1">{project.tech}</p>
              <p className="mb-2">{project.description}</p>
              <a href={project.link} className="text-blue-400 underline" target="_blank">Xem GitHub</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-16">Education And Experience</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700"></div>
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: item.position === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={clsx(
                "mb-12 w-full md:w-1/2 px-4",
                item.position === "left" ? "md:ml-auto md:text-left" : "md:mr-auto md:text-right"
              )}
            >
              <div className={clsx("px-6 py-4 rounded-lg shadow-lg", item.color)}>
                <h3 className="font-bold">{item.year}</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet...</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Liên hệ</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Họ tên" className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <textarea placeholder="Nội dung" className="w-full px-4 py-2 rounded bg-gray-800 text-white" rows={4}></textarea>
          <button type="submit" className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">Gửi</button>
        </form>
        <div className="flex justify-center gap-6 mt-10 text-xl">
          <a href="https://facebook.com" target="_blank" className="hover:text-pink-400"><FaFacebook /></a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-pink-400"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" className="hover:text-pink-400"><FaGithub /></a>
        </div>
      </section>
    </div>
  );
}
