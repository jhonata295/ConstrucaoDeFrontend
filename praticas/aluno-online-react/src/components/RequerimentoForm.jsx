import { useForm } from "react-hook-form";

function RequerimentoForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function enviar(dados) {
    await onSubmit(dados);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(enviar)}>
      <div>
        <label>Nome</label>
        <input
          {...register("nome", {
            required: "Nome obrigatório",
          })}
        />
        {errors.nome && <p>{errors.nome.message}</p>}
      </div>

      <div>
        <label>Curso</label>
        <input
          {...register("curso", {
            required: "Curso obrigatório",
          })}
        />
        {errors.curso && <p>{errors.curso.message}</p>}
      </div>

      <div>
        <label>Tipo</label>
        <input
          {...register("tipo", {
            required: "Tipo obrigatório",
          })}
        />
        {errors.tipo && <p>{errors.tipo.message}</p>}
      </div>

      <div>
        <label>Descrição</label>
        <textarea
          {...register("descricao", {
            required: "Descrição obrigatória",
          })}
        />
        {errors.descricao && <p>{errors.descricao.message}</p>}
      </div>

      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default RequerimentoForm;