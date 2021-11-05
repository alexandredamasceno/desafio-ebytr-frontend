import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import TasksContext from './tasksContext';

function ProviderTasks({ children }) {
    const [tasks, setTasks] = useState([]);
    const [showAddList, setShowAddList] = useState(false);
    
    const getTasks = () => {
        const url = 'http://localhost:3001/tasks'
        fetch(url)
            .then((response) => response.json())
            .then((response) => setTasks(response))
            .catch((err) => console.log("O erro aqui:", err));
    }
    useEffect(() => {
        getTasks();
    }, []);
  return (
    <TasksContext.Provider value={ { getTasks, tasks, setTasks, showAddList, setShowAddList } }>
      { children }
    </TasksContext.Provider>
  );
}

ProviderTasks.propTypes = {
  children: Proptypes.node.isRequired,
};

export default ProviderTasks;
