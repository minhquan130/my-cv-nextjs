"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 text-white max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6 text-orange-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Giới thiệu
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Xin chào! Mình là <span className="text-orange-400 font-semibold">Nguyễn Ngọc Quỳnh Như</span>,
        sinh viên ngành QA tại Cao đẳng Công nghệ Thủ Đức. Mình đam mê kiểm thử phần mềm,
        yêu thích sự chi tiết và mong muốn mang đến sản phẩm chất lượng nhất cho người dùng.
      </motion.p>
    </section>
  );
};

export default AboutSection;
