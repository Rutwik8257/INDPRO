import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import { Plus, LogOut, Loader2, CheckCircle2, Circle, Clock } from 'lucide-react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/tasks');
      setTasks(data);
      setError('');
    } catch (err) {
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const { data } = await api.post('/tasks', taskData);
      setTasks([data, ...tasks]);
    } catch (err) {
      setError('Failed to create task');
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      const { data } = await api.put(`/tasks/${editingTask._id}`, taskData);
      setTasks(tasks.map(t => t._id === data._id ? data : t));
      setEditingTask(null);
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDeleteTask = async (id) => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const handleStageChange = async (id, stage) => {
    try {
      const { data } = await api.put(`/tasks/${id}`, { stage });
      setTasks(tasks.map(t => t._id === data._id ? data : t));
    } catch (err) {
      setError('Failed to update task stage');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (e, newStage) => {
    e.preventDefault();
    
    if (!draggedTask || draggedTask.stage === newStage) {
      setDraggedTask(null);
      return;
    }

    try {
      const { data } = await api.put(`/tasks/${draggedTask._id}`, { stage: newStage });
      setTasks(tasks.map(t => t._id === data._id ? data : t));
    } catch (err) {
      setError('Failed to update task stage');
    } finally {
      setDraggedTask(null);
    }
  };

  const tasksByStage = {
    todo: tasks.filter(t => t.stage === 'todo'),
    inprogress: tasks.filter(t => t.stage === 'inprogress'),
    done: tasks.filter(t => t.stage === 'done')
  };

  const stageConfig = {
    todo: { title: 'To Do', icon: Circle, color: 'text-slate-600', bg: 'bg-slate-100' },
    inprogress: { title: 'In Progress', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
    done: { title: 'Done', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100' }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Task Manager</h1>
              <p className="text-sm text-slate-600 mt-0.5">Welcome back, {user?.name}!</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setEditingTask(null);
                  setIsModalOpen(true);
                }}
                className="btn-primary flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                New Task
              </button>
              <button
                onClick={handleLogout}
                className="btn-secondary flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(stageConfig).map(([stage, config]) => {
              const Icon = config.icon;
              const stageTasks = tasksByStage[stage];
              const isDragOver = draggedTask && draggedTask.stage !== stage;
              
              return (
                <div 
                  key={stage} 
                  className="flex flex-col"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, stage)}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg ${config.bg}`}>
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {config.title}
                    </h2>
                    <span className="ml-auto text-sm font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {stageTasks.length}
                    </span>
                  </div>

                  <div 
                    className={`space-y-3 flex-1 min-h-[200px] p-4 rounded-xl border-2 border-dashed transition-all ${
                      isDragOver 
                        ? 'border-primary-400 bg-primary-50' 
                        : 'border-transparent bg-transparent'
                    }`}
                  >
                    {stageTasks.length === 0 ? (
                      <div className="card text-center py-8">
                        <p className="text-slate-500 text-sm">
                          {isDragOver ? 'Drop task here' : 'No tasks yet'}
                        </p>
                      </div>
                    ) : (
                      stageTasks.map(task => (
                        <TaskCard
                          key={task._id}
                          task={task}
                          onDelete={handleDeleteTask}
                          onEdit={(task) => {
                            setEditingTask(task);
                            setIsModalOpen(true);
                          }}
                          onStageChange={handleStageChange}
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        />
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
        task={editingTask}
      />
    </div>
  );
};

export default Dashboard;
