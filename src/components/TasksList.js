import React, { useEffect, useState, useContext } from 'react';
import ContextTasks from '../context/tasksContext';
import AddTask from './AddTask';

function TasksList() {
    const { tasks, setTasks, showAddList, setShowAddList } = useContext(ContextTasks);

    return (
        <div>
            <header>
                <h1>Tarefas</h1>
            </header>
            {/* <button type="button" onClick={ setShowAddList(!showAddList) }>Adicionar tarefa</button> */}
            {/* { showAddList && <AddTask /> } */}
            <div>
                <ul>
                    { tasks.map((t, i) => <li key={ i }>{t.task}</li>) }
                </ul>
            </div>
            <AddTask />
        </div>
    );
};

export default TasksList;
