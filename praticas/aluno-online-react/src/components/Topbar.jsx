<<<<<<< HEAD
function Topbar({ titulo, usuario }) {
    return (
      <div style={{
        backgroundColor: "#1e293b",
        color: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h2>{titulo}</h2>
        <span>{usuario}</span>
      </div>
    );
  }
  
  export default Topbar;
=======
import { useAuth } from "../contexts/AuthContext";

function Topbar() {
  const { usuario } = useAuth();

  return (
    <div>
      <h2>Aluno Online</h2>

      {usuario && (
        <p>
          Usuário: {usuario.nome}
        </p>
      )}
    </div>
  );
}

export default Topbar;
>>>>>>> cf5c677bd831cf9b9640c15fbbc79956326dcad8
