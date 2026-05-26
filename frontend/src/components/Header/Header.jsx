import { NavLink} from 'react-router-dom';
import './Header.css';

function Header() {   
  return (
    <header className= "header">
      <nav>
          <ul>
            <li><NavLink to="/"  className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
            <li><NavLink to="/Portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
            <li><NavLink to="/Other" className={({ isActive }) => isActive ? "active" : ""}>Projets créatifs</NavLink></li>
            <li><NavLink to="/Contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;