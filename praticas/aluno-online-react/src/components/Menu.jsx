<<<<<<< HEAD
import { Link, useNavigate } from "react-router";

import { useAuth } from "../contexts/AuthContext";

function Menu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
=======
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();

  function sair() {
    authService.logout();
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
    navigate("/login");
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

<<<<<<< HEAD
        <li>
          <Link to="/faltas">Faltas</Link>
        </li>

        <li>
          <button onClick={handleLogout}>
            Sair
          </button>
        </li>
      </ul>
    </div>
=======
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/faltas"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Faltas
        </NavLink>

        <NavLink
          to="/notas"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Notas
        </NavLink>

        <NavLink
          to="/boletos"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Boletos
        </NavLink>

        <NavLink
          to="/requerimentos"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Requerimentos
        </NavLink>

        <br />

        <button onClick={sair}>
          Sair
        </button>
      </nav>
    </aside>
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
  );
}

export default Menu;