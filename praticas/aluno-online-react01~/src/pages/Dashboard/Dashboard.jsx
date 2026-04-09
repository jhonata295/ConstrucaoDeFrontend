import Layout from "../../components/Layout/Layout";
import "./Dashboard.css";

function Dashboard() {
  return (
    <Layout>
      <h2>Dashboard</h2>
      <div className="cards">
        <div className="card">Mural de Avisos</div>
        <div className="card">Calendário</div>
        <div className="card">Disciplinas</div>
      </div>
    </Layout>
  );
}

export default Dashboard;