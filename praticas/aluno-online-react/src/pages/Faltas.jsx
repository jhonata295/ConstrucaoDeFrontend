import Card from "../components/Card";

function Faltas() {
  return (
    <div>
      <h1>Faltas</h1>

      <Card 
        titulo="Matemática"
        valor="3 faltas"
        status="OK"
        cor="orange"
      />

      <Card 
        titulo="História"
        valor="10 faltas"
        status="Atenção"
        cor="orange"
      />
    </div>
  );
}

export default Faltas;