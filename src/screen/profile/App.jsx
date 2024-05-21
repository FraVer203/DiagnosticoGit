import Profile from "./Profile.jsx";
import user from "./user.js";

function App() {
    return(
        <div className={"app"}>
            <Profile user={user} />
        </div>
    )
}

export default App