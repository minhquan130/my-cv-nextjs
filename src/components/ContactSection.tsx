"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 text-white max-w-3xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6 text-orange-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Liên hệ
      </motion.h2>
      <form className="grid gap-4">
        <input type="text" placeholder="Họ tên" className="p-3 rounded bg-gray-800 border border-gray-700 text-white" />
        <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 border border-gray-700 text-white" />
        <textarea placeholder="Nội dung" rows={5} className="p-3 rounded bg-gray-800 border border-gray-700 text-white" />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 transition-colors text-white py-2 rounded font-semibold">
          Gửi
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
