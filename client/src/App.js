import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  return (
    <div>
      <h1>Task Management Application</h1>
      <TaskForm />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;