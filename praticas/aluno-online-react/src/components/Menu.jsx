import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <aside className="menu">
      <h2>Aluno Online</h2>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'menu-link active' : 'menu-link'
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/faltas"
          className={({ isActive }) =>
            isActive ? 'menu-link active' : 'menu-link'
          }
        >
          Faltas
        </NavLink>

        <NavLink
          to="/notas"
          className={({ isActive }) =>
            isActive ? 'menu-link active' : 'menu-link'
          }
        >
          Notas
        </NavLink>

        <NavLink
          to="/boletos"
          className={({ isActive }) =>
            isActive ? 'menu-link active' : 'menu-link'
          }
        >
          Boletos
        </NavLink>
      </nav>
    </aside>
  )
}

export default Menu