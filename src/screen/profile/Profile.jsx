import '../welcome/welcome.css';

function Profile({ user }) {
    return (
        <div className="container">
            <h2>Perfil de Usuario</h2>
            <p>Nombre: {user.name}</p>
            <p>Apellido: {user.lastName}</p>
            <p>Correo: {user.email}</p>
            <p>Edad: {user.age}</p>
        </div>
    )
}

export default Profile