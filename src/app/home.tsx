'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/moqgrdza', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white font-sans relative overflow-hidden px-4 py-10">
      {/* Background blob động */}
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
      <nav className="flex justify-center gap-4 flex-wrap mt-4 mb-10">
        {[
          { label: '🎓 Học vấn', href: '#hocvan', color: 'hover:text-blue-600' },
          { label: '💡 Kỹ năng', href: '#kynang', color: 'hover:text-green-600' },
          { label: '📁 Dự án', href: '#duan', color: 'hover:text-purple-600' },
          { label: '🏆 Thành tựu', href: '#thanhtuu', color: 'hover:text-yellow-600' },
          { label: '📚 Hoạt động', href: '#hoatdong', color: 'hover:text-indigo-600' },
          { label: '📬 Liên hệ', href: '#lienhe', color: 'hover:text-red-500' },
        ].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 rounded-full bg-white dark:bg-gray-700 shadow-md transition-all duration-300 ${item.color} hover:font-bold`}
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
            key={idx}
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

      {/* Liên hệ */}
      <motion.section
        id="lienhe"
        className="max-w-xl mx-auto mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={11}
      >
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-4">📬 Liên hệ</h2>

        {/* Thông báo */}
        {status === 'success' && (
          <p className="text-green-600 font-medium text-center mb-4">
            ✅ Gửi thành công! Mình sẽ phản hồi sớm nhất.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 font-medium text-center mb-4">
            ❌ Đã có lỗi xảy ra, vui lòng thử lại.
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            required
            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            placeholder="Nội dung"
            rows={5}
            required
            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition font-semibold"
          >
            Gửi liên hệ
          </button>
        </form>
      </motion.section>
    </main>
  );
}
