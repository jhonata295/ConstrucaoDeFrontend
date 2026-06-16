<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react";
import RequerimentoForm from "../components/RequerimentoForm";

import {
  listarRequerimentos,
  cadastrarRequerimento,
} from "../services/requerimentoService";

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);

  async function carregarRequerimentos() {
    try {
      const dados = await listarRequerimentos();
      setRequerimentos(dados);
    } catch (error) {
      console.error("Erro ao buscar requerimentos:", error);
    }
  }

  useEffect(() => {
    carregarRequerimentos();
  }, []);

  async function handleCadastrar(dados) {
    try {
      await cadastrarRequerimento(dados);
      carregarRequerimentos();
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  }

  return (
    <div>
      <h1>Requerimentos</h1>

      <RequerimentoForm onSubmit={handleCadastrar} />

      <hr />

      <h2>Lista de Requerimentos</h2>

      {requerimentos.length === 0 ? (
        <p>Nenhum requerimento encontrado.</p>
      ) : (
        <ul>
          {requerimentos.map((req) => (
            <li key={req.id}>
              <strong>{req.nome}</strong>
              <br />
              Curso: {req.curso}
              <br />
              Tipo: {req.tipo}
              <br />
              Descrição: {req.descricao}
              <hr />
            </li>
          ))}
        </ul>
      )}
>>>>>>> 4f26fe0761741df1447ddede7ad45f80345fd349
    </div>
  );
}

export default Requerimentos;