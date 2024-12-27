import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Header from './components/Header';

import { useState } from 'react';
import Header3 from './components/Header3';
import Modal from './components/Modal';
import Header1 from './components/Header1';
import NewTask from './components/NewTask';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [appliedFilter, setAppliedFilter] = useState('all');

  const displayedTasks = tasks.filter((task) => {
    if (appliedFilter === 'all') {
      return true;
    }
    return task.category === appliedFilter;
  });

  function startAddTaskHandler() {
    setIsAddingTask(true);
  }

  function cancelAddTaskHandler() {
    setIsAddingTask(false);
  }

  function addTaskHandler(taskData) {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          id: Math.random().toString(),
          ...taskData,
        },
      ];
    });
    setIsAddingTask(false);
  }

  function setFilterHandler(category) {
    setAppliedFilter(category);
  }
  return (
    <>
      {isAddingTask && (
        <Modal onClose={cancelAddTaskHandler}>
          <NewTask onAddTask={addTaskHandler} onCancel={cancelAddTaskHandler} />
        </Modal>
      )}
      <Header />
      <main>
      <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        </main>
      <Header1/>
      <Header3/>
      <TaskControl
          onStartAddTask={startAddTaskHandler}
          onSetFilter={setFilterHandler}
        />
        <TaskList tasks={displayedTasks} />
    </>
  );
}

export default App;
