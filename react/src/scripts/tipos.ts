import type { UseFormRegister, FieldError } from "react-hook-form";

export type DateInput = {
  day: number;
  month: number;
  year: number;
};

export interface Age {
  years: number | string;
  months: number | string;
  days: number | string;
}

export interface FormInputProps {
  id: keyof DateInput;
  label: string;
  placeholder: string;
  register: UseFormRegister<DateInput>;
  error?: FieldError;
}
