import '../welcome/welcome.css'

function Tareas() {

    //LISTADO DE TAREAS
    const tareas = [
        {
            id: 1,
            nombre: "Tarea 1",
            estado: false
        },
        {
            id: 2,
            nombre: "Tarea 2",
            estado: true
        },
        {
            id: 3,
            nombre: "Tarea 3",
            estado: false
        }
    ]

    return (
        <div>
            <h1>Tareas</h1>
            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id} style={{ textDecoration: tarea.estado ? 'line-through' : 'none' }}>
                        {tarea.nombre}
                    </li>
                ))}
            </ul>
            <button className="btn btn-info mt-3" style={{
                borderRadius: '5px',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none'
            }}>
                <a href="/" style={{textDecoration: 'none', color: '#fff'}}>Cerrar tarea</a>
            </button>
        </div>
    )
}

export default Tareas