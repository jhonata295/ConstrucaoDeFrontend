import MenuItem from "./MenuItem";

function Aside({ itens }) {
  return (
    <div style={{
      width: "200px",
      backgroundColor: "#f1f5f9",
      height: "100vh",
      padding: "10px"
    }}>
      <ul>
        {itens.map((item, index) => (
          <MenuItem key={index} texto={item} />
        ))}
      </ul>
    </div>
  );
}

export default Aside;