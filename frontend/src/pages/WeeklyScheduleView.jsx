import React, { useState } from 'react';

export default function WeeklyScheduleView() {
  const [schedule, setSchedule] = useState([
    { day: 'Thứ Hai', title: 'Ngực & Tay sau', type: 'Gym', duration: '45 phút', status: 'done' },
    { day: 'Thứ Ba', title: 'Lưng xô & Tay trước', type: 'Gym', duration: '45 phút', status: 'done' },
    { day: 'Thứ Tư', title: 'Yoga Vinyasa Giãn cơ', type: 'Yoga', duration: '30 phút', status: 'done' },
    { day: 'Thứ Năm', title: 'Chân, Đùi & Bắp chuối', type: 'Gym', duration: '50 phút', status: 'in-progress' },
    { day: 'Thứ Sáu', title: 'Vai & Cơ bụng Core', type: 'Gym', duration: '40 phút', status: 'pending' },
    { day: 'Thứ Bảy', title: 'Hatha Yoga Thư giãn', type: 'Yoga', duration: '45 phút', status: 'pending' },
    { day: 'Chủ Nhật', title: 'Nghỉ ngơi phục hồi (Rest Day)', type: 'Rest', duration: '0 phút', status: 'pending' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
          📅 Lịch tập tuần do AI Gemini gợi ý
        </h1>
        <p className="text-sm text-gray-500">Được tối ưu hóa tự động theo khảo sát thể trạng của bạn.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        {schedule.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{item.day}</span>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm mt-1">{item.title}</h4>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-medium">{item.type}</span>
              <span>⏱ {item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
