'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
      
      {/* Tên chính */}
      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
       
      </motion.h1>

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
            '• Chứng chỉ QA tại FPT',
            '• Tham gia khóa học Automation Testing ',
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
          custom={idx + 1}
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
