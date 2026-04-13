import Topbar from "../components/Topbar";
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
      </div>
    </div>
  );
}

export default Dashboard;