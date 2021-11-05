import React, { useEffect, useState, useContext } from 'react';
import ContextTasks from '../context/tasksContext';
import AddTask from './AddTask';

function TasksList() {
    const { tasks, showAddList, setShowAddList, deleteTask } = useContext(ContextTasks);

    const convertDate = (date) => {
        const data = new Date(date);
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
    };

    return (
        <div>
            <header>
                <h1>Tarefas</h1>
            </header>
            {/* <button type="button" onClick={ setShowAddList(!showAddList) }>Adicionar tarefa</button> */}
            {/* { showAddList && <AddTask /> } */}
            <div>
                <ul>
                    { tasks.map(({ _id, task, status, createdAt }, i) => (
                    <div>
                        <li key={ i }>{task} - {status} - { convertDate(createdAt) }</li>
                        <button onClick={ () => deleteTask(_id) }>Excluir</button>
                    </div>
                    )) }
                </ul>
            </div>
            <AddTask />
        </div>
    );
};

export default TasksList;
