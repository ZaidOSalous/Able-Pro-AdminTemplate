import { useState, useEffect } from 'react';

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
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Alert,
  Snackbar,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';

// third-party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project-imports
import MainCard from 'components/MainCard';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
  getPermissions,
  assignPermissions,
  getUsersByRole
} from 'api/users';

// assets
import {
  Add,
  Edit,
  Trash,
  SecuritySafe,
  Profile2User,
  Setting2,
  Eye,
  DocumentText,
  ArrowDown2
} from 'iconsax-reactjs';

// Validation schema
const roleValidationSchema = Yup.object({
  name: Yup.string().required('اسم الدور مطلوب'),
  description: Yup.string().required('وصف الدور مطلوب')
});

// ==============================|| ROLES MANAGEMENT ||============================== //

export default function RolesManagement() {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  
  // Dialog states
  const [roleDialog, setRoleDialog] = useState({ open: false, mode: 'add', data: null });
  const [permissionDialog, setPermissionDialog] = useState({ open: false, roleId: null, rolePermissions: [] });
  const [deleteDialog, setDeleteDialog] = useState({ open: false, roleId: null });
  const [usersDialog, setUsersDialog] = useState({ open: false, roleId: null, users: [] });

  // Load data on component mount
  useEffect(() => {
    loadRoles();
    loadPermissions();
  }, []);

  const loadRoles = async () => {
    try {
      setLoading(true);
      const response = await getRoles();
      setRoles(response.roles || []);
    } catch (error) {
      console.error('Error loading roles:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في تحميل الأدوار',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const loadPermissions = async () => {
    try {
      const response = await getPermissions();
      setPermissions(response.permissions || []);
    } catch (error) {
      console.error('Error loading permissions:', error);
    }
  };

  const handleCreateRole = async (values, { setSubmitting, resetForm }) => {
    try {
      await createRole(values);
      await loadRoles();
      setRoleDialog({ open: false, mode: 'add', data: null });
      resetForm();
      setSnackbar({
        open: true,
        message: 'تم إنشاء الدور بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error creating role:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في إنشاء الدور',
        severity: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateRole = async (values, { setSubmitting }) => {
    try {
      await updateRole(roleDialog.data.id, values);
      await loadRoles();
      setRoleDialog({ open: false, mode: 'add', data: null });
      setSnackbar({
        open: true,
        message: 'تم تحديث الدور بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error updating role:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في تحديث الدور',
        severity: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteRole = async () => {
    try {
      await deleteRole(deleteDialog.roleId);
      await loadRoles();
      setDeleteDialog({ open: false, roleId: null });
      setSnackbar({
        open: true,
        message: 'تم حذف الدور بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error deleting role:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حذف الدور',
        severity: 'error'
      });
    }
  };

  const handleAssignPermissions = async (roleId, selectedPermissions) => {
    try {
      await assignPermissions(roleId, { permissions: selectedPermissions });
      await loadRoles();
      setPermissionDialog({ open: false, roleId: null, rolePermissions: [] });
      setSnackbar({
        open: true,
        message: 'تم تحديث الصلاحيات بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error assigning permissions:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في تحديث الصلاحيات',
        severity: 'error'
      });
    }
  };

  const handleViewUsers = async (roleId) => {
    try {
      const response = await getUsersByRole(roleId);
      setUsersDialog({ open: true, roleId, users: response.users || [] });
    } catch (error) {
      console.error('Error loading users by role:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في تحميل المستخدمين',
        severity: 'error'
      });
    }
  };

  const openRoleDialog = (mode, role = null) => {
    setRoleDialog({ open: true, mode, data: role });
  };

  const openPermissionDialog = (role) => {
    setPermissionDialog({
      open: true,
      roleId: role.id,
      rolePermissions: role.permissions || []
    });
  };

  const getPermissionsByCategory = () => {
    const categories = {};
    permissions.forEach(permission => {
      const category = permission.category || 'عام';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(permission);
    });
    return categories;
  };

  const breadcrumbLinks = [
    { title: 'الرئيسية', to: '/' },
    { title: 'المستخدمين', to: '/apps/users/list' },
    { title: 'الأدوار والصلاحيات' }
  ];

  return (
    <>
      <Breadcrumbs custom links={breadcrumbLinks} />
      
      <MainCard>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
          <Typography variant="h4">إدارة الأدوار والصلاحيات</Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => openRoleDialog('add')}
          >
            إضافة دور جديد
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {roles.map((role) => (
            <Grid item xs={12} md={6} lg={4} key={role.id}>
              <Card>
                <CardHeader
                  title={
                    <Stack direction="row" spacing={1} alignItems="center">
                      <SecuritySafe size="20" />
                      <Typography variant="h6">{role.name}</Typography>
                    </Stack>
                  }
                  action={
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => openRoleDialog('edit', role)}
                        color="primary"
                      >
                        <Edit size="16" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => setDeleteDialog({ open: true, roleId: role.id })}
                        color="error"
                      >
                        <Trash size="16" />
                      </IconButton>
                    </Stack>
                  }
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {role.description}
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>
                        عدد المستخدمين:
                      </Typography>
                      <Chip
                        label={role.usersCount || 0}
                        size="small"
                        color="primary"
                        onClick={() => handleViewUsers(role.id)}
                        clickable
                      />
                    </Box>
                    
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>
                        الصلاحيات:
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {(role.permissions || []).slice(0, 3).map((permission) => (
                          <Chip
                            key={permission.id}
                            label={permission.name}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                        {(role.permissions || []).length > 3 && (
                          <Chip
                            label={`+${(role.permissions || []).length - 3} أخرى`}
                            size="small"
                            variant="outlined"
                          />
                        )}
                      </Stack>
                    </Box>
                    
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Setting2 />}
                        onClick={() => openPermissionDialog(role)}
                        fullWidth
                      >
                        إدارة الصلاحيات
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </MainCard>

      {/* Role Dialog */}
      <Dialog
        open={roleDialog.open}
        onClose={() => setRoleDialog({ open: false, mode: 'add', data: null })}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {roleDialog.mode === 'add' ? 'إضافة دور جديد' : 'تعديل الدور'}
        </DialogTitle>
        <Formik
          initialValues={{
            name: roleDialog.data?.name || '',
            description: roleDialog.data?.description || '',
            isActive: roleDialog.data?.isActive ?? true
          }}
          validationSchema={roleValidationSchema}
          onSubmit={roleDialog.mode === 'add' ? handleCreateRole : handleUpdateRole}
          enableReinitialize
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    name="name"
                    label="اسم الدور"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <TextField
                    fullWidth
                    name="description"
                    label="وصف الدور"
                    multiline
                    rows={3}
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.description && Boolean(errors.description)}
                    helperText={touched.description && errors.description}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.isActive}
                        onChange={(e) => setFieldValue('isActive', e.target.checked)}
                      />
                    }
                    label="الدور نشط"
                  />
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setRoleDialog({ open: false, mode: 'add', data: null })}>
                  إلغاء
                </Button>
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                  {roleDialog.mode === 'add' ? 'إضافة' : 'تحديث'}
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>

      {/* Permissions Dialog */}
      <Dialog
        open={permissionDialog.open}
        onClose={() => setPermissionDialog({ open: false, roleId: null, rolePermissions: [] })}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>إدارة صلاحيات الدور</DialogTitle>
        <DialogContent>
          <PermissionSelector
            permissions={permissions}
            selectedPermissions={permissionDialog.rolePermissions}
            onPermissionChange={(selectedPermissions) => {
              setPermissionDialog(prev => ({
                ...prev,
                rolePermissions: selectedPermissions
              }));
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPermissionDialog({ open: false, roleId: null, rolePermissions: [] })}>
            إلغاء
          </Button>
          <Button
            variant="contained"
            onClick={() => handleAssignPermissions(permissionDialog.roleId, permissionDialog.rolePermissions)}
          >
            حفظ الصلاحيات
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, roleId: null })}>
        <DialogTitle>تأكيد الحذف</DialogTitle>
        <DialogContent>
          <Typography>
            هل أنت متأكد من حذف هذا الدور؟ هذا الإجراء لا يمكن التراجع عنه.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, roleId: null })}>
            إلغاء
          </Button>
          <Button onClick={handleDeleteRole} color="error" variant="contained">
            حذف
          </Button>
        </DialogActions>
      </Dialog>

      {/* Users by Role Dialog */}
      <Dialog
        open={usersDialog.open}
        onClose={() => setUsersDialog({ open: false, roleId: null, users: [] })}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>المستخدمون في هذا الدور</DialogTitle>
        <DialogContent>
          {usersDialog.users.length === 0 ? (
            <Typography color="text.secondary" sx={{ textAlign: 'center', py: 3 }}>
              لا يوجد مستخدمون في هذا الدور
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>الاسم</TableCell>
                    <TableCell>البريد الإلكتروني</TableCell>
                    <TableCell>الحالة</TableCell>
                    <TableCell>تاريخ الانضمام</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersDialog.users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Chip
                          label={user.isActive ? 'نشط' : 'غير نشط'}
                          color={user.isActive ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        {new Date(user.createdAt).toLocaleDateString('ar-SA')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUsersDialog({ open: false, roleId: null, users: [] })}>
            إغلاق
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

// ==============================|| PERMISSION SELECTOR COMPONENT ||============================== //

function PermissionSelector({ permissions, selectedPermissions, onPermissionChange }) {
  const [localSelected, setLocalSelected] = useState(selectedPermissions.map(p => p.id || p));

  useEffect(() => {
    setLocalSelected(selectedPermissions.map(p => p.id || p));
  }, [selectedPermissions]);

  const handlePermissionToggle = (permissionId) => {
    const newSelected = localSelected.includes(permissionId)
      ? localSelected.filter(id => id !== permissionId)
      : [...localSelected, permissionId];
    
    setLocalSelected(newSelected);
    onPermissionChange(newSelected);
  };

  const handleCategoryToggle = (categoryPermissions) => {
    const categoryIds = categoryPermissions.map(p => p.id);
    const allSelected = categoryIds.every(id => localSelected.includes(id));
    
    let newSelected;
    if (allSelected) {
      // Remove all category permissions
      newSelected = localSelected.filter(id => !categoryIds.includes(id));
    } else {
      // Add all category permissions
      newSelected = [...new Set([...localSelected, ...categoryIds])];
    }
    
    setLocalSelected(newSelected);
    onPermissionChange(newSelected);
  };

  const getPermissionsByCategory = () => {
    const categories = {};
    permissions.forEach(permission => {
      const category = permission.category || 'عام';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(permission);
    });
    return categories;
  };

  const categorizedPermissions = getPermissionsByCategory();

  return (
    <Box sx={{ mt: 2 }}>
      {Object.entries(categorizedPermissions).map(([category, categoryPermissions]) => {
        const categoryIds = categoryPermissions.map(p => p.id);
        const selectedCount = categoryIds.filter(id => localSelected.includes(id)).length;
        const allSelected = selectedCount === categoryIds.length;
        const someSelected = selectedCount > 0 && selectedCount < categoryIds.length;

        return (
          <Accordion key={category} defaultExpanded>
            <AccordionSummary expandIcon={<ArrowDown2 />}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={() => handleCategoryToggle(categoryPermissions)}
                  onClick={(e) => e.stopPropagation()}
                />
                <Typography variant="h6">{category}</Typography>
                <Chip
                  label={`${selectedCount}/${categoryIds.length}`}
                  size="small"
                  color={allSelected ? 'primary' : someSelected ? 'warning' : 'default'}
                />
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {categoryPermissions.map((permission) => (
                  <ListItem key={permission.id} divider>
                    <ListItemIcon>
                      <Checkbox
                        checked={localSelected.includes(permission.id)}
                        onChange={() => handlePermissionToggle(permission.id)}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={permission.name}
                      secondary={permission.description}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}