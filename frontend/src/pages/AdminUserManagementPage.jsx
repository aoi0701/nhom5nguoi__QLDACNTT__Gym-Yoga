import React from 'react';

export default function AdminUserManagementPage() {
  const users = [
    { id: 1, name: "Nguyễn Phan Ngọc Trưởng", email: "hnhoa494@gmail.com", role: "SuperAdmin" },
    { id: 2, name: "Lê Quốc Anh", email: "lequocanh125@gmail.com", role: "ProductOwner" },
    { id: 3, name: "Nguyễn Chí Nhân", email: "chinhan15102005@gmail.com", role: "FrontendLead" },
    { id: 4, name: "Bùi Nguyễn Công Nghiệp", email: "congnghiep04@gmail.com", role: "BackendLead" },
    { id: 5, name: "Đỗ Minh Nhật", email: "matnhinhod@gmail.com", role: "QALead" }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quản lý người dùng & Gán quyền hệ thống (RBAC)</h2>
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-50 dark:bg-gray-700/50 uppercase text-xs font-bold text-gray-500">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Họ và tên</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Vai trò (Role)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30">
                <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">{u.id}</td>
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3"><span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-semibold">{u.role}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
