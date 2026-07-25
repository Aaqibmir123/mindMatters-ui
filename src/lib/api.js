// API Service for frontend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Auth API calls
export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  logout: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    return response.json();
  },

  me: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      credentials: 'include'
    });
    return response.json();
  }
};

// Appointments API calls
export const appointmentsAPI = {
  // Public - no auth required
  create: async (appointmentData) => {
    const response = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData)
    });
    return response.json();
  },

  // Admin only
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/appointments`, {
      credentials: 'include'
    });
    return response.json();
  },

  getStats: async () => {
    const response = await fetch(`${API_BASE_URL}/appointments/stats`, {
      credentials: 'include'
    });
    return response.json();
  },

  updateStatus: async (id, status) => {
    const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ status })
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    return response.json();
  }
};

// Health check
export const healthAPI = {
  check: async () => {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  }
};

export default {
  auth: authAPI,
  appointments: appointmentsAPI,
  health: healthAPI
};