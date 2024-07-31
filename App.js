import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';
import Search from './components/Search';
import tasksData from './data/tasks.json';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load tasks from the dummy JSON file
    setTasks(tasksData);
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description: '',
      completed: false,
      timestamp: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, title) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title, timestamp: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed, timestamp: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Todo List</h1>
      <Search onSearch={setSearchQuery} />
      <AddTask onAdd={addTask} />
      <div>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onUpdate={updateTask}
            onToggle={toggleTaskCompletion}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
