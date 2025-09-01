// API endpoints for user management
import axios from 'utils/axios';

// ==============================|| USER API ||============================== //

// Get all users
export async function getUsers() {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get user by ID
export async function getUserById(userId) {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Create new user
export async function createUser(userData) {
  try {
    const response = await axios.post('/api/users', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Update user
export async function updateUser(userId, userData) {
  try {
    const response = await axios.put(`/api/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Delete user
export async function deleteUser(userId) {
  try {
    const response = await axios.delete(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Update user profile
export async function updateUserProfile(userId, profileData) {
  try {
    const response = await axios.put(`/api/users/${userId}/profile`, profileData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Change user password
export async function changeUserPassword(userId, passwordData) {
  try {
    const response = await axios.put(`/api/users/${userId}/password`, passwordData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get user roles
export async function getUserRoles() {
  try {
    const response = await axios.get('/api/users/roles');
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Assign role to user
export async function assignUserRole(userId, roleId) {
  try {
    const response = await axios.post(`/api/users/${userId}/roles`, { roleId });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Remove role from user
export async function removeUserRole(userId, roleId) {
  try {
    const response = await axios.delete(`/api/users/${userId}/roles/${roleId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get user permissions
export async function getUserPermissions(userId) {
  try {
    const response = await axios.get(`/api/users/${userId}/permissions`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Update user status (active/inactive)
export async function updateUserStatus(userId, status) {
  try {
    const response = await axios.put(`/api/users/${userId}/status`, { status });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Search users
export async function searchUsers(searchTerm, filters = {}) {
  try {
    const response = await axios.get('/api/users/search', {
      params: {
        q: searchTerm,
        ...filters
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get user activity logs
export async function getUserActivityLogs(userId, page = 1, limit = 10) {
  try {
    const response = await axios.get(`/api/users/${userId}/activity`, {
      params: { page, limit }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Bulk operations
export async function bulkUpdateUsers(userIds, updateData) {
  try {
    const response = await axios.put('/api/users/bulk', {
      userIds,
      updateData
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function bulkDeleteUsers(userIds) {
  try {
    const response = await axios.delete('/api/users/bulk', {
      data: { userIds }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Export users data
export async function exportUsers(format = 'csv', filters = {}) {
  try {
    const response = await axios.get('/api/users/export', {
      params: {
        format,
        ...filters
      },
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Import users data
export async function importUsers(file) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await axios.post('/api/users/import', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}