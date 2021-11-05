import React, { useContext, useEffect } from 'react';
import ContextTasks from '../context/tasksContext';

function TasksList() {
    const { tasks, setTasks } = useContext(ContextTasks);
    console.log(tasks);
    
    useEffect(() => {
        const getTasks = () => {
            const url = 'http://localhost:3001/tasks'
            fetch(url)
                .then((response) => response.json())
                .then((response) => setTasks(response))
                .catch((err) => console.log("O erro aqui:", err));
        }
        getTasks();
    }, [setTasks]);
    return (
        <div>
            <header>
                <h1>Tarefas</h1>
            </header>
            <div>
                <ul>
                    { tasks.map((t, i) => <li key={ i }>{t.task}</li>) }
                </ul>
            </div>
        </div>
    );
};

export default TasksList;
