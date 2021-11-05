import React, { useEffect, useState, useContext } from 'react';
import ContextTasks from '../context/tasksContext';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';

function TasksList() {
    const [showAddList, setShowAddList] = useState(false);
    const [showUpdateTask, setShowUpdateTask] = useState({
        show: false,
        id: '',
    });
    const { tasks, deleteTask, updateTask } = useContext(ContextTasks);

    const convertDate = (date) => {
        const data = new Date(date);
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
    };

    // const setInputs = ({ target }) => {
    //     setTask({ ...task, [target.name]: target.value });
    // };

    return (
        <div>
            <header>
                <h1>Tarefas</h1>
            </header>
            <button onClick={ () => setShowAddList(!showAddList) }>Adicionar tarefa</button>
            { showAddList && <AddTask /> }
            <div>
                <ul>
                    { tasks.map(({ _id, task, status, createdAt }, i) => (
                    <div>
                        <li key={ i }>{task} - {status} - { convertDate(createdAt) }</li>
                        <button onClick={ () => deleteTask(_id) }>Excluir</button>
                        <button onClick={ () => setShowUpdateTask({ show: !showUpdateTask.show, id: _id }) }>Editar</button>
                        { showUpdateTask.id === _id && showUpdateTask.show ? <UpdateTask id={ _id }/> : null }
                    </div>
                    )) }
                </ul>
            </div>
            {/* <AddTask /> */}
        </div>
    );
};

export default TasksList;
