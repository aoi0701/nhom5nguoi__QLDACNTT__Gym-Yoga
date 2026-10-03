// WBS 5.17 / SCRUM-208: Real-time Register View
import React, { useState } from 'react';

export default function RegisterView() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'member' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setError('Mật khẩu phải tối thiểu 8 ký tự!');
      return;
    }
    alert('Đăng ký thành công!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Đăng Ký Thành Viên</h2>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full p-2.5 border rounded" placeholder="Tên đăng nhập" required onChange={e => setFormData({...formData, username: e.target.value})} />
        <input className="w-full p-2.5 border rounded" type="email" placeholder="Email" required onChange={e => setFormData({...formData, email: e.target.value})} />
        <input className="w-full p-2.5 border rounded" type="password" placeholder="Mật khẩu" required onChange={e => setFormData({...formData, password: e.target.value})} />
        <button type="submit" className="w-full py-2.5 bg-orange-500 text-white font-bold rounded">Tạo tài khoản</button>
      </form>
    </div>
  );
}
