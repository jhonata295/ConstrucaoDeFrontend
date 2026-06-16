import Topbar from "../components/Topbar";
<<<<<<< HEAD
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
=======
import Menu from "../components/Menu";

function Faltas() {
  return (
    <div>
<<<<<<< HEAD
      <Topbar />
      <Menu />

      <h1>Controle de Faltas</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Faltas</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend</td>
            <td>1</td>
          </tr>

          <tr>
            <td>Banco de Dados</td>
            <td>0</td>
          </tr>

          <tr>
            <td>React</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
>>>>>>> cf5c677bd831cf9b9640c15fbbc79956326dcad8
    </div>
  );
}

<<<<<<< HEAD
export default Faltas;
=======
export default Faltas;
=======
      <h1>Faltas</h1>
      <p>Visualize suas faltas.</p>
    </div>
  )
}

export default Faltas
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
>>>>>>> cf5c677bd831cf9b9640c15fbbc79956326dcad8
