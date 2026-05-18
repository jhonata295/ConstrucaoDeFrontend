import Topbar from "../components/Topbar";
import Menu from "../components/Menu";

function Dashboard() {
  return (
    <div>
      <Topbar />
      <Menu />

      <h1>Dashboard</h1>

      <p>Bem-vindo ao sistema Aluno Online.</p>

      <div>
        <h3>Resumo Acadêmico</h3>

        <ul>
          <li>Disciplinas Matriculadas: 5</li>
          <li>Faltas Totais: 3</li>
          <li>Média Geral: 8.5</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;