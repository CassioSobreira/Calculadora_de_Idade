import React from "react";
import type { FormInputProps } from "../scripts/tipos";

const FormInput: React.FC<FormInputProps> = ({ id, label, placeholder, register, error }) => {
  const labelColor = error ? "text-red-500" : "text-slate-400";
  const borderColor = error ? "border-red-500 ring-red-500" : "border-slate-600 focus:ring-cyan-400";

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`text-sm font-bold uppercase tracking-widest mb-2 transition-colors ${labelColor}`}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        placeholder={placeholder}
        {...register(id, {
          valueAsNumber: true,
          required: "Este campo é obrigatório",
          min: { value: 1, message: "Valor inválido" },
          validate: {
            dayRange: value => id !== "day" || (value >= 1 && value <= 31) || "Deve ser um dia válido",
            monthRange: value => id !== "month" || (value >= 1 && value <= 12) || "Deve ser um mês válido",
            yearInPast: value => id !== "year" || value <= new Date().getFullYear() || "Deve ser no passado",
          },
        })}
        className={`bg-slate-700/50 border text-white text-xl md:text-2xl font-bold rounded-lg p-3 w-full focus:outline-none focus:ring-2 transition-all ${borderColor}`}
      />
      {error && <p className="text-red-500 text-xs italic mt-2">{error.message}</p>}
    </div>
  );
};

export default FormInput;
