import './Nav.css';

function Nav() {
    return (
        <aside>
            <div className="avatar">
                <div className='container-img-avatar'>
                    <img className="img-avatarr" src="https://www.coladaweb.com/wp-content/uploads/2020/12/20201202-foguete.png" alt=""/>
                </div>
                <hr className='separador-avatar'/>
                <div className='container-descricao-avatar'>
                    <p className='titulo-avatar'><strong>Gestão de Imóveis</strong></p>
                    <p className='descricao-avatar'>Empresa: </p>
                    <p className='descricao-avatar'>Plano: </p>
                </div>
            </div>
            <div className="navbar">
                <ul className='lista-navbar'>
                    <li className='app-navbar'>Dashboard</li>
                    <hr className='separador-navbar'/>
                    <li className='app-navbar'>Mapa</li>
                    <hr className='separador-navbar'/>
                    <li className='app-navbar'>Clientes</li>
                    <hr className='separador-navbar'/>
                    <li className='app-navbar'>Imóveis</li>
                    <hr className='separador-navbar'/>
                    <li className='app-navbar'>Configurações</li>
                </ul>
            </div>
        </aside>
    )
}

export default Nav