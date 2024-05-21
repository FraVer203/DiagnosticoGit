import "../welcome/welcome.css"

function Task({ task}) {
    return (
        <div className="task-container">
            <h1>Listado de Tareas</h1>
            <ul className="task-list">
                {task.map(task => (
                    <li key={task.id} className={task.status ? 'completed' : 'pending'}>
                        {task.name}
                        {task.status ? ': Completada' : ' Pendiente'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task