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