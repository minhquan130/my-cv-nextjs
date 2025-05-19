// components/AvatarSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AvatarSection = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Avatar bên trái */}
      <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
        <Image
          src="/images/avatar.jpg" // Hãy đảm bảo file ảnh avatar này có trong thư mục public/
          alt="Avatar"
          width={240}
          height={240}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Thông tin bên phải */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Nguyễn Ngọc Quỳnh Như
        </h1>
        <p className="text-orange-400 mt-2 text-lg font-medium">
          QA Engineer | Đam mê chất lượng & trải nghiệm người dùng
        </p>
        <p className="mt-4 text-gray-300 max-w-md">
          Với kiến thức chuyên môn vững vàng và tinh thần học hỏi không ngừng,
          mình mong muốn đem lại sản phẩm chất lượng cao, đáp ứng nhu cầu thực tế của người dùng.
        </p>
      </div>
      
          <div className="grid grid-cols-2 gap-4 text-sm bg-[#1a1a2e] p-6 rounded-xl">
            <div>
              <p className="text-gray-400">Name:</p>
              <p className="text-white font-semibold">Nguyễn Ngọc Quỳnh Như</p>
            </div>
            <div>
              <p className="text-gray-400">Phone:</p>
              <p className="text-white font-semibold">(+84) 0339597331</p>
            </div>
            <div>
              <p className="text-gray-400">Email:</p>
              <p className="text-white font-semibold">quynhnhu20020911@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-400">Twitter:</p>
              <p className="text-white font-semibold">@quynhnhu09</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4"></div>
    </motion.div>
  );
};

export default AvatarSection;
