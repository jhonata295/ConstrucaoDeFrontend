import Card from "../components/Card";

function Notas() {
  return (
    <div>
      <h1>Notas</h1>

      <Card 
        titulo="Matemática"
        valor="8.5"
        status="Aprovado"
        cor="blue"
      />

      <Card 
        titulo="Português"
        valor="6.0"
        status="Recuperação"
        cor="blue"
      />
    </div>
  );
}

export default Notas;