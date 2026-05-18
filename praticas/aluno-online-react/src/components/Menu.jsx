import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
import './Menu.css'
=======
>>>>>>> develop

function Menu() {
  return (
    <aside className="menu">
      <h2>Aluno Online</h2>

      <nav>
        <NavLink
          to="/"
<<<<<<< HEAD
          end
          className={({ isActive }) =>
            isActive ? 'menu-link active' : 'menu-link'
=======
          className={({ isActive }) =>
            isActive ? 'link active' : 'link'
>>>>>>> develop
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
            isActive ? 'link active' : 'link'
>>>>>>> develop
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
            isActive ? 'link active' : 'link'
>>>>>>> develop
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
            isActive ? 'link active' : 'link'
>>>>>>> develop
          }
        >
          Boletos
        </NavLink>
      </nav>
    </aside>
  )
}

export default Menu