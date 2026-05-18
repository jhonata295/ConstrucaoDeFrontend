import Topbar from "../components/Topbar";
import Menu from "../components/Menu";

function Faltas() {
  return (
    <div>
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
    </div>
  );
}

export default Faltas;