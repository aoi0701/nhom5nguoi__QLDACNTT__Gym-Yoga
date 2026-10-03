// WBS 5.12 / SCRUM-203: Role-based Protected Route Component
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ allowedRoles = [] }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('user_role') || 'member';

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
