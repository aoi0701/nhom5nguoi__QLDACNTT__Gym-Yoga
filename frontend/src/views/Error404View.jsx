// WBS 5.55 / SCRUM-235: 404 Not Found View
import React from 'react';

export default function Error404View() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
      <h2 className="text-2xl font-bold mt-4 text-gray-800">Trang không tồn tại</h2>
      <p className="text-gray-600 mt-2">Đường dẫn bạn yêu cầu không tồn tại trên hệ thống Gym & Yoga.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg">Trở về Trang chủ</a>
    </div>
  );
}
