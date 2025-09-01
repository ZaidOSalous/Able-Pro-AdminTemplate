import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  Alert,
  Snackbar
} from '@mui/material';

// third-party
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';

// project-imports
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import { DebouncedInput, HeaderSort, TablePagination } from 'components/third-party/react-table';
import { getUsers, deleteUser, updateUserStatus, bulkDeleteUsers } from 'api/users';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';

// assets
import { Add, Edit, Eye, MoreHoriz, SearchNormal1, Trash } from 'iconsax-reactjs';

// ==============================|| USER LIST ||============================== //

export default function UsersList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [selectedRows, setSelectedRows] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [bulkDeleteDialog, setBulkDeleteDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Fetch users data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getUsers();
        setData(response.users || []);
      } catch (error) {
        console.error('Error fetching users:', error);
        setSnackbar({
          open: true,
          message: 'خطأ في تحميل بيانات المستخدمين',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Table columns definition
  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
        enableSorting: false,
        enableColumnFilter: false
      },
      {
        header: 'الصورة الشخصية',
        accessorKey: 'avatar',
        cell: ({ getValue, row }) => (
          <Avatar
            alt={row.original.firstName}
            size="sm"
            src={getValue() ? getImageUrl(`avatar-${getValue()}.png`, ImagePath.USERS) : undefined}
          />
        ),
        enableSorting: false,
        enableColumnFilter: false
      },
      {
        header: 'الاسم الكامل',
        accessorKey: 'fullName',
        cell: ({ getValue, row }) => (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Stack spacing={0}>
              <Typography variant="subtitle1">{getValue()}</Typography>
              <Typography variant="caption" color="text.secondary">
                {row.original.email}
              </Typography>
            </Stack>
          </Stack>
        )
      },
      {
        header: 'الدور',
        accessorKey: 'role',
        cell: ({ getValue }) => {
          const role = getValue();
          let color = 'default';
          if (role === 'admin') color = 'error';
          else if (role === 'manager') color = 'warning';
          else if (role === 'user') color = 'success';
          
          return (
            <Chip
              label={role === 'admin' ? 'مدير' : role === 'manager' ? 'مدير قسم' : 'مستخدم'}
              color={color}
              size="small"
              variant="light"
            />
          );
        }
      },
      {
        header: 'الحالة',
        accessorKey: 'status',
        cell: ({ getValue, row }) => {
          const status = getValue();
          return (
            <Chip
              label={status === 'active' ? 'نشط' : 'غير نشط'}
              color={status === 'active' ? 'success' : 'error'}
              size="small"
              variant="light"
              onClick={() => handleStatusToggle(row.original)}
              sx={{ cursor: 'pointer' }}
            />
          );
        }
      },
      {
        header: 'تاريخ التسجيل',
        accessorKey: 'createdAt',
        cell: ({ getValue }) => new Date(getValue()).toLocaleDateString('ar-SA')
      },
      {
        header: 'آخر دخول',
        accessorKey: 'lastLogin',
        cell: ({ getValue }) => {
          const lastLogin = getValue();
          return lastLogin ? new Date(lastLogin).toLocaleDateString('ar-SA') : 'لم يسجل دخول';
        }
      },
      {
        header: 'الإجراءات',
        id: 'actions',
        cell: ({ row }) => (
          <Stack direction="row" spacing={0}>
            <Tooltip title="عرض">
              <IconButton
                color="secondary"
                onClick={() => navigate(`/apps/users/view/${row.original.id}`)}
              >
                <Eye />
              </IconButton>
            </Tooltip>
            <Tooltip title="تعديل">
              <IconButton
                color="primary"
                onClick={() => navigate(`/apps/users/edit/${row.original.id}`)}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="المزيد">
              <IconButton
                color="secondary"
                onClick={(e) => handleMenuClick(e, row.original)}
              >
                <MoreHoriz />
              </IconButton>
            </Tooltip>
          </Stack>
        ),
        enableSorting: false,
        enableColumnFilter: false
      }
    ],
    [navigate]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
      pagination,
      rowSelection: selectedRows
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onRowSelectionChange: setSelectedRows,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true
  });

  // Handle menu actions
  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  // Handle status toggle
  const handleStatusToggle = async (user) => {
    try {
      const newStatus = user.status === 'active' ? 'inactive' : 'active';
      await updateUserStatus(user.id, newStatus);
      
      setData(prevData =>
        prevData.map(u => u.id === user.id ? { ...u, status: newStatus } : u)
      );
      
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
      await deleteUser(selectedUser.id);
      setData(prevData => prevData.filter(u => u.id !== selectedUser.id));
      setDeleteDialog(false);
      setSnackbar({
        open: true,
        message: 'تم حذف المستخدم بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حذف المستخدم',
        severity: 'error'
      });
    }
    handleMenuClose();
  };

  // Handle bulk delete
  const handleBulkDelete = async () => {
    try {
      const selectedUserIds = Object.keys(selectedRows).filter(id => selectedRows[id]);
      await bulkDeleteUsers(selectedUserIds);
      setData(prevData => prevData.filter(u => !selectedUserIds.includes(u.id.toString())));
      setSelectedRows({});
      setBulkDeleteDialog(false);
      setSnackbar({
        open: true,
        message: 'تم حذف المستخدمين المحددين بنجاح',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error bulk deleting users:', error);
      setSnackbar({
        open: true,
        message: 'خطأ في حذف المستخدمين',
        severity: 'error'
      });
    }
  };

  const selectedCount = Object.keys(selectedRows).filter(id => selectedRows[id]).length;

  return (
    <>
      <MainCard content={false}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ p: 3 }}>
          <Typography variant="h5">إدارة المستخدمين</Typography>
          <Stack direction="row" spacing={2}>
            {selectedCount > 0 && (
              <Button
                variant="outlined"
                color="error"
                startIcon={<Trash />}
                onClick={() => setBulkDeleteDialog(true)}
              >
                حذف المحدد ({selectedCount})
              </Button>
            )}
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => navigate('/apps/users/add')}
            >
              إضافة مستخدم جديد
            </Button>
          </Stack>
        </Stack>

        <Box sx={{ p: 3 }}>
          <DebouncedInput
            value={globalFilter ?? ''}
            onFilterChange={(value) => setGlobalFilter(String(value))}
            placeholder="البحث في المستخدمين..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchNormal1 size={16} />
                </InputAdornment>
              )
            }}
          />
        </Box>

        <ScrollX>
          <TableContainer>
            <Table>
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableCell key={header.id} {...header.column.columnDef.meta}>
                        {header.isPlaceholder ? null : (
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Box>{flexRender(header.column.columnDef.header, header.getContext())}</Box>
                            {header.column.getCanSort() && <HeaderSort column={header.column} />}
                          </Stack>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ScrollX>

        <Box sx={{ p: 2 }}>
          <TablePagination
            {...{
              setPageSize: table.setPageSize,
              setPageIndex: table.setPageIndex,
              getState: table.getState,
              getPageCount: table.getPageCount
            }}
          />
        </Box>
      </MainCard>

      {/* Actions Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => {
          navigate(`/apps/users/view/${selectedUser?.id}`);
          handleMenuClose();
        }}>
          عرض التفاصيل
        </MenuItem>
        <MenuItem onClick={() => {
          navigate(`/apps/users/edit/${selectedUser?.id}`);
          handleMenuClose();
        }}>
          تعديل
        </MenuItem>
        <MenuItem onClick={() => {
          setDeleteDialog(true);
          handleMenuClose();
        }}>
          حذف
        </MenuItem>
      </Menu>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle>تأكيد الحذف</DialogTitle>
        <DialogContent>
          <Typography>
            هل أنت متأكد من حذف المستخدم "{selectedUser?.fullName}"؟ هذا الإجراء لا يمكن التراجع عنه.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)}>إلغاء</Button>
          <Button onClick={handleDeleteUser} color="error" variant="contained">
            حذف
          </Button>
        </DialogActions>
      </Dialog>

      {/* Bulk Delete Confirmation Dialog */}
      <Dialog open={bulkDeleteDialog} onClose={() => setBulkDeleteDialog(false)}>
        <DialogTitle>تأكيد الحذف المتعدد</DialogTitle>
        <DialogContent>
          <Typography>
            هل أنت متأكد من حذف {selectedCount} مستخدم؟ هذا الإجراء لا يمكن التراجع عنه.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBulkDeleteDialog(false)}>إلغاء</Button>
          <Button onClick={handleBulkDelete} color="error" variant="contained">
            حذف الكل
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