import { Link } from 'react-router-dom'
import Header from "../components/Header"
import Nav from "../components/Nav"
import './cadastroCliente.css'

function CadastroCliente() {
    return (
        <div className="container-row">
            <Nav/>
            <div className='container-col'>
                <Header/>
                <div className="app">
                    <p>Clientes</p>
                    <Link to="/dashboard"><button>Voltar à Dashboard</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CadastroCliente