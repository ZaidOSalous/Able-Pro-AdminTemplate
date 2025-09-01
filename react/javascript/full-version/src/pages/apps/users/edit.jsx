import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
  Alert,
  Snackbar,
  Avatar,
  IconButton
} from '@mui/material';

// third-party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project-imports
import MainCard from 'components/MainCard';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import { getUserById, updateUser } from 'api/users';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';

// assets
import { Camera, ArrowLeft } from 'iconsax-reactjs';

// validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('الاسم الأول مطلوب'),
  lastName: Yup.string().required('الاسم الأخير مطلوب'),
  email: Yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
  phone: Yup.string().required('رقم الهاتف مطلوب'),
  role: Yup.string().required('الدور مطلوب'),
  department: Yup.string(),
  jobTitle: Yup.string(),
  address: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  dateOfBirth: Yup.date(),
  gender: Yup.string(),
  password: Yup.string().min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'),
  confirmPassword: Yup.string().when('password', {
    is: (val) => val && val.length > 0,
    then: () => Yup.string().oneOf([Yup.ref('password'), null], 'كلمات المرور غير متطابقة').required('تأكيد كلمة المرور مطلوب'),
    otherwise: () => Yup.string()
  })
});

// ==============================|| EDIT USER ||============================== //

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [avatarPreview, setAvatarPreview] = useState(null);

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await getUserById(id);
        setUser(response.user);
        
        // Set avatar preview if user has avatar
        if (response.user.avatar) {
          setAvatarPreview(getImageUrl(`avatar-${response.user.avatar}.png`, ImagePath.USERS));
        }
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

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      setLoading(true);
      
      // Prepare form data
      const formData = new FormData();
      Object.keys(values).forEach(key => {
        if (key !== 'confirmPassword' && values[key] !== null && values[key] !== '') {
          // Don't send password if it's empty (means no change)
          if (key === 'password' && values[key] === '') {
            return;
          }
          formData.append(key, values[key]);
        }
      });

      const response = await updateUser(id, formData);
      
      setSnackbar({
        open: true,
        message: 'تم تحديث المستخدم بنجاح',
        severity: 'success'
      });
      
      // Navigate to user view after 2 seconds
      setTimeout(() => {
        navigate(`/apps/users/view/${id}`);
      }, 2000);
      
    } catch (error) {
      console.error('Error updating user:', error);
      
      if (error.response?.data?.errors) {
        // Handle validation errors
        Object.keys(error.response.data.errors).forEach(field => {
          setFieldError(field, error.response.data.errors[field][0]);
        });
      } else {
        setSnackbar({
          open: true,
          message: error.response?.data?.message || 'خطأ في تحديث المستخدم',
          severity: 'error'
        });
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const handleAvatarChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue('avatar', file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const breadcrumbLinks = [
    { title: 'الرئيسية', to: '/' },
    { title: 'المستخدمين', to: '/apps/users/list' },
    { title: user ? `${user.firstName} ${user.lastName}` : 'تعديل المستخدم', to: `/apps/users/view/${id}` },
    { title: 'تعديل' }
  ];

  if (loading && !user) {
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

  const initialValues = {
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phone: user.phone || '',
    password: '',
    confirmPassword: '',
    role: user.role || 'user',
    department: user.department || '',
    jobTitle: user.jobTitle || '',
    address: user.address || '',
    city: user.city || '',
    country: user.country || '',
    dateOfBirth: user.dateOfBirth ? user.dateOfBirth.split('T')[0] : '',
    gender: user.gender || '',
    isActive: user.status === 'active',
    emailVerified: user.emailVerified || false,
    phoneVerified: user.phoneVerified || false,
    avatar: null
  };

  return (
    <>
      <Breadcrumbs custom links={breadcrumbLinks} />
      
      <MainCard>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <IconButton onClick={() => navigate(`/apps/users/view/${id}`)}>
            <ArrowLeft />
          </IconButton>
          <Typography variant="h4">تعديل المستخدم</Typography>
        </Stack>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Personal Information */}
                <Grid item xs={12}>
                  <Card>
                    <CardHeader title="المعلومات الشخصية" />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={3}>
                        {/* Avatar Upload */}
                        <Grid item xs={12} sm={6} md={4}>
                          <Stack spacing={2} alignItems="center">
                            <Avatar
                              src={avatarPreview}
                              sx={{ width: 100, height: 100 }}
                            >
                              {values.firstName.charAt(0)}{values.lastName.charAt(0)}
                            </Avatar>
                            <input
                              accept="image/*"
                              style={{ display: 'none' }}
                              id="avatar-upload"
                              type="file"
                              onChange={(e) => handleAvatarChange(e, setFieldValue)}
                            />
                            <label htmlFor="avatar-upload">
                              <Button
                                variant="outlined"
                                component="span"
                                startIcon={<Camera />}
                                size="small"
                              >
                                تغيير الصورة
                              </Button>
                            </label>
                          </Stack>
                        </Grid>

                        <Grid item xs={12} sm={6} md={8}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                id="firstName"
                                name="firstName"
                                label="الاسم الأول *"
                                value={values.firstName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.firstName && errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                id="lastName"
                                name="lastName"
                                label="الاسم الأخير *"
                                value={values.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.lastName && errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="البريد الإلكتروني *"
                                type="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                label="رقم الهاتف *"
                                value={values.phone}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.phone && errors.phone)}
                                helperText={touched.phone && errors.phone}
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="dateOfBirth"
                            name="dateOfBirth"
                            label="تاريخ الميلاد"
                            type="date"
                            value={values.dateOfBirth}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth>
                            <InputLabel>الجنس</InputLabel>
                            <Select
                              id="gender"
                              name="gender"
                              value={values.gender}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="الجنس"
                            >
                              <MenuItem value="male">ذكر</MenuItem>
                              <MenuItem value="female">أنثى</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Account Information */}
                <Grid item xs={12}>
                  <Card>
                    <CardHeader title="معلومات الحساب" />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Alert severity="info">
                            اتركي حقول كلمة المرور فارغة إذا كنت لا تريد تغييرها
                          </Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="كلمة المرور الجديدة"
                            type="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={Boolean(touched.password && errors.password)}
                            helperText={touched.password && errors.password}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="confirmPassword"
                            name="confirmPassword"
                            label="تأكيد كلمة المرور الجديدة"
                            type="password"
                            value={values.confirmPassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth error={Boolean(touched.role && errors.role)}>
                            <InputLabel>الدور *</InputLabel>
                            <Select
                              id="role"
                              name="role"
                              value={values.role}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="الدور *"
                            >
                              <MenuItem value="user">مستخدم</MenuItem>
                              <MenuItem value="manager">مدير قسم</MenuItem>
                              <MenuItem value="admin">مدير</MenuItem>
                            </Select>
                            {touched.role && errors.role && (
                              <FormHelperText>{errors.role}</FormHelperText>
                            )}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="department"
                            name="department"
                            label="القسم"
                            value={values.department}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="jobTitle"
                            name="jobTitle"
                            label="المسمى الوظيفي"
                            value={values.jobTitle}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Address Information */}
                <Grid item xs={12}>
                  <Card>
                    <CardHeader title="معلومات العنوان" />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="address"
                            name="address"
                            label="العنوان"
                            multiline
                            rows={3}
                            value={values.address}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="city"
                            name="city"
                            label="المدينة"
                            value={values.city}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="country"
                            name="country"
                            label="البلد"
                            value={values.country}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Account Settings */}
                <Grid item xs={12}>
                  <Card>
                    <CardHeader title="إعدادات الحساب" />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={values.isActive}
                                onChange={(e) => setFieldValue('isActive', e.target.checked)}
                                name="isActive"
                              />
                            }
                            label="حساب نشط"
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={values.emailVerified}
                                onChange={(e) => setFieldValue('emailVerified', e.target.checked)}
                                name="emailVerified"
                              />
                            }
                            label="البريد الإلكتروني مؤكد"
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={values.phoneVerified}
                                onChange={(e) => setFieldValue('phoneVerified', e.target.checked)}
                                name="phoneVerified"
                              />
                            }
                            label="رقم الهاتف مؤكد"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Action Buttons */}
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      onClick={() => navigate(`/apps/users/view/${id}`)}
                      disabled={loading}
                    >
                      إلغاء
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting || loading}
                    >
                      {loading ? 'جاري الحفظ...' : 'حفظ التغييرات'}
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </MainCard>

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