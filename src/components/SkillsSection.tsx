"use client";

import { motion } from "framer-motion";

const skills = ["Manual Testing", "Automation Testing", "JIRA", "Postman", "SQL", "HTML/CSS"];

const SkillsSection = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-white">
      <motion.h2
        className="text-3xl font-bold mb-6 text-orange-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Kỹ năng
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-gray-800 rounded-xl p-4 text-center border border-orange-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
