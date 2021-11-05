import React, { useState } from 'react';
import Proptypes from 'prop-types';
import TasksContext from './tasksContext';

function ProviderTasks({ children }) {
    const [tasks, setTasks] = useState([]);
    
  return (
    <TasksContext.Provider value={ { tasks, setTasks } }>
      { children }
    </TasksContext.Provider>
  );
}

ProviderTasks.propTypes = {
  children: Proptypes.node.isRequired,
};

export default ProviderTasks;
