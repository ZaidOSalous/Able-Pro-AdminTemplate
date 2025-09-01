import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// material-ui
import {
  Box,
  Grid,
  Typography,
  Button,
  Chip,
  Avatar,
  AvatarGroup,
  LinearProgress,
  IconButton,
  Tabs,
  Tab,
  Card,
  CardContent,
  Stack,
  Divider,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { alpha } from '@mui/material/styles';

// third-party
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

// project imports
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

// assets
import { ArrowLeft, Add, More, Calendar, User, ClipboardTick, Edit, Trash } from 'iconsax-reactjs';

// Sample project data
const sampleProjectData = {
  id: 1,
  name: 'تطوير موقع الشركة',
  description: 'مشروع تطوير الموقع الإلكتروني الجديد للشركة',
  progress: 75,
  status: 'في التقدم',
  priority: 'عالي',
  dueDate: '2024-02-15',
  team: [
    { id: 1, name: 'أحمد محمد', avatar: '/assets/images/users/avatar-1.png', role: 'مطور أول' },
    { id: 2, name: 'فاطمة علي', avatar: '/assets/images/users/avatar-2.png', role: 'مصممة UI/UX' },
    { id: 3, name: 'محمد حسن', avatar: '/assets/images/users/avatar-3.png', role: 'مطور خلفي' }
  ],
  columns: [
    {
      id: 'todo',
      title: 'قائمة المهام',
      color: '#f44336',
      tasks: [
        {
          id: 'task-1',
          title: 'تصميم الصفحة الرئيسية',
          description: 'إنشاء تصميم جذاب للصفحة الرئيسية',
          assignee: { name: 'فاطمة علي', avatar: '/assets/images/users/avatar-2.png' },
          priority: 'عالي',
          dueDate: '2024-01-20',
          status: 'جديد'
        },
        {
          id: 'task-2',
          title: 'إعداد قاعدة البيانات',
          description: 'تصميم وإعداد قاعدة البيانات الأساسية',
          assignee: { name: 'محمد حسن', avatar: '/assets/images/users/avatar-3.png' },
          priority: 'متوسط',
          dueDate: '2024-01-25',
          status: 'جديد'
        }
      ]
    },
    {
      id: 'inprogress',
      title: 'قيد التنفيذ',
      color: '#ff9800',
      tasks: [
        {
          id: 'task-3',
          title: 'تطوير نظام المصادقة',
          description: 'تطوير نظام تسجيل الدخول والمصادقة',
          assignee: { name: 'أحمد محمد', avatar: '/assets/images/users/avatar-1.png' },
          priority: 'عالي',
          dueDate: '2024-01-30',
          status: 'في التقدم'
        }
      ]
    },
    {
      id: 'review',
      title: 'قيد المراجعة',
      color: '#2196f3',
      tasks: [
        {
          id: 'task-4',
          title: 'مراجعة التصميم',
          description: 'مراجعة وتحسين التصميم العام',
          assignee: { name: 'فاطمة علي', avatar: '/assets/images/users/avatar-2.png' },
          priority: 'منخفض',
          dueDate: '2024-02-05',
          status: 'مراجعة'
        }
      ]
    },
    {
      id: 'done',
      title: 'مكتمل',
      color: '#4caf50',
      tasks: [
        {
          id: 'task-5',
          title: 'إعداد البيئة التطويرية',
          description: 'تجهيز بيئة التطوير والأدوات المطلوبة',
          assignee: { name: 'أحمد محمد', avatar: '/assets/images/users/avatar-1.png' },
          priority: 'عالي',
          dueDate: '2024-01-15',
          status: 'مكتمل'
        }
      ]
    }
  ]
};

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

// Task Card Component
const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            mb: 2,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            transform: snapshot.isDragging ? 'rotate(5deg)' : 'none',
            boxShadow: snapshot.isDragging ? 4 : 1,
            '&:hover': {
              boxShadow: 3
            }
          }}
        >
          <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, flex: 1 }}>
                {task.title}
              </Typography>
              <IconButton size="small" sx={{ ml: 1 }}>
                <More size={16} />
              </IconButton>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {task.description}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Chip
                label={task.priority}
                color={getPriorityColor(task.priority)}
                size="small"
                sx={{ fontSize: '0.75rem' }}
              />
              <Typography variant="caption" color="text.secondary">
                {new Date(task.dueDate).toLocaleDateString('ar-SA')}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Avatar
                src={task.assignee.avatar}
                sx={{ width: 24, height: 24 }}
              >
                {task.assignee.name.charAt(0)}
              </Avatar>
              <Typography variant="caption" color="text.secondary">
                {task.assignee.name}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

// Column Component
const KanbanColumn = ({ column, tasks }) => {
  return (
    <MainCard
      sx={{
        minHeight: 500,
        bgcolor: alpha(column.color, 0.05),
        border: `2px solid ${alpha(column.color, 0.2)}`
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: column.color
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {column.title}
            </Typography>
            <Chip
              label={tasks.length}
              size="small"
              sx={{
                bgcolor: alpha(column.color, 0.2),
                color: column.color,
                fontWeight: 600
              }}
            />
          </Box>
          <IconButton size="small">
            <Add size={20} />
          </IconButton>
        </Box>
        
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              sx={{
                minHeight: 400,
                bgcolor: snapshot.isDraggingOver ? alpha(column.color, 0.1) : 'transparent',
                borderRadius: 1,
                transition: 'background-color 0.2s ease'
              }}
            >
              {tasks.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>
    </MainCard>
  );
};

// ==============================|| PROJECT DETAILS ||============================== //

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(sampleProjectData);
  const [activeTab, setActiveTab] = useState(0);
  const [openAddTask, setOpenAddTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    // Find source and destination columns
    const sourceColumn = project.columns.find(col => col.id === source.droppableId);
    const destColumn = project.columns.find(col => col.id === destination.droppableId);
    
    // Find the task being moved
    const taskToMove = sourceColumn.tasks[source.index];
    
    // Create new columns array
    const newColumns = project.columns.map(column => {
      if (column.id === source.droppableId) {
        // Remove task from source column
        const newTasks = [...column.tasks];
        newTasks.splice(source.index, 1);
        return { ...column, tasks: newTasks };
      }
      if (column.id === destination.droppableId) {
        // Add task to destination column
        const newTasks = [...column.tasks];
        newTasks.splice(destination.index, 0, taskToMove);
        return { ...column, tasks: newTasks };
      }
      return column;
    });

    setProject({ ...project, columns: newColumns });
  };

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    
    const newTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle,
      description: newTaskDescription,
      assignee: project.team[0], // Default to first team member
      priority: 'متوسط',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      status: 'جديد'
    };
    
    const updatedColumns = project.columns.map(column => {
      if (column.id === 'todo') {
        return { ...column, tasks: [...column.tasks, newTask] };
      }
      return column;
    });
    
    setProject({ ...project, columns: updatedColumns });
    setNewTaskTitle('');
    setNewTaskDescription('');
    setOpenAddTask(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <IconButton onClick={() => navigate('/monday-dashboard')}>
            <ArrowLeft size={24} />
          </IconButton>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 600, color: 'text.primary' }}>
              {project.name}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
              {project.description}
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpenAddTask(true)}
            sx={{ borderRadius: 2, px: 3, py: 1.5 }}
          >
            مهمة جديدة
          </Button>
        </Box>

        {/* Project Stats */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard sx={{ textAlign: 'center' }}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {project.columns.reduce((acc, col) => acc + col.tasks.length, 0)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  إجمالي المهام
                </Typography>
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard sx={{ textAlign: 'center' }}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: 'success.main' }}>
                  {project.columns.find(col => col.id === 'done')?.tasks.length || 0}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  المهام المكتملة
                </Typography>
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard sx={{ textAlign: 'center' }}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: 'warning.main' }}>
                  {project.columns.find(col => col.id === 'inprogress')?.tasks.length || 0}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  قيد التنفيذ
                </Typography>
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard sx={{ textAlign: 'center' }}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: 'info.main' }}>
                  {project.team.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  أعضاء الفريق
                </Typography>
              </Box>
            </MainCard>
          </Grid>
        </Grid>

        {/* Tabs */}
        <Tabs value={activeTab} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="لوحة المهام" />
          <Tab label="الفريق" />
          <Tab label="التقارير" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {activeTab === 0 && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Grid container spacing={3}>
            {project.columns.map((column) => (
              <Grid item xs={12} sm={6} md={3} key={column.id}>
                <KanbanColumn column={column} tasks={column.tasks} />
              </Grid>
            ))}
          </Grid>
        </DragDropContext>
      )}

      {activeTab === 1 && (
        <Grid container spacing={3}>
          {project.team.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <MainCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Avatar
                    src={member.avatar}
                    sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                  >
                    {member.name.charAt(0)}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {member.role}
                  </Typography>
                  <Chip label="نشط" color="success" size="small" />
                </CardContent>
              </MainCard>
            </Grid>
          ))}
        </Grid>
      )}

      {activeTab === 2 && (
        <MainCard>
          <CardContent sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              التقارير والإحصائيات
            </Typography>
            <Typography variant="body2" color="text.secondary">
              سيتم إضافة التقارير والإحصائيات قريباً
            </Typography>
          </CardContent>
        </MainCard>
      )}

      {/* Add Task Dialog */}
      <Dialog open={openAddTask} onClose={() => setOpenAddTask(false)} maxWidth="sm" fullWidth>
        <DialogTitle>إضافة مهمة جديدة</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="عنوان المهمة"
            fullWidth
            variant="outlined"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="وصف المهمة"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddTask(false)}>إلغاء</Button>
          <Button onClick={handleAddTask} variant="contained">
            إضافة
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}