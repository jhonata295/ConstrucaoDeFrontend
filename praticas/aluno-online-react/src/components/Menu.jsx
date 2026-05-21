import { Link, useNavigate } from "react-router";

import { useAuth } from "../contexts/AuthContext";

function Menu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

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
  );
}

export default Menu;