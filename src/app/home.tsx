'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white font-sans relative overflow-hidden px-4 py-10">
      {/* Background động blob */}
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute w-[40rem] h-[40rem] bg-pink-300 opacity-30 rounded-full blur-3xl animate-blob -top-20 -left-20" />
        <div className="absolute w-[30rem] h-[30rem] bg-blue-300 opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000 top-40 -right-10" />
        <div className="absolute w-[35rem] h-[35rem] bg-purple-300 opacity-30 rounded-full blur-3xl animate-blob animation-delay-4000 top-96 left-20" />
      </div>

      {/* Header */}
      <motion.header
        className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-6 mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      ></motion.header>

      {/* Navbar */}
      <nav className="flex justify-center space-x-6 mb-8">
        {[
          { label: 'Mục tiêu', href: '#muctieu' },
          { label: 'Học vấn', href: '#hocvan' },
          { label: 'Kỹ năng', href: '#kynang' },
          { label: 'Dự án', href: '#duan' },
          { label: 'Thành tựu', href: '#thanhtuu' },
          { label: 'Hoạt động', href: '#hoatdong' },
          { label: 'Liên hệ', href: '#lienhe' },
        ].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            className="text-lg font-medium text-gray-700 dark:text-white hover:text-pink-500 transition"
          >
            {item.label}
          </motion.a>
        ))}
      </nav>

      {/* Content chia 2 cột */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            id: 'muctieu',
            title: '🎯 Mục tiêu nghề nghiệp',
            color: 'text-pink-500',
            content: [
              'Trở thành một chuyên viên QA chuyên nghiệp, có khả năng kiểm thử thủ công và tự động.',
              'Đóng góp vào việc đảm bảo chất lượng phần mềm tốt nhất cho người dùng.',
            ],
          },
          {
            id: 'hocvan',
            title: '🎓 Học vấn',
            color: 'text-blue-500',
            content: [
              'Trường Cao Đẳng Công Nghệ Thủ Đức',
              'Chuyên ngành: Kiểm thử phần mềm (QA)',
              'Tốt nghiệp: 2024',
            ],
          },
          {
            id: 'kynang',
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
            id: 'duan',
            title: '📁 Dự án cá nhân',
            color: 'text-purple-600',
            content: [
              '• Hệ thống quản lý bug bằng Jira (dự án nhóm)',
              '• Kiểm thử website thương mại điện tử',
            ],
          },
          {
            id: 'thanhtuu',
            title: '🏆 Thành tựu / Chứng chỉ',
            color: 'text-yellow-600',
            content: [
              '• Chứng chỉ QA tại FPT',
              '• Tham gia khóa học Automation Testing',
            ],
          },
          {
            id: 'hoatdong',
            title: '📚 Hoạt động / Câu lạc bộ',
            color: 'text-indigo-600',
            content: [
              '• Thành viên CLB Tin học – TDC',
              '• Tham gia các buổi workshop kiểm thử phần mềm',
            ],
          },
        ].map((section, idx) => (
          <motion.section
            key={section.id}
            id={section.id}
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

      {/* Liên hệ */}
      <motion.section
        id="lienhe"
        className="mt-16 max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={8}
      >
        <h3 className="text-2xl font-bold mb-6 text-pink-500 text-center">📩 Liên hệ với mình</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Tên của bạn"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email của bạn"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Nội dung..."
            rows={4}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
          >
            Gửi liên hệ
          </button>
        </form>
      </motion.section>

      {/* Socials */}
      <motion.div
        className="flex justify-center mt-10 gap-6 text-2xl text-gray-700 dark:text-gray-300"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={10}
      >
        <a
          href="https://github.com/"
          target="_blank"
          className="hover:text-black dark:hover:text-white hover:scale-110 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          className="hover:text-blue-600 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:email@example.com"
          className="hover:text-red-500 hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </main>
  );
}

/* CSS bổ sung cần thêm vào globals.css hoặc tương đương:
@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-blob {
  animation: blob 8s infinite ease-in-out;
}
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
*/
