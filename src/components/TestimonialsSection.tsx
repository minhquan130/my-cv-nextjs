"use client";

import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6 text-white max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6 text-orange-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Cảm nhận
      </motion.h2>
      <motion.div
        className="bg-gray-800 rounded-xl p-6 border border-orange-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="italic text-gray-300">
          “Như là một QA rất cẩn thận, chăm chỉ và có trách nhiệm cao. Luôn hoàn thành tốt mọi nhiệm vụ được giao và sẵn sàng học hỏi.”
        </p>
        <p className="mt-4 text-right text-orange-400 font-semibold">– Giảng viên hướng dẫn</p>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
