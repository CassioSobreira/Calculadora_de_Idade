import React from 'react';

type FormInputProps = {
  label: string;
  id: string;
  placeholder: string;
  register: (name: string) => any; // Adiciona o tipo para register
  error?: any; // Opcional: para exibir erro
};

const FormInput = ({ label, id, placeholder, register, error }: FormInputProps) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="uppercase font-bold text-xs tracking-[0.2em] text-cyan-400">
      {label}
    </label>
    <input
      id={id}
      type="number"
      placeholder={placeholder}
      className={`w-full p-3 bg-slate-900 border ${error ? 'border-red-500' : 'border-slate-700'} rounded-lg text-xl md:text-2xl font-bold text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors`}
      {...register(id)}
    />
    {error && <span className="text-red-400 text-xs">{error.message}</span>}
  </div>
);

export default FormInput;