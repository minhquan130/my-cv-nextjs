// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { FaDownload, FaStar } from 'react-icons/fa';
// import avatar from '../../../../public/images/ảnh.jpg';

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
//   }),
// };

// export default function Header() {
//   const highlights = [
//     '✨ Cầu tiến, ham học hỏi',
//     '💻 Thành thạo công cụ QA',
//     '🌈 Đam mê chất lượng sản phẩm',
//   ];

//   return (
//     <motion.header
//       className="relative bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 text-center py-16 px-6 rounded-b-3xl shadow-xl overflow-hidden"
//       initial="hidden"
//       animate="visible"
//       variants={fadeUp}
//       custom={0}
//     >
//       {/* Hiệu ứng nền mờ ánh sáng */}
//       <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0 rounded-b-3xl" />

//       <div className="relative z-10">
//         {/* Avatar có hiệu ứng chuyển động */}
//         <motion.div className="flex justify-center mb-6" variants={fadeUp} custom={1}>
//           <div className="relative w-36 h-36 rounded-full border-4 border-white shadow-xl ring-4 ring-white/50 overflow-hidden animate-floatAvatar">
//             <Image src={avatar} alt="Avatar" layout="fill" objectFit="cover" />
//           </div>
//         </motion.div>

//         {/* Tên */}
//         <motion.h1
//           className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 drop-shadow-md"
//           variants={fadeUp}
//           custom={2}
//         >
//           Nguyễn Ngọc Quỳnh Như
//         </motion.h1>

//         {/* Mô tả */}
//         <motion.p
//           className="text-md text-gray-700 italic mt-2"
//           variants={fadeUp}
//           custom={3}
//         >
//           QA trẻ trung, chi tiết và luôn hướng đến trải nghiệm người dùng hoàn hảo.
//         </motion.p>

//         {/* Highlights */}
//         <motion.div className="flex flex-wrap justify-center gap-3 mt-6" initial="hidden" animate="visible">
//           {highlights.map((item, i) => (
//             <motion.div
//               key={i}
//               className="bg-white/90 px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition backdrop-blur-sm"
//               variants={fadeUp}
//               custom={i + 4}
//             >
//               <FaStar className="text-yellow-400" />
//               <span className="text-sm font-medium text-gray-800">{item}</span>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Nút tải CV */}
//         <motion.div className="mt-8" variants={fadeUp} custom={highlights.length + 4}>
//           <a
//             href="/NguyenNgocQuynhNhu-CV.pdf"
//             download
//             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all hover:shadow-xl"
//           >
//             <FaDownload className="animate-bounce" />
//             Tải CV
//           </a>
//         </motion.div>

//         {/* Quote */}
//         <motion.p
//           className="mt-6 text-sm text-gray-700 italic"
//           variants={fadeUp}
//           custom={highlights.length + 5}
//         >
//           “Kiểm thử là nghệ thuật bảo vệ trải nghiệm người dùng.” 💡
//         </motion.p>
//       </div>
//     </motion.header>
//   );
// }
