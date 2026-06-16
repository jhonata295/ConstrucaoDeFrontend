import api from "./api";

const authService = {
  async login(email, senha) {
    try {
      const response = await api.get("/usuarios");

      console.log("Usuários:", response.data);

      const usuario = response.data.find(
        (u) =>
          u.email.trim().toLowerCase() ===
          email.trim().toLowerCase()
      );

      if (!usuario) {
        throw new Error("Usuário não encontrado");
      }

      if (usuario.senha !== senha) {
        throw new Error("Senha incorreta");
      }

      const token = btoa(
        `${usuario.email}-${Date.now()}`
      );

      const usuarioLogado = {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      };

      localStorage.setItem(
        "usuario",
        JSON.stringify(usuarioLogado)
      );

      localStorage.setItem(
        "token",
        token
      );

      return {
        usuario: usuarioLogado,
        token,
      };
    } catch (error) {
      console.error(
        "Erro no login:",
        error
      );
      throw error;
    }
  },

  logout() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
  },

  getUsuario() {
    return JSON.parse(
      localStorage.getItem("usuario")
    );
  },

  getToken() {
    return localStorage.getItem("token");
  },

  isAuthenticated() {
    return !!localStorage.getItem(
      "token"
    );
  },
};

export default authService;