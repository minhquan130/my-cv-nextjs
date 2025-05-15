'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import avatar from '../../public/images/ảnh.jpg';

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
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-100 px-6 py-10 flex flex-col items-center text-gray-800 font-sans space-y-6">
      
      {/* Avatar */}
      <motion.div
        className="relative group"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
        <Image
          src={avatar}
          alt="avatar"
          className="w-40 h-40 rounded-full object-cover shadow-xl transition group-hover:scale-105 group-hover:shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-full">
          Nguyễn Ngọc Quỳnh Như
        </div>
      </motion.div>

      {/* Tên & ngành */}
      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
      >
        Nguyễn Ngọc Quỳnh Như
      </motion.h1>

      <motion.h2
        className="text-lg text-blue-700 italic"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={2}
      >
        Chuyên ngành: Kiểm thử phần mềm (QA)
      </motion.h2>

      {/* SECTION TEMPLATE */}
      {[
        {
          title: '🎯 Mục tiêu nghề nghiệp',
          color: 'text-pink-500',
          content: [
            'Trở thành một chuyên viên QA chuyên nghiệp, có khả năng kiểm thử thủ công và tự động.',
            'Đóng góp vào việc đảm bảo chất lượng phần mềm tốt nhất cho người dùng.',
          ],
        },
        {
          title: '🎓 Học vấn',
          color: 'text-blue-500',
          content: [
            'Trường Cao Đẳng Công Nghệ Thủ Đức',
            'Chuyên ngành: Kiểm thử phần mềm (QA)',
            'Tốt nghiệp: 2024',
          ],
        },
        {
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
          title: '📁 Dự án cá nhân',
          color: 'text-purple-600',
          content: [
            '• Hệ thống quản lý bug bằng Jira (dự án nhóm)',
            '• Kiểm thử website thương mại điện tử',
          ],
        },
        {
          title: '🏆 Thành tựu / Chứng chỉ',
          color: 'text-yellow-600',
          content: [
            '• Chứng chỉ ISTQB Foundation Level',
            '• Tham gia khóa học Automation Testing with Selenium',
          ],
        },
        {
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
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.02] px-8 py-6 w-full max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={idx + 3}
        >
          <h3 className={`text-2xl font-semibold mb-3 ${section.color}`}>{section.title}</h3>
          <ul className="text-left list-disc list-inside space-y-1 text-gray-700">
            {section.content.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </motion.section>
      ))}

      {/* Liên kết mạng xã hội */}
      <motion.div
        className="flex gap-6 text-2xl text-gray-700"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={10}
      >
        <a href="https://github.com/" target="_blank" className="hover:text-black hover:scale-110 transition"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-600 hover:scale-110 transition"><FaLinkedin /></a>
        <a href="mailto:email@example.com" className="hover:text-red-500 hover:scale-110 transition"><FaEnvelope /></a>
      </motion.div>
    </main>
  );
}
