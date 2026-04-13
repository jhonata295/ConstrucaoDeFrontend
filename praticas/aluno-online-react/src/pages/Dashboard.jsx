import Card from "../components/Card";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Card 
        titulo="Notas"
        descricao="Veja suas notas"
        cor="blue"
      />

      <Card 
        titulo="Faltas"
        descricao="Controle de presença"
        cor="orange"
      />

      <Card 
        titulo="Boletos"
        descricao="Pagamentos pendentes"
        cor="green"
      />
    </div>
  );
}

export default Dashboard;