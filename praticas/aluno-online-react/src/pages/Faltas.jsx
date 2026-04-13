import Topbar from "../components/Topbar";
import Aside from "../components/Aside";
import Tabela from "../components/Tabela";

function Faltas() {
  return (
    <div style={{ display: "flex" }}>
      <Aside itens={["Dashboard", "Notas", "Faltas"]} />

      <div style={{ flex: 1 }}>
        <Topbar titulo="Faltas" usuario="Jhonata" />

        <Tabela
          colunas={["Disciplina", "Faltas", "Status"]}
          dados={[
            ["Matemática", "3", "OK"],
            ["História", "10", "Atenção"]
          ]}
        />
      </div>
    </div>
  );
}

export default Faltas;