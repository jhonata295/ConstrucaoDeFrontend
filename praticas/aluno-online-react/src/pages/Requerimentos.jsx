import Card from "../components/Card";

function Requerimentos() {
  return (
    <div>
      <h1>Requerimentos</h1>

      <Card 
        titulo="Declaração de Matrícula"
        status="Aprovado"
        cor="purple"
      />

      <Card 
        titulo="2ª via de boleto"
        status="Em análise"
        cor="purple"
      />
    </div>
  );
}

export default Requerimentos;