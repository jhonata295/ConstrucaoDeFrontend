function MenuItem({ texto }) {
    return (
      <li style={{ padding: "10px", cursor: "pointer" }}>
        {texto}
      </li>
    );
  }
  
  export default MenuItem;