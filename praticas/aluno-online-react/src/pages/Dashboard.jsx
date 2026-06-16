import Topbar from "../components/Topbar";
<<<<<<< HEAD
import Aside from "../components/Aside";
import Card from "../components/Card";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Aside itens={["Dashboard", "Notas", "Faltas", "Boletos"]} />

      <div style={{ flex: 1 }}>
        <Topbar titulo="Dashboard" usuario="Jhonata" />

        <Card titulo="Notas" descricao="Ver notas" cor="blue" />
        <Card titulo="Faltas" descricao="Ver faltas" cor="orange" />
        <Card titulo="Boletos" descricao="Ver pagamentos" cor="green" />
=======
import Menu from "../components/Menu";

function Dashboard() {
  return (
    <div>
<<<<<<< HEAD
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
>>>>>>> cf5c677bd831cf9b9640c15fbbc79956326dcad8
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
=======
      <h1>Dashboard</h1>
      <p>Bem-vindo ao sistema Aluno Online.</p>
    </div>
  )
}

export default Dashboard
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
>>>>>>> cf5c677bd831cf9b9640c15fbbc79956326dcad8
