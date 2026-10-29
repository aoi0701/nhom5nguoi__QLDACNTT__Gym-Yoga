// WBS 5.55 / SCRUM-235: 403 Forbidden View
import React from 'react';

export default function Error403View() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-extrabold text-red-500">403</h1>
      <h2 className="text-2xl font-bold mt-4 text-gray-800">Truy cập bị từ chối (Forbidden)</h2>
      <p className="text-gray-600 mt-2">Bạn không có quyền truy cập vào tài nguyên này theo phân quyền RBAC.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg">Trở về Trang chủ</a>
    </div>
  );
}
