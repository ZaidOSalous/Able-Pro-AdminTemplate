import { useState, useEffect } from 'react';

// material-ui
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  AvatarGroup,
  LinearProgress,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import { alpha } from '@mui/material/styles';

// project imports
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

// assets
import { Add, More, Calendar, User, ClipboardTick } from 'iconsax-reactjs';

// Sample data for Monday.com-like dashboard
const sampleProjects = [
  {
    id: 1,
    name: 'تطوير موقع الشركة',
    description: 'مشروع تطوير الموقع الإلكتروني الجديد للشركة',
    progress: 75,
    status: 'في التقدم',
    priority: 'عالي',
    dueDate: '2024-02-15',
    team: [
      { name: 'أحمد محمد', avatar: '/assets/images/users/avatar-1.png' },
      { name: 'فاطمة علي', avatar: '/assets/images/users/avatar-2.png' },
      { name: 'محمد حسن', avatar: '/assets/images/users/avatar-3.png' }
    ],
    tasks: 12,
    completedTasks: 9
  },
  {
    id: 2,
    name: 'حملة التسويق الرقمي',
    description: 'إطلاق حملة تسويقية شاملة عبر وسائل التواصل الاجتماعي',
    progress: 45,
    status: 'في التقدم',
    priority: 'متوسط',
    dueDate: '2024-03-01',
    team: [
      { name: 'سارة أحمد', avatar: '/assets/images/users/avatar-4.png' },
      { name: 'عمر خالد', avatar: '/assets/images/users/avatar-5.png' }
    ],
    tasks: 8,
    completedTasks: 4
  },
  {
    id: 3,
    name: 'تطبيق الهاتف المحمول',
    description: 'تطوير تطبيق جديد للهواتف الذكية',
    progress: 20,
    status: 'بدء',
    priority: 'عالي',
    dueDate: '2024-04-20',
    team: [
      { name: 'ليلى محمود', avatar: '/assets/images/users/avatar-6.png' },
      { name: 'كريم عبدالله', avatar: '/assets/images/users/avatar-7.png' },
      { name: 'نور الدين', avatar: '/assets/images/users/avatar-8.png' },
      { name: 'رانيا سالم', avatar: '/assets/images/users/avatar-9.png' }
    ],
    tasks: 15,
    completedTasks: 3
  }
];

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'عالي':
      return 'error';
    case 'متوسط':
      return 'warning';
    case 'منخفض':
      return 'success';
    default:
      return 'default';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'مكتمل':
      return 'success';
    case 'في التقدم':
      return 'primary';
    case 'بدء':
      return 'info';
    case 'متأخر':
      return 'error';
    default:
      return 'default';
  }
};

// ==============================|| MONDAY DASHBOARD ||============================== //

export default function MondayDashboard() {
  const [projects, setProjects] = useState(sampleProjects);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMenuClick = (event, project) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(project);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  const handleAddProject = () => {
    // TODO: Implement add project functionality
    console.log('إضافة مشروع جديد');
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} sx={{ alignItems: 'center', mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 600, color: 'text.primary' }}>
              لوحة المشاريع
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
              إدارة وتتبع جميع مشاريعك في مكان واحد
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleAddProject}
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              مشروع جديد
            </Button>
          </Grid>
        </Grid>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard sx={{ textAlign: 'center', bgcolor: alpha('#1976d2', 0.1) }}>
              <Box sx={{ p: 2 }}>
                <ClipboardTick size={32} color="#1976d2" />
                <Typography variant="h4" sx={{ mt: 1, fontWeight: 600 }}>
                  {projects.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  إجمالي المشاريع
                </Typography>
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard sx={{ textAlign: 'center', bgcolor: alpha('#2e7d32', 0.1) }}>
              <Box sx={{ p: 2 }}>
                <ClipboardTick size={32} color="#2e7d32" />
                <Typography variant="h4" sx={{ mt: 1, fontWeight: 600 }}>
                  {projects.reduce((acc, p) => acc + p.completedTasks, 0)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  المهام المكتملة
                </Typography>
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard sx={{ textAlign: 'center', bgcolor: alpha('#ed6c02', 0.1) }}>
              <Box sx={{ p: 2 }}>
                <User size={32} color="#ed6c02" />
                <Typography variant="h4" sx={{ mt: 1, fontWeight: 600 }}>
                  {new Set(projects.flatMap(p => p.team.map(t => t.name))).size}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  أعضاء الفريق
                </Typography>
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard sx={{ textAlign: 'center', bgcolor: alpha('#9c27b0', 0.1) }}>
              <Box sx={{ p: 2 }}>
                <Calendar size={32} color="#9c27b0" />
                <Typography variant="h4" sx={{ mt: 1, fontWeight: 600 }}>
                  {projects.filter(p => new Date(p.dueDate) < new Date()).length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  المشاريع المتأخرة
                </Typography>
              </Box>
            </MainCard>
          </Grid>
        </Grid>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <MainCard
              sx={{
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Project Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={(e) => handleMenuClick(e, project)}
                    sx={{ ml: 1 }}
                  >
                    <More size={20} />
                  </IconButton>
                </Box>

                {/* Status and Priority */}
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  <Chip
                    label={project.status}
                    color={getStatusColor(project.status)}
                    size="small"
                    sx={{ fontWeight: 500 }}
                  />
                  <Chip
                    label={project.priority}
                    color={getPriorityColor(project.priority)}
                    size="small"
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                  />
                </Box>

                {/* Progress */}
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      التقدم
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {project.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: alpha('#000', 0.1),
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4
                      }
                    }}
                  />
                </Box>

                {/* Tasks Info */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    المهام: {project.completedTasks}/{project.tasks}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    الموعد النهائي: {new Date(project.dueDate).toLocaleDateString('ar-SA')}
                  </Typography>
                </Box>

                {/* Team Members */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    الفريق
                  </Typography>
                  <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, fontSize: '0.875rem' } }}>
                    {project.team.map((member, index) => (
                      <Avatar
                        key={index}
                        alt={member.name}
                        src={member.avatar}
                        sx={{ bgcolor: 'primary.main' }}
                      >
                        {member.name.charAt(0)}
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </Box>
              </CardContent>
            </MainCard>
          </Grid>
        ))}
      </Grid>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            minWidth: 180,
            borderRadius: 2,
            boxShadow: 3
          }
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          عرض التفاصيل
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          تعديل المشروع
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          إدارة الفريق
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          حذف المشروع
        </MenuItem>
      </Menu>
    </Box>
  );
}