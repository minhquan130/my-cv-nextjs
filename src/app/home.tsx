export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-6 flex flex-col items-center text-gray-800 font-sans">
      
      {/* Avatar */}
      <div className="relative group mb-6">
        <img
          src="/avatar.jpg"
          alt=""
          className="w-40 h-40 rounded-full object-cover shadow-lg transition duration-300 group-hover:scale-105 group-hover:shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Nguyễn Ngọc Quỳnh Như
        </div>
      </div>

      {/* Tên + Ngành */}
      <h1 className="text-4xl font-bold mb-2 hover:text-pink-600 transition">Nguyễn Ngọc Quỳnh Như</h1>
      <h2 className="text-xl text-blue-600 mb-6 hover:underline transition">Chuyên ngành: Kiểm thử phần mềm (QA)</h2>

      {/* Mục tiêu nghề nghiệp */}
      <section className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 mb-6 max-w-2xl w-full text-center">
        <h3 className="text-2xl font-semibold mb-2 text-pink-500">🎯 Mục tiêu nghề nghiệp</h3>
        <p>
          Trở thành một chuyên viên QA chuyên nghiệp, có khả năng kiểm thử thủ công và tự động,
          đóng góp vào việc đảm bảo chất lượng phần mềm tốt nhất cho người dùng.
        </p>
      </section>

      {/* Học vấn */}
      <section className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 mb-6 max-w-2xl w-full text-center">
        <h3 className="text-2xl font-semibold mb-2 text-blue-500">🎓 Học vấn</h3>
        <p>Đại học Công nghệ Thông tin – ĐHQG TP.HCM</p>
        <p>Chuyên ngành: Kiểm thử phần mềm (QA)</p>
        <p>Tốt nghiệp: 2024</p>
      </section>

      {/* Kỹ năng */}
      <section className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 max-w-2xl w-full text-center">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">💡 Kỹ năng</h3>
        <ul className="grid grid-cols-2 gap-2 text-left">
          <li className="hover:text-green-600 transition">✔ Kiểm thử thủ công (Manual Testing)</li>
          <li className="hover:text-green-600 transition">✔ Selenium / Cypress</li>
          <li className="hover:text-green-600 transition">✔ Viết test case, test plan</li>
          <li className="hover:text-green-600 transition">✔ Jira, Postman, SQL</li>
        </ul>
      </section>
    </main>
  );
}
