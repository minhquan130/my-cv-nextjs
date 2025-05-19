"use client";

import { motion } from "framer-motion";
import { FaBug, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const services = [
  { icon: <FaBug />, title: "Manual Testing", desc: "Kiểm thử chức năng và giao diện thủ công." },
  { icon: <FaLaptopCode />, title: "Automation Testing", desc: "Tự động hóa kiểm thử với tools như Selenium." },
  { icon: <FaCheckCircle />, title: "QA Documentation", desc: "Viết test plan, test case, bug report đầy đủ." },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-white">
      <motion.h2
        className="text-3xl font-bold mb-6 text-orange-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dịch vụ
      </motion.h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-gray-800 p-6 rounded-xl text-center border border-orange-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-3xl text-orange-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
