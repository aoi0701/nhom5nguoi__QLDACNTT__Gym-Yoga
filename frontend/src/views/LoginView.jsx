// WBS 5.18 / SCRUM-209: Login View with JWT Token Storage
import React, { useState } from 'react';

export default function LoginView() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('token', 'sample_jwt_token_2026');
    localStorage.setItem('user_role', 'member');
    window.location.href = '/';
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Đăng Nhập Gym-Yoga AI</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input className="w-full p-2.5 border rounded" type="email" placeholder="Email của bạn" required />
        <input className="w-full p-2.5 border rounded" type="password" placeholder="Mật khẩu" required />
        <button type="submit" className="w-full py-2.5 bg-orange-500 text-white font-bold rounded">Đăng nhập</button>
      </form>
    </div>
  );
}
