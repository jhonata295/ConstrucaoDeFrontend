import Topbar from "../components/Topbar";
import Aside from "../components/Aside";
import Card from "../components/Card";

function Requerimentos() {
  return (
    <div style={{ display: "flex" }}>
      <Aside itens={["Dashboard", "Requerimentos"]} />

      <div style={{ flex: 1 }}>
        <Topbar titulo="Requerimentos" usuario="Jhonata" />

        <Card titulo="Declaração" status="Aprovado" cor="purple" />
        <Card titulo="2ª via boleto" status="Em análise" cor="purple" />
      </div>
    </div>
  );
}

export default Requerimentos;