import React, { useState } from 'react';

export default function AdminExerciseCRUDModal({ isOpen, onClose, onSave }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Gym');
  const [level, setLevel] = useState('Beginner');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Thêm mới bài tập Gym / Yoga</h3>
        <input type="text" placeholder="Tên bài tập..." value={name} onChange={e => setName(e.target.value)} className="w-full p-2.5 mb-3 border rounded-lg text-sm dark:bg-gray-700" />
        <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2.5 mb-3 border rounded-lg text-sm dark:bg-gray-700">
          <option value="Gym">Gym Thể hình</option>
          <option value="Yoga">Yoga Phục hồi</option>
        </select>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 text-sm text-gray-600">Hủy</button>
          <button onClick={() => { onSave({ name, category, level }); onClose(); }} className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg">Lưu bài tập</button>
        </div>
      </div>
    </div>
  );
}
