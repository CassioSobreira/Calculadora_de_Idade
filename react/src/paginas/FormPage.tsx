import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { DateInput, Age } from "../scripts/tipos";
import { calcularDiferencaData } from "../scripts/calculaIdade";
import FormInput from "../componentes/input_formulario";
import SubmitButton from "../componentes/botao_envio";

interface FormPageProps {
  mode: 'age' | 'event';
}

const FormPage: React.FC<FormPageProps> = ({ mode }) => {
  const [result, setResult] = useState<Age>({ years: "--", months: "--", days: "--" });
  const { register, handleSubmit, formState: { errors }, setError } = useForm<DateInput>({
    mode: "onTouched",
  });

  const pageConfig = {
    age: {
      title: "Calculadora de Idade",
      resultLabels: { years: "anos", months: "meses", days: "dias" },
    },
    event: {
      title: "Contagem Regressiva",
      resultLabels: { years: "anos", months: "meses", days: "dias" },
    },
  };

  const onSubmit: SubmitHandler<DateInput> = (data) => {
    const calculatedResult = calcularDiferencaData(data, mode);

    if (!calculatedResult) {
      setError("day", { type: "manual", message: "Deve ser uma data válida" });
      setError("month", { type: "manual" });
      setError("year", { type: "manual" });
      return;
    }

    setResult(calculatedResult);
  };

  const onInvalid = () => {
    setResult({ years: "--", months: "--", days: "--" });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
        <div className="grid grid-cols-3 gap-4">
          <FormInput id="day" label="Dia" placeholder="DD" register={register} error={errors.day} mode={mode} />
          <FormInput id="month" label="Mês" placeholder="MM" register={register} error={errors.month} mode={mode} />
          <FormInput id="year" label="Ano" placeholder="AAAA" register={register} error={errors.year} mode={mode} />
        </div>

        <div className="relative flex items-center my-16 md:my-8">
          <hr className="w-full border-slate-600" />
          <SubmitButton />
        </div>
      </form>

      <section className="text-5xl md:text-7xl font-extrabold italic">
        <p><span className="text-cyan-400">{result.years}</span> {pageConfig[mode].resultLabels.years}</p>
        <p><span className="text-cyan-400">{result.months}</span> {pageConfig[mode].resultLabels.months}</p>
        <p><span className="text-cyan-400">{result.days}</span> {pageConfig[mode].resultLabels.days}</p>
      </section>
    </>
  );
}

export default FormPage;
