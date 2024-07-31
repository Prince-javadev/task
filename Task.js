import React, { useState } from 'react';

const Task = ({ task, onUpdate, onToggle, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.title);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleUpdate = () => {
    onUpdate(task.id, newTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => onToggle(task.id)}
          >
            {task.title}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Hide' : 'Show'} Details
          </button>
          {isExpanded && (
            <div>
              <p>{task.description}</p>
              <small>Last updated: {new Date(task.timestamp).toLocaleString()}</small>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Task;
