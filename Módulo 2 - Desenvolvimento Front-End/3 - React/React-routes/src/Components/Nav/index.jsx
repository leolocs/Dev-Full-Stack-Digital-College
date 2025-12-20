import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
    return (
        // Nav com Links de navegação
        <nav>
            <svg href="./"></svg>
            <h2>React Routes</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produto">Produto</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}