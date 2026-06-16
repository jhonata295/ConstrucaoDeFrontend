import Topbar from "../components/Topbar";
import Aside from "../components/Aside";
import Card from "../components/Card";

function Boletos() {
  return (
    <div style={{ display: "flex" }}>
      <Aside itens={["Dashboard", "Boletos"]} />

      <div style={{ flex: 1 }}>
        <Topbar titulo="Boletos" usuario="Jhonata" />

        <Card titulo="Janeiro" valor="R$500" status="Pago" cor="green" />
        <Card titulo="Fevereiro" valor="R$500" status="Pendente" cor="green" />
      </div>
    </div>
  );
}

export default Boletos;