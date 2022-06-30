import { Link } from "react-router-dom"

function CadastroCliente() {
    return (
        <div>
            <p>Cadastro de Cliente</p>
            <Link to="/dashboard"><button>Voltar à Dashboard</button></Link>
        </div>
    )
}

export default CadastroCliente