import { useState } from 'react';
import './Menu.css';

function Menu(props) {

    return (
        <aside className='div-menu'>
                    <ul className='menu'>
                    <li className='menu-item'>Dashboard</li>
                    <hr className='separador-navbar'/>
                    <li className='menu-item'>Mapa</li>
                    <hr className='separador-navbar'/>
                    <li className='menu-item'>Clientes</li>
                    <hr className='separador-navbar'/>
                    <li className='menu-item'>Imóveis</li>
                    <hr className='separador-navbar'/>
                    <li className='menu-item'>Configurações</li>
                </ul>
        </aside>
    )
}

export default Menu