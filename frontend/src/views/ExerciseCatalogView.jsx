// WBS 5.22 / SCRUM-213: Exercise Catalog Card Grid
import React from 'react';

export default function ExerciseCatalogView({ exercises = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {exercises.map(ex => (
        <div key={ex.id} className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow transition">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${ex.category === 'gym' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'}`}>
            {ex.category.toUpperCase()}
          </span>
          <h4 className="mt-3 text-lg font-bold">{ex.title}</h4>
          <p className="text-sm text-gray-500 mt-1">{ex.muscle_group} • Cấp độ: {ex.difficulty}</p>
        </div>
      ))}
    </div>
  );
}
