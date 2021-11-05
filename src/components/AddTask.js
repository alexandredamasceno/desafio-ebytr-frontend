import React, { useState, useContext } from 'react';
import ContextTasks from '../context/tasksContext';

function AddTask() {
    const [task, setTask] = useState({
       task: '',
       status: 'Pendente', 
    });
    const { getTasks } = useContext(ContextTasks);

    const setInputs = ({ target }) => {
        setTask({ ...task, [target.name]: target.value });
    };

    const submitInputs = () => {
        const url = 'http://localhost:3001/tasks';
        const header = {
            method: 'POST',
            body: JSON.stringify(task),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
        };
        fetch(url, header)
            .then(() => getTasks())
            .catch((err) => console.log('Erro aqui', err));

        // setTask({ ...task, task: '' });
    };
    return (
        <div>
            <div>
                <form>
                    <input
                    type="text"
                    name="task"
                    placeholder="Digite aqui sua nova tarefa"
                    onChange={ setInputs }
                    />
                    {/* <br></br> */}
                    {/* <label> */}
                        {/* Status */}
                        <select
                        name="status"
                        onChange={ setInputs }
                        >
                            <option value="Pendente">Pendente</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Pronto">Pronto</option>
                        </select>
                    {/* </label> */}
                    <br></br>
                    <button type="button" onClick={ () => submitInputs() }>Adicionar</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
