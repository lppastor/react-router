import './Header.css'
import { FiLogOut } from "react-icons/fi";

function Header() {
    return (

            <header>
                <span id='navegacao-atual'>&gt; Dashboard</span>
                <span id="sair-app"><FiLogOut/></span>
            </header>
     
    )
}

export default Header;