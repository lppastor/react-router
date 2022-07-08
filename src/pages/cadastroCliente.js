import { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import Avatar from "../components/Avatar"
import Menu from "../components/Menu"
import './cadastroCliente.css'

function CadastroCliente() {

    return (
        <div className="container">
            <Avatar/>
            <Header/>
            <Menu/>
            <div className='app'>
                <p>Clientes</p>
                <Link to="/dashboard"><button>Voltar à Dashboard</button></Link>
            </div>
        </div>
    )
}

export default CadastroCliente