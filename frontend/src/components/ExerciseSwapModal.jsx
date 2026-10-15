import React, { useState } from 'react';

export default function ExerciseSwapModal({ isOpen, onClose, currentExercise, onSwapConfirm }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full p-6 shadow-xl">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Đổi bài tập khác</h3>
        <p className="text-sm text-gray-500 mb-4">Chọn bài tập thay thế cho "{currentExercise?.name || 'Bài hiện tại'}"</p>
        <div className="space-y-2">
          {["Hít đất kim cương", "Đẩy ngực tạ đơn", "Chống đẩy nghiêng"].map((name, i) => (
            <button key={i} onClick={() => onSwapConfirm(name)} className="w-full text-left p-3 rounded-lg border hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-gray-700 text-sm font-medium">
              🔄 {name}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-lg">Đóng</button>
      </div>
    </div>
  );
}
