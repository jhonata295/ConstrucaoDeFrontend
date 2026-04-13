import Topbar from "../components/Topbar";
import Aside from "../components/Aside";
import Tabela from "../components/Tabela";

function Notas() {
  return (
    <div style={{ display: "flex" }}>
      <Aside itens={["Dashboard", "Notas", "Faltas"]} />

      <div style={{ flex: 1 }}>
        <Topbar titulo="Notas" usuario="Jhonata" />

        <Tabela
          colunas={["Disciplina", "Nota", "Status"]}
          dados={[
            ["Matemática", "8.5", "Aprovado"],
            ["Português", "6.0", "Recuperação"]
          ]}
        />
      </div>
    </div>
  );
}

export default Notas;