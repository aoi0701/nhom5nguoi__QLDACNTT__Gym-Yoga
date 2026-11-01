// WBS 5.30 / SCRUM-221: Multi-step AI Workout Wizard Form
import React, { useState } from 'react';

export default function AIWizardSurveyView() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('hypertrophy');

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow space-y-4">
      <div className="text-sm font-bold text-orange-500">BƯỚC {step} / 3: KHẢO SÁT AI</div>
      <h3 className="text-xl font-bold">Mục Tiêu & Tần Suất Tập Luyện</h3>
      <select value={goal} onChange={e => setGoal(e.target.value)} className="w-full p-2.5 border rounded">
        <option value="hypertrophy">Tăng cơ bắp (Hypertrophy)</option>
        <option value="weight_loss">Giảm mỡ & Săn chắc (Weight Loss)</option>
        <option value="yoga_flexibility">Dẻo dai & Tịnh tâm cùng Yoga</option>
      </select>
      <button onClick={() => setStep(step + 1)} className="w-full py-2.5 bg-orange-500 text-white font-bold rounded">
        {step < 3 ? 'Tiếp theo' : 'Sinh lịch tập cùng AI Gemini'}
      </button>
    </div>
  );
}
