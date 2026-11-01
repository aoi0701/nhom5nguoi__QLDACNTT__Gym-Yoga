// WBS 5.55 / SCRUM-234: Toast Notification Component
import React from 'react';

export default function ToastNotification({ message, type = 'info', isVisible, onClose }) {
  if (!isVisible) return null;
  const colors = {
    success: 'bg-emerald-600 text-white',
    error: 'bg-rose-600 text-white',
    warning: 'bg-amber-500 text-white',
    info: 'bg-blue-600 text-white'
  };

  return (
    <div className={`fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 transition-all ${colors[type]}`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 font-bold opacity-75 hover:opacity-100">&times;</button>
    </div>
  );
}
