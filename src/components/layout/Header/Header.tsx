'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Header() {
  return (
    <motion.header
      className="w-full h-[320px] bg-gradient-to-r from-pink-400 to-blue-500 rounded-b-3xl shadow-lg flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-white"
        variants={itemVariants}
      >
        {/* Avatar */}
        <motion.div
          className="w-32 h-32 relative group"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Image
            src="/images/ảnh.jpg" // ← sửa chỗ này
            alt="avatar"
            fill
            className="rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl font-bold tracking-wide drop-shadow-md"
            variants={itemVariants}
          >
            Nguyễn Ngọc Quỳnh Như
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-white/90"
            variants={itemVariants}
          >
            🌟 Chuyên ngành: Kiểm thử phần mềm (QA)
          </motion.p>
        </div>
      </motion.div>
    </motion.header>
  );
}
