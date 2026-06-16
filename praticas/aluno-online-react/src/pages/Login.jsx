import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await authService.login(email, senha);
      navigate("/");
    } catch {
      setErro("E-mail ou senha inválidos");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Entrar
        </button>
      </form>

      {erro && <p>{erro}</p>}
    </div>
  );
}

export default Login;