import './Header.css'
import { FiLogOut, FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Header() {
    return (
            <header className='div-header'>
                <span id='expandir-recolher'><FiAlignJustify/></span>
                <span id='navegacao-atual'>Dashboard</span>
                <span id="sair-app"><Link to="/login"><FiLogOut/></Link></span>
            </header>
    )
}

export default Header;