import './Input.css';

function Input({ label, type, value, onChange, error }) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
      />

      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Input;