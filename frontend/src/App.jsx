import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                GYM•YOGA AI
              </span>
              <span className="text-xs bg-orange-100 text-orange-800 font-semibold px-2 py-0.5 rounded-full">
                RBAC v2.0
              </span>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-700 hover:text-orange-500">Trang chủ</Link>
              <Link to="/exercises" className="text-sm font-medium text-gray-700 hover:text-orange-500">Bài tập Gym & Yoga</Link>
              <Link to="/ai-wizard" className="text-sm font-medium text-gray-700 hover:text-orange-500">AI Lịch tập</Link>
              <Link to="/admin" className="text-sm font-medium text-gray-700 hover:text-orange-500">Admin RBAC</Link>
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition">
                Đăng nhập
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/exercises" element={<ExerciseCatalogView />} />
            <Route path="/ai-wizard" element={<AIWizardView />} />
            <Route path="/admin" element={<AdminRBACView />} />
            <Route path="/login" element={<LoginView />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          <p>© 2026 Nhóm 5 Người - Dự án QLDACNTT. Hệ thống Quản lý Phân quyền Tích hợp AI gợi ý bài tập Gym-Yoga.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function HomeView() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Hệ thống Luyện tập Thông minh Tích hợp Trí tuệ Nhân tạo
        </h1>
        <p className="mt-3 text-lg text-orange-100 max-w-2xl">
          Quản lý phân quyền Role-Based Access Control chặt chẽ kết hợp trợ lý AI gợi ý giáo án tập luyện cá nhân hóa theo thể trạng, mục tiêu và dụng cụ sẵn có.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link to="/ai-wizard" className="px-5 py-3 bg-white text-orange-600 font-bold rounded-xl shadow hover:bg-orange-50 transition">
            Khảo sát AI sinh lịch tập
          </Link>
          <Link to="/exercises" className="px-5 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition">
            Khám phá 50+ bài tập
          </Link>
        </div>
      </div>
    </div>
  );
}

function ExerciseCatalogView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Thư viện Bài tập Gym & Yoga</h2>
      <p className="text-gray-600">Tra cứu bài tập theo nhóm cơ, độ khó và thiết bị tập luyện.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">GYM</span>
          <h3 className="mt-3 text-lg font-bold">Barbell Bench Press</h3>
          <p className="text-sm text-gray-500 mt-1">Cơ ngực chính • Mức độ: Trung bình</p>
        </div>
        <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">YOGA</span>
          <h3 className="mt-3 text-lg font-bold">Warrior II (Virabhadrasana II)</h3>
          <p className="text-sm text-gray-500 mt-1">Chân & Cột sống • Mức độ: Dễ</p>
        </div>
        <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">GYM</span>
          <h3 className="mt-3 text-lg font-bold">Barbell Back Squat</h3>
          <p className="text-sm text-gray-500 mt-1">Cơ đùi & Mông • Mức độ: Khó</p>
        </div>
      </div>
    </div>
  );
}

function AIWizardView() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-200 rounded-2xl shadow-sm space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">AI Workout Recommendation Wizard</h2>
      <p className="text-gray-600">Cung cấp thông tin thể trạng để nhận lộ trình tập luyện cá nhân hóa do AI gợi ý.</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Mục tiêu rèn luyện</label>
          <select className="mt-1 w-full border border-gray-300 rounded-lg p-2.5">
            <option>Giảm mỡ & Tăng cơ (Body Recomposition)</option>
            <option>Tăng cường cơ bắp (Hypertrophy)</option>
            <option>Cải thiện độ dẻo dai với Yoga (Flexibility)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Số buổi tập mỗi tuần</label>
          <select className="mt-1 w-full border border-gray-300 rounded-lg p-2.5">
            <option>3 buổi / tuần</option>
            <option>4 buổi / tuần</option>
            <option>5 buổi / tuần</option>
          </select>
        </div>
        <button className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
          Sinh lộ trình tập luyện thông minh (AI Prompt Engine)
        </button>
      </div>
    </div>
  );
}

function AdminRBACView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard: Ma trận Phân quyền RBAC</h2>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Chức năng / Quyền hạn</th>
              <th className="px-6 py-3 text-center font-semibold text-gray-700">Admin</th>
              <th className="px-6 py-3 text-center font-semibold text-gray-700">Trainer (PT)</th>
              <th className="px-6 py-3 text-center font-semibold text-gray-700">Member</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 font-medium">Quản lý User & Phân quyền Role</td>
              <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Đầy đủ</td>
              <td className="px-6 py-4 text-center text-red-400 font-bold">✗ Chặn (403)</td>
              <td className="px-6 py-4 text-center text-red-400 font-bold">✗ Chặn (403)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">Thêm / Sửa / Xóa Bài tập Gym-Yoga</td>
              <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Đầy đủ</td>
              <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Đầy đủ</td>
              <td className="px-6 py-4 text-center text-gray-400">Chỉ xem</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">Gửi yêu cầu AI gợi ý lịch tập</td>
              <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Cho phép</td>
              <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Cho phép</td>
              <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Cho phép</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LoginView() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-2xl shadow-sm space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-900">Đăng nhập hệ thống</h2>
      <input type="email" placeholder="Email của bạn" className="w-full border border-gray-300 rounded-lg p-2.5" />
      <input type="password" placeholder="Mật khẩu" className="w-full border border-gray-300 rounded-lg p-2.5" />
      <button className="w-full py-2.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
        Đăng nhập (JWT Auth)
      </button>
    </div>
  );
}
