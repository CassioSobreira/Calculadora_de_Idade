import React from "react";
import { useCalcularIdade } from "./scripts/calcular_idade_format";
import FormInput from './componentes/input_formulario';
import SubmitButton from './componentes/botao_envio';

function App() {
  const { idade, register, handleSubmit, errors, onSubmit, setIdade } = useCalcularIdade();

  const onInvalid = () => {
    setIdade({ years: "--", months: "--", days: "--" });
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center font-sans p-4">
      <main className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-700 w-full max-w-lg">
        <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
          <div className="grid grid-cols-3 gap-4">
            <FormInput id="day" label="Dia" placeholder="DD" register={register} error={errors.day} />
            <FormInput id="month" label="Mês" placeholder="MM" register={register} error={errors.month} />
            <FormInput id="year" label="Ano" placeholder="YYYY" register={register} error={errors.year} />
          </div>

          <div className="relative flex items-center my-16 md:my-8">
            <hr className="w-full border-slate-600" />
            <SubmitButton />
          </div>
        </form>

        <section className="text-5xl md:text-7xl font-extrabold italic">
          <p><span className="text-cyan-400">{idade.years}</span> anos</p>
          <p><span className="text-cyan-400">{idade.months}</span> meses</p>
          <p><span className="text-cyan-400">{idade.days}</span> dias</p>
        </section>
      </main>
    </div>
  );
}

export default App;

