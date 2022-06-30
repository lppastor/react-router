import {Link} from 'react-router-dom'
import './login.css'

function Login() {
    return (
        <div>
            <p>Login</p>
            <Link to="/dashboard"><button>Acessar</button></Link>
        </div>
    )
}

export default Login