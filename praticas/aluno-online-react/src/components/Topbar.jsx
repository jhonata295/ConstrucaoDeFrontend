function Topbar({ titulo, usuario }) {
    return (
      <div style={{
        backgroundColor: "#1e293b",
        color: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h2>{titulo}</h2>
        <span>{usuario}</span>
      </div>
    );
  }
  
  export default Topbar;