import '../welcome/welcome.css';

function Profile({ user }) {
    return (
        <div className="profile">
            <h2>Perfil de Usuario</h2>
            <p>Nombre: {user.name}</p>
            <p>Apellido: {user.lastName}</p>
            <p>Correo: {user.email}</p>
            <p>Edad: {user.age}</p>
            {/* Puedes agregar más detalles según las propiedades del objeto de usuario */}
        </div>
    )
}

export default Profile