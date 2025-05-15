'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const sections = [
  {
    id: 'goal',
    title: '🎯 Mục tiêu nghề nghiệp',
    color: 'text-pink-500',
    content: [
      'Trở thành một chuyên viên QA chuyên nghiệp, có khả năng kiểm thử thủ công và tự động.',
      'Đóng góp vào việc đảm bảo chất lượng phần mềm tốt nhất cho người dùng.',
    ],
  },
  {
    id: 'education',
    title: '🎓 Học vấn',
    color: 'text-blue-500',
    content: [
      'Trường Cao Đẳng Công Nghệ Thủ Đức',
      'Chuyên ngành: Kiểm thử phần mềm (QA)',
      'Tốt nghiệp: 2024',
    ],
  },
  {
    id: 'skills',
    title: '💡 Kỹ năng',
    color: 'text-green-600',
    content: [
      '✔ Kiểm thử thủ công (Manual Testing)',
      '✔ Selenium / Cypress',
      '✔ Viết test case, test plan',
      '✔ Jira, Postman, SQL',
      '✔ Có chứng chỉ về QA',
    ],
  },
  {
    id: 'projects',
    title: '📁 Dự án cá nhân',
    color: 'text-purple-600',
    content: [
      '• Hệ thống quản lý bug bằng Jira (dự án nhóm)',
      '• Kiểm thử website thương mại điện tử',
    ],
  },
  {
    id: 'achievements',
    title: '🏆 Thành tựu / Chứng chỉ',
    color: 'text-yellow-600',
    content: [
      '• Chứng chỉ QA tại FPT',
      '• Tham gia khóa học Automation Testing',
    ],
  },
  {
    id: 'activities',
    title: '📚 Hoạt động / Câu lạc bộ',
    color: 'text-indigo-600',
    content: [
      '• Thành viên CLB Tin học – TDC',
      '• Tham gia các buổi workshop kiểm thử phần mềm',
    ],
  },
  {
    id: 'contact',
    title: '📞 Liên hệ',
    color: 'text-red-500',
    content: [
      '📧 Email: email@example.com',
      '🌐 LinkedIn / GitHub / Facebook',
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white font-sans relative overflow-hidden px-4 py-10 scroll-smooth">
      {/* Background động blob */}
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute w-[40rem] h-[40rem] bg-pink-300 opacity-30 rounded-full blur-3xl animate-blob -top-20 -left-20" />
        <div className="absolute w-[30rem] h-[30rem] bg-blue-300 opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000 top-40 -right-10" />
        <div className="absolute w-[35rem] h-[35rem] bg-purple-300 opacity-30 rounded-full blur-3xl animate-blob animation-delay-4000 top-96 left-20" />
      </div>

      {/* Navbar */}
      <nav className="flex justify-center gap-4 flex-wrap mb-12">
        {sections.map((section, idx) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            className="text-sm md:text-base px-4 py-2 rounded-full bg-white dark:bg-gray-700 shadow hover:scale-105 transition font-medium"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={idx}
          >
            {section.title.replace(/🎯|🎓|💡|📁|🏆|📚|📞/, '').trim()}
          </motion.a>
        ))}
      </nav>

      {/* Content chia 2 cột */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sections.map((section, idx) => (
          <motion.section
            id={section.id}
            key={section.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.02] px-8 py-6 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={idx + 1}
          >
            <h3 className={`text-2xl font-semibold mb-3 ${section.color}`}>{section.title}</h3>
            <ul className="text-left list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {section.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      {/* Socials */}
      <motion.div
        className="flex justify-center mt-10 gap-6 text-2xl text-gray-700 dark:text-gray-300"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={sections.length + 1}
      >
        <a href="https://github.com/" target="_blank" className="hover:text-black dark:hover:text-white hover:scale-110 transition"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-600 hover:scale-110 transition"><FaLinkedin /></a>
        <a href="mailto:email@example.com" className="hover:text-red-500 hover:scale-110 transition"><FaEnvelope /></a>
      </motion.div>
    </main>
  );
}
