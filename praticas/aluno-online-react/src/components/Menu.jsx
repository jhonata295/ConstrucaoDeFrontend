import { NavLink, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();

  function sair() {
    authService.logout();
    navigate("/login");
  }

  return (
    <aside className="menu">
      <h2>Aluno Online</h2>

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
  );
}

export default Menu;