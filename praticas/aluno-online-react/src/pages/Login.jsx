import { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router";

import { useAuth } from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    login({
      nome: "Aluno",
      email: email,
    });

    navigate("/");
=======
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
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
<<<<<<< HEAD
          placeholder="Digite o email"
=======
          placeholder="E-mail"
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

<<<<<<< HEAD
        <input
          type="password"
          placeholder="Digite a senha"
=======
        <br /><br />

        <input
          type="password"
          placeholder="Senha"
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

<<<<<<< HEAD
=======
        <br /><br />

>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
        <button type="submit">
          Entrar
        </button>
      </form>
<<<<<<< HEAD
=======

      {erro && <p>{erro}</p>}
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
    </div>
  );
}

export default Login;