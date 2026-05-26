import { Link } from "react-router-dom";

function Requerimentos() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Meus Requerimentos</h1>

      <Link to="/requerimentos/novo">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ➕ Novo Requerimento
        </button>
      </Link>
    </div>
  );
}

export default Requerimentos;