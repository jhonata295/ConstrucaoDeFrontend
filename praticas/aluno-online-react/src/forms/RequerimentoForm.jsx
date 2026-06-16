import { useForm } from "react-hook-form";

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    alert("Requerimento enviado com sucesso!");

    reset();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Novo Requerimento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Tipo de Requerimento</label>

          <br />

          <select
            {...register("tipo", {
              required: "Tipo é obrigatório",
            })}
          >
            <option value="">Selecione...</option>
            <option value="matricula">
              Declaração de Matrícula
            </option>
            <option value="historico">
              Histórico Escolar
            </option>
          </select>

          {errors.tipo && (
            <p style={{ color: "red" }}>
              {errors.tipo.message}
            </p>
          )}
        </div>

        <br />

        <div>
          <label>Descrição</label>

          <br />

          <textarea
            rows="5"
            cols="40"
            {...register("descricao", {
              required: "Descrição é obrigatória",
              minLength: {
                value: 10,
                message:
                  "Descrição deve ter no mínimo 10 caracteres",
              },
            })}
          />

          {errors.descricao && (
            <p style={{ color: "red" }}>
              {errors.descricao.message}
            </p>
          )}
        </div>

        <br />

        <button type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default RequerimentoForm;