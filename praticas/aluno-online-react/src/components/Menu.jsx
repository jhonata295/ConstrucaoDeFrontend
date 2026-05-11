import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <aside className="menu">
      <h2>Aluno Online</h2>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'link active' : 'link'
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/faltas"
          className={({ isActive }) =>
            isActive ? 'link active' : 'link'
          }
        >
          Faltas
        </NavLink>

        <NavLink
          to="/notas"
          className={({ isActive }) =>
            isActive ? 'link active' : 'link'
          }
        >
          Notas
        </NavLink>

        <NavLink
          to="/boletos"
          className={({ isActive }) =>
            isActive ? 'link active' : 'link'
          }
        >
          Boletos
        </NavLink>
      </nav>
    </aside>
  )
}

export default Menu