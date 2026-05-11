import { useState } from 'react';
import Input from '../components/Input';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});

  const validar = () => {
    let novosErros = {};

    if (!email) {
      novosErros.email = 'O campo de e-mail é obrigatório.';
    } else if (!email.includes('@')) {
      novosErros.email = 'Digite um e-mail válido.';
    }

    if (!senha) {
      novosErros.senha = 'O campo de senha é obrigatório.';
    } else if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter no mínimo 6 caracteres.';
    }

    return novosErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errosValidados = validar();

    if (Object.keys(errosValidados).length > 0) {
      setErros(errosValidados);
    } else {
      setErros({});
      alert('Login realizado com sucesso!');
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="logo">🎓</div>
        <h2>Aluno Online</h2>

        <form onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={erros.email}
          />

          <Input
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            error={erros.senha}
          />

          <button type="submit">Entrar</button>
        </form>

        <p className="footer">© 2025. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Login;