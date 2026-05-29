import { Trash2, Edit2, Clock, GripVertical } from 'lucide-react';

const TaskCard = ({ task, onDelete, onEdit, onStageChange, onDragStart, onDragEnd }) => {
  const stageColors = {
    todo: 'bg-slate-100 text-slate-700 border-slate-300',
    inprogress: 'bg-blue-100 text-blue-700 border-blue-300',
    done: 'bg-green-100 text-green-700 border-green-300'
  };

  const stageLabels = {
    todo: 'To Do',
    inprogress: 'In Progress',
    done: 'Done'
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      onDragEnd={onDragEnd}
      className="card group hover:border-primary-300 cursor-move active:cursor-grabbing transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-2 flex-1">
          <GripVertical className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
          <h3 className="font-semibold text-slate-900 text-lg flex-1 pr-2">{task.title}</h3>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(task)}
            className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
            title="Edit task"
          >
            <Edit2 className="w-4 h-4 text-slate-600" />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete task"
          >
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">{task.description}</p>
      )}

      <div className="flex items-center justify-between">
        <select
          value={task.stage}
          onChange={(e) => onStageChange(task._id, e.target.value)}
          className={`text-xs font-medium px-3 py-1.5 rounded-full border ${stageColors[task.stage]} cursor-pointer hover:opacity-80 transition-opacity`}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <div className="flex items-center gap-1 text-xs text-slate-500">
          <Clock className="w-3.5 h-3.5" />
          {new Date(task.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
