// WBS 5.21 / SCRUM-212: Profile and Automatic BMI Calculator View
import React, { useState } from 'react';

export default function ProfileBMIView() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  const getStatus = (val) => {
    if (val < 18.5) return { label: 'Thiếu cân (Underweight)', color: 'text-blue-600' };
    if (val < 24.9) return { label: 'Bình thường (Normal)', color: 'text-emerald-600' };
    return { label: 'Thừa cân (Overweight)', color: 'text-amber-600' };
  };

  const status = getStatus(bmi);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4">
      <h3 className="text-xl font-bold">Chỉ Số Thể Trạng BMI</h3>
      <div className="text-3xl font-extrabold text-orange-500">{bmi}</div>
      <div className={`font-semibold ${status.color}`}>{status.label}</div>
    </div>
  );
}
