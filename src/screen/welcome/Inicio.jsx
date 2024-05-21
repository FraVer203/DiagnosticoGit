import './welcome.css';

function Index() {
    return (
        <div className="container">
            <h1>App con React</h1>
            <p>Bienvenido a mi app donde podras consultar temas interesantes</p>
            <div className="button-group">
                <button className="btn primary">Ir al listado de tareas</button>
                <button className="btn secondary">Más sobre mí</button>
            </div>
        </div>
    );
}

export default Index;