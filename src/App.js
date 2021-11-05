import React from 'react';
// import { Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router';
import ProviderTasks from './context/ProviderTasks';
// import Login from './components/Login';
import TasksList from './components/TasksList';
// import AddTask from './components/AddTask';
// import './App.css';

function App() {
  return (
    <div>
      <ProviderTasks>
        {/* <Routes> */}
          {/* <Route exact path="/" render={ (props) => <Login { ...props } /> }> */}
          {/* </Route> */}
        {/* </Routes> */}
        <TasksList />
        {/* <AddTask /> */}
      </ProviderTasks>
    </div>
  );
}

export default App;
