const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3010;

// Middleware
app.use(cors());
app.use(express.json());

// Data storage file
const dataFile = path.join(__dirname, 'mock-data.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(dataFile)) {
  const initialData = {
    users: [
      {
        id: 1,
        firstName: 'أحمد',
        lastName: 'محمد',
        email: 'ahmed@example.com',
        phone: '+966501234567',
        role: 'Admin',
        status: 'active',
        avatar: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 2,
        firstName: 'فاطمة',
        lastName: 'علي',
        email: 'fatima@example.com',
        phone: '+966507654321',
        role: 'User',
        status: 'active',
        avatar: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
    settings: {
      siteName: 'نظام إدارة المستخدمين',
      language: 'ar',
      timezone: 'Asia/Riyadh',
      emailNotifications: true,
      smsNotifications: false
    },
    roles: [
      { id: 1, name: 'Admin', permissions: ['all'] },
      { id: 2, name: 'User', permissions: ['read'] },
      { id: 3, name: 'Manager', permissions: ['read', 'write'] }
    ]
  };
  fs.writeFileSync(dataFile, JSON.stringify(initialData, null, 2));
}

// Helper functions
function readData() {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return { users: [], settings: {}, roles: [] };
  }
}

function writeData(data) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
}

// Users API Routes

// Get all users
app.get('/api/users', (req, res) => {
  try {
    const data = readData();
    console.log('📋 Fetching users:', data.users.length, 'users found');
    res.json({ success: true, data: data.users });
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Error fetching users' });
  }
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  try {
    const data = readData();
    const user = data.users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      console.log('👤 User found:', user.firstName, user.lastName);
      res.json({ success: true, data: user });
    } else {
      console.log('❌ User not found with ID:', req.params.id);
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('❌ Error fetching user:', error);
    res.status(500).json({ success: false, message: 'Error fetching user' });
  }
});

// Create new user
app.post('/api/users', (req, res) => {
  try {
    const data = readData();
    const newUser = {
      id: Date.now(), // Simple ID generation
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    data.users.push(newUser);
    
    if (writeData(data)) {
      console.log('✅ User created successfully:', newUser.firstName, newUser.lastName);
      res.status(201).json({ success: true, data: newUser, message: 'تم إنشاء المستخدم بنجاح' });
    } else {
      console.error('❌ Error saving user to file');
      res.status(500).json({ success: false, message: 'خطأ في حفظ المستخدم' });
    }
  } catch (error) {
    console.error('❌ Error creating user:', error);
    res.status(500).json({ success: false, message: 'خطأ في إنشاء المستخدم' });
  }
});

// Update user
app.put('/api/users/:id', (req, res) => {
  try {
    const data = readData();
    const userIndex = data.users.findIndex(u => u.id === parseInt(req.params.id));
    
    if (userIndex !== -1) {
      data.users[userIndex] = {
        ...data.users[userIndex],
        ...req.body,
        updatedAt: new Date().toISOString()
      };
      
      if (writeData(data)) {
        console.log('✅ User updated successfully:', data.users[userIndex].firstName, data.users[userIndex].lastName);
        res.json({ success: true, data: data.users[userIndex], message: 'تم تحديث المستخدم بنجاح' });
      } else {
        console.error('❌ Error saving updated user to file');
        res.status(500).json({ success: false, message: 'خطأ في حفظ التحديثات' });
      }
    } else {
      console.log('❌ User not found for update with ID:', req.params.id);
      res.status(404).json({ success: false, message: 'المستخدم غير موجود' });
    }
  } catch (error) {
    console.error('❌ Error updating user:', error);
    res.status(500).json({ success: false, message: 'خطأ في تحديث المستخدم' });
  }
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
  try {
    const data = readData();
    const userIndex = data.users.findIndex(u => u.id === parseInt(req.params.id));
    
    if (userIndex !== -1) {
      const deletedUser = data.users.splice(userIndex, 1)[0];
      
      if (writeData(data)) {
        console.log('✅ User deleted successfully:', deletedUser.firstName, deletedUser.lastName);
        res.json({ success: true, data: deletedUser, message: 'تم حذف المستخدم بنجاح' });
      } else {
        console.error('❌ Error saving data after deletion');
        res.status(500).json({ success: false, message: 'خطأ في حفظ البيانات' });
      }
    } else {
      console.log('❌ User not found for deletion with ID:', req.params.id);
      res.status(404).json({ success: false, message: 'المستخدم غير موجود' });
    }
  } catch (error) {
    console.error('❌ Error deleting user:', error);
    res.status(500).json({ success: false, message: 'خطأ في حذف المستخدم' });
  }
});

// Bulk operations
app.post('/api/users/bulk-delete', (req, res) => {
  try {
    const { ids } = req.body;
    const data = readData();
    
    const beforeCount = data.users.length;
    data.users = data.users.filter(user => !ids.includes(user.id));
    const deletedCount = beforeCount - data.users.length;
    
    if (writeData(data)) {
      console.log(`✅ Bulk delete successful: ${deletedCount} users deleted`);
      res.json({ success: true, message: `تم حذف ${deletedCount} مستخدم بنجاح` });
    } else {
      console.error('❌ Error saving data after bulk delete');
      res.status(500).json({ success: false, message: 'خطأ في حفظ البيانات' });
    }
  } catch (error) {
    console.error('❌ Error bulk deleting users:', error);
    res.status(500).json({ success: false, message: 'خطأ في الحذف المجمع' });
  }
});

// Roles API Routes

// Get all roles
app.get('/api/roles', (req, res) => {
  try {
    const data = readData();
    console.log('🛡️ Fetching roles:', data.roles.length, 'roles found');
    res.json({ success: true, data: data.roles });
  } catch (error) {
    console.error('❌ Error fetching roles:', error);
    res.status(500).json({ success: false, message: 'خطأ في جلب الأدوار' });
  }
});

// Create new role
app.post('/api/roles', (req, res) => {
  try {
    const data = readData();
    const newRole = {
      id: Date.now(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    data.roles.push(newRole);
    
    if (writeData(data)) {
      console.log('✅ Role created successfully:', newRole.name);
      res.status(201).json({ success: true, data: newRole, message: 'تم إنشاء الدور بنجاح' });
    } else {
      console.error('❌ Error saving role to file');
      res.status(500).json({ success: false, message: 'خطأ في حفظ الدور' });
    }
  } catch (error) {
    console.error('❌ Error creating role:', error);
    res.status(500).json({ success: false, message: 'خطأ في إنشاء الدور' });
  }
});

// Settings API Routes

// Get settings
app.get('/api/settings', (req, res) => {
  try {
    const data = readData();
    console.log('⚙️ Fetching settings');
    res.json({ success: true, data: data.settings });
  } catch (error) {
    console.error('❌ Error fetching settings:', error);
    res.status(500).json({ success: false, message: 'خطأ في جلب الإعدادات' });
  }
});

// Update settings
app.put('/api/settings', (req, res) => {
  try {
    const data = readData();
    data.settings = {
      ...data.settings,
      ...req.body,
      updatedAt: new Date().toISOString()
    };
    
    if (writeData(data)) {
      console.log('✅ Settings updated successfully');
      res.json({ success: true, data: data.settings, message: 'تم تحديث الإعدادات بنجاح' });
    } else {
      console.error('❌ Error saving settings to file');
      res.status(500).json({ success: false, message: 'خطأ في حفظ الإعدادات' });
    }
  } catch (error) {
    console.error('❌ Error updating settings:', error);
    res.status(500).json({ success: false, message: 'خطأ في تحديث الإعدادات' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API Server is running', 
    timestamp: new Date().toISOString(),
    dataFile: fs.existsSync(dataFile) ? 'exists' : 'missing'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('💥 Server error:', err);
  res.status(500).json({ success: false, message: 'خطأ داخلي في الخادم' });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n🚀 Mock API Server is running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    console.log(`👥 Users API: http://localhost:${PORT}/api/users`);
    console.log(`🔧 Settings API: http://localhost:${PORT}/api/settings`);
    console.log(`🛡️ Roles API: http://localhost:${PORT}/api/roles`);
    console.log(`📁 Data file: ${dataFile}\n`);
  });
}

module.exports = app;