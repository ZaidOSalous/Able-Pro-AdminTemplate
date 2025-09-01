// API endpoints for settings management
import axios from 'utils/axios';

// ==============================|| SETTINGS API ||============================== //

// System Settings
export async function getSystemSettings() {
  try {
    const response = await axios.get('/api/settings/system');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateSystemSettings(settings) {
  try {
    const response = await axios.put('/api/settings/system', settings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// User Settings
export async function getUserSettings(userId) {
  try {
    const response = await axios.get(`/api/settings/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserSettings(userId, settings) {
  try {
    const response = await axios.put(`/api/settings/user/${userId}`, settings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Application Settings
export async function getAppSettings() {
  try {
    const response = await axios.get('/api/settings/app');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateAppSettings(settings) {
  try {
    const response = await axios.put('/api/settings/app', settings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Theme Settings
export async function getThemeSettings(userId) {
  try {
    const response = await axios.get(`/api/settings/theme/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateThemeSettings(userId, themeSettings) {
  try {
    const response = await axios.put(`/api/settings/theme/${userId}`, themeSettings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Notification Settings
export async function getNotificationSettings(userId) {
  try {
    const response = await axios.get(`/api/settings/notifications/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateNotificationSettings(userId, notificationSettings) {
  try {
    const response = await axios.put(`/api/settings/notifications/${userId}`, notificationSettings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Privacy Settings
export async function getPrivacySettings(userId) {
  try {
    const response = await axios.get(`/api/settings/privacy/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updatePrivacySettings(userId, privacySettings) {
  try {
    const response = await axios.put(`/api/settings/privacy/${userId}`, privacySettings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Security Settings
export async function getSecuritySettings(userId) {
  try {
    const response = await axios.get(`/api/settings/security/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateSecuritySettings(userId, securitySettings) {
  try {
    const response = await axios.put(`/api/settings/security/${userId}`, securitySettings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Language Settings
export async function getLanguageSettings(userId) {
  try {
    const response = await axios.get(`/api/settings/language/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateLanguageSettings(userId, languageSettings) {
  try {
    const response = await axios.put(`/api/settings/language/${userId}`, languageSettings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Email Settings
export async function getEmailSettings() {
  try {
    const response = await axios.get('/api/settings/email');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateEmailSettings(emailSettings) {
  try {
    const response = await axios.put('/api/settings/email', emailSettings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Database Settings
export async function getDatabaseSettings() {
  try {
    const response = await axios.get('/api/settings/database');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateDatabaseSettings(dbSettings) {
  try {
    const response = await axios.put('/api/settings/database', dbSettings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Backup Settings
export async function getBackupSettings() {
  try {
    const response = await axios.get('/api/settings/backup');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateBackupSettings(backupSettings) {
  try {
    const response = await axios.put('/api/settings/backup', backupSettings);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get all settings for a specific category
export async function getSettingsByCategory(category, userId = null) {
  try {
    const params = userId ? { userId } : {};
    const response = await axios.get(`/api/settings/category/${category}`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Update multiple settings at once
export async function updateMultipleSettings(settingsData) {
  try {
    const response = await axios.put('/api/settings/bulk', settingsData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Reset settings to default
export async function resetSettingsToDefault(category, userId = null) {
  try {
    const data = userId ? { userId } : {};
    const response = await axios.post(`/api/settings/reset/${category}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Export settings
export async function exportSettings(categories = [], userId = null) {
  try {
    const params = {
      categories: categories.join(','),
      ...(userId && { userId })
    };
    const response = await axios.get('/api/settings/export', {
      params,
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Import settings
export async function importSettings(file, userId = null) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    if (userId) {
      formData.append('userId', userId);
    }
    
    const response = await axios.post('/api/settings/import', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get settings history/audit log
export async function getSettingsHistory(category, userId = null, page = 1, limit = 10) {
  try {
    const params = {
      page,
      limit,
      ...(userId && { userId })
    };
    const response = await axios.get(`/api/settings/history/${category}`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Validate settings before saving
export async function validateSettings(settingsData) {
  try {
    const response = await axios.post('/api/settings/validate', settingsData);
    return response.data;
  } catch (error) {
    throw error;
  }
}