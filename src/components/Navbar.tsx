'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full shadow-lg flex items-center justify-between w-[90%] md:w-auto"
    >
      <div className="font-bold text-orange-400 text-lg">SK <span className="text-white">Saira</span></div>

      <div className="hidden md:flex gap-6 ml-10 text-white">
        {navItems.map((item, idx) => (
          <a key={idx} href={`#${item.toLowerCase()}`} className="hover:text-orange-400 transition-all duration-300">
            {item}
          </a>
        ))}
      </div>

      <div className="hidden md:block ml-6">
        <button className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition">
          Let’s Talk
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden ml-auto" onClick={() => setOpen(!open)}>
        {open ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
      </div>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-black/90 rounded-xl p-4 flex flex-col items-center space-y-4 md:hidden">
          {navItems.map((item, idx) => (
            <a key={idx} href={`#${item.toLowerCase()}`} className="text-white hover:text-orange-400">
              {item}
            </a>
          ))}
          <button className="bg-orange-500 text-white px-4 py-1 rounded-full">
            Let’s Talk
          </button>
        </div>
      )}
    </motion.nav>
  );
}
