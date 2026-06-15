import { NavLink, useNavigate } from "react-router-dom";
import authService from "../services/authService";

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
          className={({ isActive }) =>
            isActive ? "link active" : "link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/faltas"
          className={({ isActive }) =>
            isActive ? "link active" : "link"
          }
        >
          Faltas
        </NavLink>

        <NavLink
          to="/notas"
          className={({ isActive }) =>
            isActive ? "link active" : "link"
          }
        >
          Notas
        </NavLink>

        <NavLink
          to="/boletos"
          className={({ isActive }) =>
            isActive ? "link active" : "link"
          }
        >
          Boletos
        </NavLink>

        <NavLink
          to="/requerimentos"
          className={({ isActive }) =>
            isActive ? "link active" : "link"
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