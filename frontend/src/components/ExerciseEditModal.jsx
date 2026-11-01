// WBS 5.54 / SCRUM-233: Modal Edit Exercise Component
import React, { useState } from 'react';

export default function ExerciseEditModal({ exercise, isOpen, onClose, onSave }) {
  if (!isOpen) return null;
  const [formData, setFormData] = useState(exercise || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Chỉnh sửa thông số kỹ thuật bài tập</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tên bài tập</label>
            <input type="text" className="w-full border p-2 rounded" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nhóm cơ</label>
            <input type="text" className="w-full border p-2 rounded" value={formData.muscle || ''} onChange={(e) => setFormData({...formData, muscle: e.target.value})} />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded text-gray-600">Hủy</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Lưu cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  );
}
