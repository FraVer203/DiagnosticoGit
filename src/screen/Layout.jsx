import "./welcome/welcome.css"

const Layout = () => {
    return (
        <div className="container">
            <h1>Bienvenido</h1>
            <p>Mi primera página web con React</p>
            <div className="button-group">
                <a href="/home" className="btn primary">Iniciar aplicación</a>
            </div>
        </div>
    )
}
export default Layout