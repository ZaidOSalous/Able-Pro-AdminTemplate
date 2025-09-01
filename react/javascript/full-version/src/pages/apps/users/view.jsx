import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// material-ui
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
  Alert,
  Snackbar,
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

// third-party
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

// project-imports
import MainCard from 'components/MainCard';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import { getUserById, deleteUser, updateUserStatus, getUserActivity } from 'api/users';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';

// assets
import {
  ArrowLeft,
  Edit,
  Trash,
  Call,
  Sms,
  Location,
  Calendar,
  Profile2User,
  SecurityUser,
  Activity,
  Setting2
} from 'iconsax-reactjs';

// ==============================|| TAB PANEL ||============================== //

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`user-tabpanel-${index}`}
      aria-labelledby={`user-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

// ==============================|| VIEW USER ||============================== //

export default function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userActivity, setUserActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await getUserById(id);
        setUser(response.user);
        
        // Fetch user activity
        const activityResponse = await getUserActivity(id);
        setUserActivity(activityResponse.activities || []);
      } catch (error) {
        console.error('Error fetching user:', error);
        setSnackbar({
          open: true,
          message: 'خطأ في تحميل بيانات المستخدم',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  // Handle status toggle
  const handleStatusToggle = async () => {
    try {
      const newStatus = user.status === 'active' ? 'inactive' : 'active';
      await updateUserStatus(user.id, newStatus);
      
      setUser(prevUser => ({ ...prevUser, status: newStatus }));
      
      setSnackbar({
        open: true,
        message: `تم ${newStatus === 'active' ? 'تفعيل' : 'إلغاء تفعيل'} المستخدم بنجاح`,
        severity: 'success'
      });
    } catch (error) {
      console.error('Error updating user status:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في تحديث حالة المستخدم',
        severity: 'error'
      });
    }
  };

  // Handle delete user
  const handleDeleteUser = async () => {
    try {
      await deleteUser(user.id);
      setDeleteDialog(false);
      setSnackbar({
        open: true,
        message: 'تم حذف المستخدم بنجاح',
        severity: 'success'
      });
      
      // Navigate to user list after 2 seconds
      setTimeout(() => {
        navigate('/apps/users/list');
      }, 2000);
    } catch (error) {
      console.error('Error deleting user:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حذف المستخدم',
        severity: 'error'
      });
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const breadcrumbLinks = [
    { title: 'الرئيسية', to: '/' },
    { title: 'المستخدمين', to: '/apps/users/list' },
    { title: user ? `${user.firstName} ${user.lastName}` : 'عرض المستخدم' }
  ];

  if (loading) {
    return (
      <MainCard>
        <Typography>جاري التحميل...</Typography>
      </MainCard>
    );
  }

  if (!user) {
    return (
      <MainCard>
        <Typography>المستخدم غير موجود</Typography>
      </MainCard>
    );
  }

  return (
    <>
      <Breadcrumbs custom links={breadcrumbLinks} />
      
      <Grid container spacing={3}>
        {/* User Profile Card */}
        <Grid item xs={12} md={4}>
          <MainCard>
            <Stack spacing={3} alignItems="center">
              <Avatar
                src={user.avatar ? getImageUrl(`avatar-${user.avatar}.png`, ImagePath.USERS) : undefined}
                sx={{ width: 120, height: 120 }}
              >
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </Avatar>
              
              <Stack spacing={1} alignItems="center">
                <Typography variant="h4">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
                <Chip
                  label={user.role === 'admin' ? 'مدير' : user.role === 'manager' ? 'مدير قسم' : 'مستخدم'}
                  color={user.role === 'admin' ? 'error' : user.role === 'manager' ? 'warning' : 'success'}
                  variant="light"
                />
                <Chip
                  label={user.status === 'active' ? 'نشط' : 'غير نشط'}
                  color={user.status === 'active' ? 'success' : 'error'}
                  variant="light"
                  onClick={handleStatusToggle}
                  sx={{ cursor: 'pointer' }}
                />
              </Stack>

              <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                <Button
                  variant="contained"
                  startIcon={<Edit />}
                  onClick={() => navigate(`/apps/users/edit/${user.id}`)}
                  fullWidth
                >
                  تعديل
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<Trash />}
                  onClick={() => setDeleteDialog(true)}
                  fullWidth
                >
                  حذف
                </Button>
              </Stack>
            </Stack>
          </MainCard>

          {/* Quick Info */}
          <MainCard sx={{ mt: 3 }}>
            <CardHeader title="معلومات سريعة" />
            <Divider />
            <CardContent>
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Call size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary="رقم الهاتف"
                    secondary={user.phone || 'غير محدد'}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Sms size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary="البريد الإلكتروني"
                    secondary={user.email}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Location size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary="الموقع"
                    secondary={user.city && user.country ? `${user.city}, ${user.country}` : 'غير محدد'}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Calendar size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary="تاريخ التسجيل"
                    secondary={format(new Date(user.createdAt), 'dd MMMM yyyy', { locale: ar })}
                  />
                </ListItem>
              </List>
            </CardContent>
          </MainCard>
        </Grid>

        {/* User Details */}
        <Grid item xs={12} md={8}>
          <MainCard>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <IconButton onClick={() => navigate('/apps/users/list')}>
                <ArrowLeft />
              </IconButton>
              <Typography variant="h4">تفاصيل المستخدم</Typography>
            </Stack>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab
                  label="المعلومات الشخصية"
                  icon={<Profile2User />}
                  iconPosition="start"
                />
                <Tab
                  label="الأمان والصلاحيات"
                  icon={<SecurityUser />}
                  iconPosition="start"
                />
                <Tab
                  label="النشاطات"
                  icon={<Activity />}
                  iconPosition="start"
                />
                <Tab
                  label="الإعدادات"
                  icon={<Setting2 />}
                  iconPosition="start"
                />
              </Tabs>
            </Box>

            {/* Personal Information Tab */}
            <TabPanel value={tabValue} index={0}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">الاسم الأول</Typography>
                  <Typography variant="body1">{user.firstName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">الاسم الأخير</Typography>
                  <Typography variant="body1">{user.lastName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">البريد الإلكتروني</Typography>
                  <Typography variant="body1">{user.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">رقم الهاتف</Typography>
                  <Typography variant="body1">{user.phone || 'غير محدد'}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">تاريخ الميلاد</Typography>
                  <Typography variant="body1">
                    {user.dateOfBirth ? format(new Date(user.dateOfBirth), 'dd MMMM yyyy', { locale: ar }) : 'غير محدد'}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">الجنس</Typography>
                  <Typography variant="body1">
                    {user.gender === 'male' ? 'ذكر' : user.gender === 'female' ? 'أنثى' : 'غير محدد'}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">القسم</Typography>
                  <Typography variant="body1">{user.department || 'غير محدد'}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">المسمى الوظيفي</Typography>
                  <Typography variant="body1">{user.jobTitle || 'غير محدد'}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="text.secondary">العنوان</Typography>
                  <Typography variant="body1">{user.address || 'غير محدد'}</Typography>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Security & Permissions Tab */}
            <TabPanel value={tabValue} index={1}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">الدور</Typography>
                  <Chip
                    label={user.role === 'admin' ? 'مدير' : user.role === 'manager' ? 'مدير قسم' : 'مستخدم'}
                    color={user.role === 'admin' ? 'error' : user.role === 'manager' ? 'warning' : 'success'}
                    variant="light"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">حالة الحساب</Typography>
                  <Chip
                    label={user.status === 'active' ? 'نشط' : 'غير نشط'}
                    color={user.status === 'active' ? 'success' : 'error'}
                    variant="light"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">تأكيد البريد الإلكتروني</Typography>
                  <Chip
                    label={user.emailVerified ? 'مؤكد' : 'غير مؤكد'}
                    color={user.emailVerified ? 'success' : 'warning'}
                    variant="light"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">تأكيد رقم الهاتف</Typography>
                  <Chip
                    label={user.phoneVerified ? 'مؤكد' : 'غير مؤكد'}
                    color={user.phoneVerified ? 'success' : 'warning'}
                    variant="light"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">آخر دخول</Typography>
                  <Typography variant="body1">
                    {user.lastLogin ? format(new Date(user.lastLogin), 'dd MMMM yyyy - HH:mm', { locale: ar }) : 'لم يسجل دخول'}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">تاريخ إنشاء الحساب</Typography>
                  <Typography variant="body1">
                    {format(new Date(user.createdAt), 'dd MMMM yyyy - HH:mm', { locale: ar })}
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Activity Tab */}
            <TabPanel value={tabValue} index={2}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>النشاط</TableCell>
                      <TableCell>التاريخ</TableCell>
                      <TableCell>عنوان IP</TableCell>
                      <TableCell>المتصفح</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userActivity.length > 0 ? (
                      userActivity.map((activity, index) => (
                        <TableRow key={index}>
                          <TableCell>{activity.action}</TableCell>
                          <TableCell>
                            {format(new Date(activity.createdAt), 'dd MMMM yyyy - HH:mm', { locale: ar })}
                          </TableCell>
                          <TableCell>{activity.ipAddress}</TableCell>
                          <TableCell>{activity.userAgent}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} align="center">
                          لا توجد أنشطة مسجلة
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>

            {/* Settings Tab */}
            <TabPanel value={tabValue} index={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    إعدادات الإشعارات
                  </Typography>
                  <Stack spacing={2}>
                    <Typography variant="body2">
                      إشعارات البريد الإلكتروني: {user.emailNotifications ? 'مفعلة' : 'معطلة'}
                    </Typography>
                    <Typography variant="body2">
                      إشعارات الرسائل النصية: {user.smsNotifications ? 'مفعلة' : 'معطلة'}
                    </Typography>
                    <Typography variant="body2">
                      إشعارات التطبيق: {user.pushNotifications ? 'مفعلة' : 'معطلة'}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    إعدادات الخصوصية
                  </Typography>
                  <Stack spacing={2}>
                    <Typography variant="body2">
                      إظهار الملف الشخصي: {user.profileVisibility || 'عام'}
                    </Typography>
                    <Typography variant="body2">
                      السماح بالرسائل: {user.allowMessages ? 'نعم' : 'لا'}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
          </MainCard>
        </Grid>
      </Grid>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle>تأكيد الحذف</DialogTitle>
        <DialogContent>
          <Typography>
            هل أنت متأكد من حذف المستخدم "{user.firstName} {user.lastName}"؟ هذا الإجراء لا يمكن التراجع عنه.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)}>إلغاء</Button>
          <Button onClick={handleDeleteUser} color="error" variant="contained">
            حذف
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