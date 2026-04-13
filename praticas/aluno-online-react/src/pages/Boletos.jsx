import Card from "../components/Card";

function Boletos() {
  return (
    <div>
      <h1>Boletos</h1>

      <Card 
        titulo="Mensalidade Janeiro"
        valor="R$ 500"
        status="Pago"
        cor="green"
      />

      <Card 
        titulo="Mensalidade Fevereiro"
        valor="R$ 500"
        status="Pendente"
        cor="green"
      />
    </div>
  );
}

export default Boletos;