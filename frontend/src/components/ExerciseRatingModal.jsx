import React, { useState } from 'react';

export default function ExerciseRatingModal({ exercise, isOpen, onClose, onSubmitRating }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Đánh giá bài tập: {exercise?.name || 'Bài tập Gym'}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Chia sẻ cảm nhận của bạn sau khi hoàn thành buổi tập này.
        </p>

        {/* 5 Star Rating */}
        <div className="flex items-center justify-center space-x-2 my-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="text-3xl focus:outline-none transition-transform hover:scale-125"
            >
              {star <= rating ? '⭐' : '☆'}
            </button>
          ))}
        </div>

        <textarea
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Viết cảm nhận của bạn (độ khó, hiệu quả, cảm giác cơ...)..."
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300"
          >
            Hủy
          </button>
          <button
            onClick={() => {
              onSubmitRating({ exerciseId: exercise?.id, rating, comment });
              onClose();
            }}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md"
          >
            Gửi đánh giá
          </button>
        </div>
      </div>
    </div>
  );
}
