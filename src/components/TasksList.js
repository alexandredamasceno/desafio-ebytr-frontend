import React, { useEffect, useState, useContext } from 'react';
import ContextTasks from '../context/tasksContext';
import AddTask from './AddTask';

function TasksList() {
    // const [showAddList, setShowAddList] = useState(false);
    const { tasks, setTasks, showAddList, setShowAddList } = useContext(ContextTasks);
    // const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const getTasks = () => {
            const url = 'http://localhost:3001/tasks'
            fetch(url)
                .then((response) => response.json())
                .then((response) => setTasks(response))
                .catch((err) => console.log("O erro aqui:", err));
        }
        getTasks();
    }, []);
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
