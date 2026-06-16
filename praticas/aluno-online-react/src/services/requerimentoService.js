import api from "./api";

function getHeaders() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw {
      status: 401,
      message: "Unauthorized",
    };
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function listarRequerimentos() {
  const response = await api.get(
    "/requerimentos",
    {
      headers: getHeaders(),
    }
  );

  return response.data;
}

export async function cadastrarRequerimento(
  dados
) {
  const response = await api.post(
    "/requerimentos",
    dados,
    {
      headers: getHeaders(),
    }
  );

  return response.data;
}