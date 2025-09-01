import { useState, useEffect } from 'react';

// material-ui
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
  Alert,
  Snackbar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';

// third-party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project-imports
import MainCard from 'components/MainCard';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import {
  getSystemSettings,
  updateSystemSettings,
  getUserSettings,
  updateUserSettings,
  getApplicationSettings,
  updateApplicationSettings,
  getNotificationSettings,
  updateNotificationSettings,
  getSecuritySettings,
  updateSecuritySettings,
  resetSettings,
  exportSettings,
  importSettings
} from 'api/settings';

// assets
import {
  Setting2,
  Notification,
  SecuritySafe,
  Global,
  Profile2User,
  Mobile,
  DocumentDownload,
  DocumentUpload,
  Refresh,
  Edit
} from 'iconsax-reactjs';

// ==============================|| TAB PANEL ||============================== //

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

// ==============================|| SETTINGS ||============================== //

export default function Settings() {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [resetDialog, setResetDialog] = useState(false);
  const [importDialog, setImportDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  // Settings state
  const [systemSettings, setSystemSettings] = useState({});
  const [userSettings, setUserSettings] = useState({});
  const [appSettings, setAppSettings] = useState({});
  const [notificationSettings, setNotificationSettings] = useState({});
  const [securitySettings, setSecuritySettings] = useState({});

  // Load settings on component mount
  useEffect(() => {
    loadAllSettings();
  }, []);

  const loadAllSettings = async () => {
    try {
      setLoading(true);
      const [system, user, app, notification, security] = await Promise.all([
        getSystemSettings(),
        getUserSettings(),
        getApplicationSettings(),
        getNotificationSettings(),
        getSecuritySettings()
      ]);
      
      setSystemSettings(system.settings || {});
      setUserSettings(user.settings || {});
      setAppSettings(app.settings || {});
      setNotificationSettings(notification.settings || {});
      setSecuritySettings(security.settings || {});
    } catch (error) {
      console.error('Error loading settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في تحميل الإعدادات',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle system settings update
  const handleSystemSettingsSubmit = async (values, { setSubmitting }) => {
    try {
      await updateSystemSettings(values);
      setSystemSettings(values);
      setSnackbar({
        open: true,
        message: 'تم حفظ إعدادات النظام بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error updating system settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حفظ إعدادات النظام',
        severity: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Handle user settings update
  const handleUserSettingsSubmit = async (values, { setSubmitting }) => {
    try {
      await updateUserSettings(values);
      setUserSettings(values);
      setSnackbar({
        open: true,
        message: 'تم حفظ إعدادات المستخدم بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error updating user settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حفظ إعدادات المستخدم',
        severity: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Handle application settings update
  const handleAppSettingsSubmit = async (values, { setSubmitting }) => {
    try {
      await updateApplicationSettings(values);
      setAppSettings(values);
      setSnackbar({
        open: true,
        message: 'تم حفظ إعدادات التطبيق بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error updating application settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حفظ إعدادات التطبيق',
        severity: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Handle notification settings update
  const handleNotificationSettingsSubmit = async (values, { setSubmitting }) => {
    try {
      await updateNotificationSettings(values);
      setNotificationSettings(values);
      setSnackbar({
        open: true,
        message: 'تم حفظ إعدادات الإشعارات بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error updating notification settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حفظ إعدادات الإشعارات',
        severity: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Handle security settings update
  const handleSecuritySettingsSubmit = async (values, { setSubmitting }) => {
    try {
      await updateSecuritySettings(values);
      setSecuritySettings(values);
      setSnackbar({
        open: true,
        message: 'تم حفظ إعدادات الأمان بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error updating security settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حفظ إعدادات الأمان',
        severity: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Handle export settings
  const handleExportSettings = async () => {
    try {
      const response = await exportSettings();
      const blob = new Blob([JSON.stringify(response.data, null, 2)], {
        type: 'application/json'
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `settings-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setSnackbar({
        open: true,
        message: 'تم تصدير الإعدادات بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error exporting settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في تصدير الإعدادات',
        severity: 'error'
      });
    }
  };

  // Handle import settings
  const handleImportSettings = async () => {
    if (!selectedFile) {
      setSnackbar({
        open: true,
        message: 'يرجى اختيار ملف للاستيراد',
        severity: 'warning'
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('settings', selectedFile);
      
      await importSettings(formData);
      await loadAllSettings(); // Reload settings
      
      setImportDialog(false);
      setSelectedFile(null);
      setSnackbar({
        open: true,
        message: 'تم استيراد الإعدادات بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error importing settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في استيراد الإعدادات',
        severity: 'error'
      });
    }
  };

  // Handle reset settings
  const handleResetSettings = async () => {
    try {
      await resetSettings();
      await loadAllSettings(); // Reload settings
      
      setResetDialog(false);
      setSnackbar({
        open: true,
        message: 'تم إعادة تعيين الإعدادات بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error resetting settings:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في إعادة تعيين الإعدادات',
        severity: 'error'
      });
    }
  };

  const breadcrumbLinks = [
    { title: 'الرئيسية', to: '/' },
    { title: 'الإعدادات' }
  ];

  return (
    <>
      <Breadcrumbs custom links={breadcrumbLinks} />
      
      <MainCard>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
          <Typography variant="h4">إدارة الإعدادات</Typography>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              startIcon={<DocumentDownload />}
              onClick={handleExportSettings}
              size="small"
            >
              تصدير
            </Button>
            <Button
              variant="outlined"
              startIcon={<DocumentUpload />}
              onClick={() => setImportDialog(true)}
              size="small"
            >
              استيراد
            </Button>
            <Button
              variant="outlined"
              color="warning"
              startIcon={<Refresh />}
              onClick={() => setResetDialog(true)}
              size="small"
            >
              إعادة تعيين
            </Button>
          </Stack>
        </Stack>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
            <Tab label="النظام" icon={<Setting2 />} iconPosition="start" />
            <Tab label="المستخدم" icon={<Profile2User />} iconPosition="start" />
            <Tab label="التطبيق" icon={<Mobile />} iconPosition="start" />
            <Tab label="الإشعارات" icon={<Notification />} iconPosition="start" />
            <Tab label="الأمان" icon={<SecuritySafe />} iconPosition="start" />
          </Tabs>
        </Box>

        {/* System Settings Tab */}
        <TabPanel value={tabValue} index={0}>
          <Formik
            initialValues={{
              siteName: systemSettings.siteName || 'Able Pro',
              siteDescription: systemSettings.siteDescription || '',
              adminEmail: systemSettings.adminEmail || '',
              timezone: systemSettings.timezone || 'Asia/Riyadh',
              dateFormat: systemSettings.dateFormat || 'dd/MM/yyyy',
              language: systemSettings.language || 'ar',
              maintenanceMode: systemSettings.maintenanceMode || false,
              registrationEnabled: systemSettings.registrationEnabled || true,
              emailVerificationRequired: systemSettings.emailVerificationRequired || true
            }}
            onSubmit={handleSystemSettingsSubmit}
            enableReinitialize
          >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="siteName"
                      label="اسم الموقع"
                      value={values.siteName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="adminEmail"
                      label="بريد المدير الإلكتروني"
                      type="email"
                      value={values.adminEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="siteDescription"
                      label="وصف الموقع"
                      multiline
                      rows={3}
                      value={values.siteDescription}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <InputLabel>المنطقة الزمنية</InputLabel>
                      <Select
                        name="timezone"
                        value={values.timezone}
                        onChange={handleChange}
                        label="المنطقة الزمنية"
                      >
                        <MenuItem value="Asia/Riyadh">الرياض</MenuItem>
                        <MenuItem value="Asia/Dubai">دبي</MenuItem>
                        <MenuItem value="Africa/Cairo">القاهرة</MenuItem>
                        <MenuItem value="UTC">UTC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <InputLabel>تنسيق التاريخ</InputLabel>
                      <Select
                        name="dateFormat"
                        value={values.dateFormat}
                        onChange={handleChange}
                        label="تنسيق التاريخ"
                      >
                        <MenuItem value="dd/MM/yyyy">يوم/شهر/سنة</MenuItem>
                        <MenuItem value="MM/dd/yyyy">شهر/يوم/سنة</MenuItem>
                        <MenuItem value="yyyy-MM-dd">سنة-شهر-يوم</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <InputLabel>اللغة الافتراضية</InputLabel>
                      <Select
                        name="language"
                        value={values.language}
                        onChange={handleChange}
                        label="اللغة الافتراضية"
                      >
                        <MenuItem value="ar">العربية</MenuItem>
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="fr">Français</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={2}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.maintenanceMode}
                            onChange={(e) => setFieldValue('maintenanceMode', e.target.checked)}
                          />
                        }
                        label="وضع الصيانة"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.registrationEnabled}
                            onChange={(e) => setFieldValue('registrationEnabled', e.target.checked)}
                          />
                        }
                        label="السماح بالتسجيل"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.emailVerificationRequired}
                            onChange={(e) => setFieldValue('emailVerificationRequired', e.target.checked)}
                          />
                        }
                        label="تأكيد البريد الإلكتروني مطلوب"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      حفظ إعدادات النظام
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </TabPanel>

        {/* User Settings Tab */}
        <TabPanel value={tabValue} index={1}>
          <Formik
            initialValues={{
              defaultRole: userSettings.defaultRole || 'user',
              profileVisibility: userSettings.profileVisibility || 'public',
              allowProfileEdit: userSettings.allowProfileEdit || true,
              allowPasswordChange: userSettings.allowPasswordChange || true,
              sessionTimeout: userSettings.sessionTimeout || 30,
              maxLoginAttempts: userSettings.maxLoginAttempts || 5
            }}
            onSubmit={handleUserSettingsSubmit}
            enableReinitialize
          >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>الدور الافتراضي للمستخدمين الجدد</InputLabel>
                      <Select
                        name="defaultRole"
                        value={values.defaultRole}
                        onChange={handleChange}
                        label="الدور الافتراضي للمستخدمين الجدد"
                      >
                        <MenuItem value="user">مستخدم</MenuItem>
                        <MenuItem value="manager">مدير قسم</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>رؤية الملف الشخصي الافتراضية</InputLabel>
                      <Select
                        name="profileVisibility"
                        value={values.profileVisibility}
                        onChange={handleChange}
                        label="رؤية الملف الشخصي الافتراضية"
                      >
                        <MenuItem value="public">عام</MenuItem>
                        <MenuItem value="private">خاص</MenuItem>
                        <MenuItem value="friends">الأصدقاء فقط</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="sessionTimeout"
                      label="انتهاء الجلسة (بالدقائق)"
                      type="number"
                      value={values.sessionTimeout}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="maxLoginAttempts"
                      label="الحد الأقصى لمحاولات تسجيل الدخول"
                      type="number"
                      value={values.maxLoginAttempts}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={2}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.allowProfileEdit}
                            onChange={(e) => setFieldValue('allowProfileEdit', e.target.checked)}
                          />
                        }
                        label="السماح للمستخدمين بتعديل ملفاتهم الشخصية"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.allowPasswordChange}
                            onChange={(e) => setFieldValue('allowPasswordChange', e.target.checked)}
                          />
                        }
                        label="السماح للمستخدمين بتغيير كلمات المرور"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      حفظ إعدادات المستخدم
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </TabPanel>

        {/* Application Settings Tab */}
        <TabPanel value={tabValue} index={2}>
          <Formik
            initialValues={{
              appName: appSettings.appName || 'Able Pro',
              appVersion: appSettings.appVersion || '1.0.0',
              theme: appSettings.theme || 'light',
              primaryColor: appSettings.primaryColor || '#1976d2',
              itemsPerPage: appSettings.itemsPerPage || 10,
              enableDarkMode: appSettings.enableDarkMode || true,
              enableRTL: appSettings.enableRTL || true
            }}
            onSubmit={handleAppSettingsSubmit}
            enableReinitialize
          >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="appName"
                      label="اسم التطبيق"
                      value={values.appName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="appVersion"
                      label="إصدار التطبيق"
                      value={values.appVersion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>المظهر الافتراضي</InputLabel>
                      <Select
                        name="theme"
                        value={values.theme}
                        onChange={handleChange}
                        label="المظهر الافتراضي"
                      >
                        <MenuItem value="light">فاتح</MenuItem>
                        <MenuItem value="dark">داكن</MenuItem>
                        <MenuItem value="auto">تلقائي</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="primaryColor"
                      label="اللون الأساسي"
                      type="color"
                      value={values.primaryColor}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="itemsPerPage"
                      label="عدد العناصر في الصفحة"
                      type="number"
                      value={values.itemsPerPage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={2}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.enableDarkMode}
                            onChange={(e) => setFieldValue('enableDarkMode', e.target.checked)}
                          />
                        }
                        label="تفعيل الوضع الداكن"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.enableRTL}
                            onChange={(e) => setFieldValue('enableRTL', e.target.checked)}
                          />
                        }
                        label="تفعيل الكتابة من اليمين لليسار"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      حفظ إعدادات التطبيق
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </TabPanel>

        {/* Notification Settings Tab */}
        <TabPanel value={tabValue} index={3}>
          <Formik
            initialValues={{
              emailNotifications: notificationSettings.emailNotifications || true,
              smsNotifications: notificationSettings.smsNotifications || false,
              pushNotifications: notificationSettings.pushNotifications || true,
              notifyOnUserRegistration: notificationSettings.notifyOnUserRegistration || true,
              notifyOnUserLogin: notificationSettings.notifyOnUserLogin || false,
              notifyOnSystemErrors: notificationSettings.notifyOnSystemErrors || true,
              emailTemplate: notificationSettings.emailTemplate || 'default'
            }}
            onSubmit={handleNotificationSettingsSubmit}
            enableReinitialize
          >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      أنواع الإشعارات
                    </Typography>
                    <Stack spacing={2}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.emailNotifications}
                            onChange={(e) => setFieldValue('emailNotifications', e.target.checked)}
                          />
                        }
                        label="إشعارات البريد الإلكتروني"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.smsNotifications}
                            onChange={(e) => setFieldValue('smsNotifications', e.target.checked)}
                          />
                        }
                        label="إشعارات الرسائل النصية"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.pushNotifications}
                            onChange={(e) => setFieldValue('pushNotifications', e.target.checked)}
                          />
                        }
                        label="الإشعارات المنبثقة"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      إشعارات الأحداث
                    </Typography>
                    <Stack spacing={2}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.notifyOnUserRegistration}
                            onChange={(e) => setFieldValue('notifyOnUserRegistration', e.target.checked)}
                          />
                        }
                        label="إشعار عند تسجيل مستخدم جديد"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.notifyOnUserLogin}
                            onChange={(e) => setFieldValue('notifyOnUserLogin', e.target.checked)}
                          />
                        }
                        label="إشعار عند تسجيل دخول المستخدمين"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.notifyOnSystemErrors}
                            onChange={(e) => setFieldValue('notifyOnSystemErrors', e.target.checked)}
                          />
                        }
                        label="إشعار عند حدوث أخطاء في النظام"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>قالب البريد الإلكتروني</InputLabel>
                      <Select
                        name="emailTemplate"
                        value={values.emailTemplate}
                        onChange={handleChange}
                        label="قالب البريد الإلكتروني"
                      >
                        <MenuItem value="default">افتراضي</MenuItem>
                        <MenuItem value="modern">حديث</MenuItem>
                        <MenuItem value="classic">كلاسيكي</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      حفظ إعدادات الإشعارات
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </TabPanel>

        {/* Security Settings Tab */}
        <TabPanel value={tabValue} index={4}>
          <Formik
            initialValues={{
              passwordMinLength: securitySettings.passwordMinLength || 8,
              passwordRequireUppercase: securitySettings.passwordRequireUppercase || true,
              passwordRequireLowercase: securitySettings.passwordRequireLowercase || true,
              passwordRequireNumbers: securitySettings.passwordRequireNumbers || true,
              passwordRequireSymbols: securitySettings.passwordRequireSymbols || false,
              enableTwoFactor: securitySettings.enableTwoFactor || false,
              sessionTimeout: securitySettings.sessionTimeout || 30,
              maxLoginAttempts: securitySettings.maxLoginAttempts || 5,
              lockoutDuration: securitySettings.lockoutDuration || 15
            }}
            onSubmit={handleSecuritySettingsSubmit}
            enableReinitialize
          >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      متطلبات كلمة المرور
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="passwordMinLength"
                      label="الحد الأدنى لطول كلمة المرور"
                      type="number"
                      value={values.passwordMinLength}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={2}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.passwordRequireUppercase}
                            onChange={(e) => setFieldValue('passwordRequireUppercase', e.target.checked)}
                          />
                        }
                        label="يجب أن تحتوي على أحرف كبيرة"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.passwordRequireLowercase}
                            onChange={(e) => setFieldValue('passwordRequireLowercase', e.target.checked)}
                          />
                        }
                        label="يجب أن تحتوي على أحرف صغيرة"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.passwordRequireNumbers}
                            onChange={(e) => setFieldValue('passwordRequireNumbers', e.target.checked)}
                          />
                        }
                        label="يجب أن تحتوي على أرقام"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.passwordRequireSymbols}
                            onChange={(e) => setFieldValue('passwordRequireSymbols', e.target.checked)}
                          />
                        }
                        label="يجب أن تحتوي على رموز خاصة"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      إعدادات الأمان
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="sessionTimeout"
                      label="انتهاء الجلسة (بالدقائق)"
                      type="number"
                      value={values.sessionTimeout}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="maxLoginAttempts"
                      label="الحد الأقصى لمحاولات تسجيل الدخول"
                      type="number"
                      value={values.maxLoginAttempts}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="lockoutDuration"
                      label="مدة الحظر (بالدقائق)"
                      type="number"
                      value={values.lockoutDuration}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={values.enableTwoFactor}
                          onChange={(e) => setFieldValue('enableTwoFactor', e.target.checked)}
                        />
                      }
                      label="تفعيل المصادقة الثنائية"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      حفظ إعدادات الأمان
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </TabPanel>
      </MainCard>

      {/* Import Dialog */}
      <Dialog open={importDialog} onClose={() => setImportDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>استيراد الإعدادات</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              اختر ملف JSON يحتوي على الإعدادات المراد استيرادها
            </Typography>
            <input
              accept=".json"
              style={{ display: 'none' }}
              id="settings-file-upload"
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <label htmlFor="settings-file-upload">
              <Button variant="outlined" component="span" fullWidth>
                اختيار ملف
              </Button>
            </label>
            {selectedFile && (
              <Typography variant="body2">
                الملف المحدد: {selectedFile.name}
              </Typography>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImportDialog(false)}>إلغاء</Button>
          <Button onClick={handleImportSettings} variant="contained">
            استيراد
          </Button>
        </DialogActions>
      </Dialog>

      {/* Reset Dialog */}
      <Dialog open={resetDialog} onClose={() => setResetDialog(false)}>
        <DialogTitle>إعادة تعيين الإعدادات</DialogTitle>
        <DialogContent>
          <Typography>
            هل أنت متأكد من إعادة تعيين جميع الإعدادات إلى القيم الافتراضية؟ هذا الإجراء لا يمكن التراجع عنه.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResetDialog(false)}>إلغاء</Button>
          <Button onClick={handleResetSettings} color="warning" variant="contained">
            إعادة تعيين
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}