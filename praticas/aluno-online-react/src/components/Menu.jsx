<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
import './Menu.css'
=======
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../services/authService";
>>>>>>> f0b97f29d547c556982d581845ac9373cfdcf56e

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
<<<<<<< HEAD
            isActive ? 'menu-link active' : 'menu-link'
=======
            isActive ? "link active" : "link"
>>>>>>> f0b97f29d547c556982d581845ac9373cfdcf56e
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/faltas"
          className={({ isActive }) =>
<<<<<<< HEAD
            isActive ? 'menu-link active' : 'menu-link'
=======
            isActive ? "link active" : "link"
>>>>>>> f0b97f29d547c556982d581845ac9373cfdcf56e
          }
        >
          Faltas
        </NavLink>

        <NavLink
          to="/notas"
          className={({ isActive }) =>
<<<<<<< HEAD
            isActive ? 'menu-link active' : 'menu-link'
=======
            isActive ? "link active" : "link"
>>>>>>> f0b97f29d547c556982d581845ac9373cfdcf56e
          }
        >
          Notas
        </NavLink>

        <NavLink
          to="/boletos"
          className={({ isActive }) =>
<<<<<<< HEAD
            isActive ? 'menu-link active' : 'menu-link'
=======
            isActive ? "link active" : "link"
>>>>>>> f0b97f29d547c556982d581845ac9373cfdcf56e
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