function Card({ titulo, descricao, valor, status, cor }) {
    return (
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
      }}>
        
        <h3 style={{ color: cor }}>{titulo}</h3>
  
        {descricao && <p>{descricao}</p>}
  
        {valor && <strong>{valor}</strong>}
  
        {status && (
          <p style={{
            color: status === "Pago" || status === "Aprovado" ? "green" : "red"
          }}>
            {status}
          </p>
        )}
  
      </div>
    );
  }
  
  export default Card;