import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { DataNascimento, Idade } from "./formatacao";
import { calcularIdade } from "./calcular_Idade";

export function useCalcularIdade() {
  const [idade, setIdade] = useState<Idade>({ years: "--", months: "--", days: "--" });

  const { register, handleSubmit, formState: { errors }, setError } = useForm<DataNascimento>({
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<DataNascimento> = (data) => {
    const resultado = calcularIdade(data);

    if (!resultado) {
      setError("day", { type: "manual", message: "Deve ser uma data válida" });
      return;
    }

    setIdade(resultado);
  };

  return { idade, register, handleSubmit, errors, onSubmit, setIdade };
}
