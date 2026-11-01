// WBS 5.60 / SCRUM-238, SCRUM-241: Central API Client & End-to-End Integration
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:8000/api';

export const apiClient = {
  async get(endpoint) {
    const token = localStorage.getItem('access_token');
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    });
    return res.json();
  },
  async post(endpoint, data) {
    const token = localStorage.getItem('access_token');
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      },
      body: JSON.stringify(data)
    });
    return res.json();
  }
};
