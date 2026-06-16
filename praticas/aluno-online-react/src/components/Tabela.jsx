function Tabela({ colunas, dados }) {
    return (
      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            {colunas.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
  
        <tbody>
          {dados.map((linha, index) => (
            <tr key={index}>
              {linha.map((celula, i) => (
                <td key={i}>{celula}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Tabela;