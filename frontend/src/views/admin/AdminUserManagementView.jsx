// WBS 4.14 / SCRUM-150: Admin Dashboard User Management & Role Assignment
import React from 'react';

export default function AdminUserManagementView() {
  const sampleUsers = [
    { id: 1, name: 'Nguyễn Phan Ngọc Trưởng', email: 'hnhoa494@gmail.com', role: 'admin' },
    { id: 2, name: 'Bùi Nguyễn Công Nghiệp', email: 'buinguyencongnghiep04@gmail.com', role: 'trainer' },
    { id: 3, name: 'Nguyễn Chí Nhân', email: 'chinhan15102005@gmail.com', role: 'member' }
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-xl font-bold mb-4">Quản Trị Người Dùng & Phân Vai Trò</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3">Họ Tên</th>
            <th className="p-3">Email</th>
            <th className="p-3">Vai Trò</th>
          </tr>
        </thead>
        <tbody>
          {sampleUsers.map(u => (
            <tr key={u.id} className="border-b">
              <td className="p-3 font-medium">{u.name}</td>
              <td className="p-3 text-gray-600">{u.email}</td>
              <td className="p-3"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded font-semibold text-xs">{u.role.toUpperCase()}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
