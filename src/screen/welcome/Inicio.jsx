import './welcome.css';

function Inicio() {
    return (
        <div className="container">
            <h1>App con React</h1>
            <p>Bienvenido a mi app donde podras consultar temas interesantes</p>
            <div className="button-group">
                <div className="button-group">
                    <a href="/task" className="btn primary">Ir a listado de tareas</a>
                </div>
                <div className="button-group">
                    <a href="/profile" className="btn secondary">Más sobre mí</a>
                </div>
            </div>
        </div>
    );
}

export default Inicio;