import { Link } from "react-router-dom"

function Dashboard() {
    return (
        <div>
            <p>Dashboard</p>
            <Link to="/cadastroCliente"><button>Cadastro de Clientes</button></Link>
            <Link to="/login"><button>Sair</button></Link>
        </div>
    )
}

export default Dashboard