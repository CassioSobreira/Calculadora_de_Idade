import type { DateInput, Age } from "./tipos";

export function calcularIdade(data: DateInput): Age | null {
  const { day, month, year } = data;
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    return null;
  }

  if (birthDate > today) {
    return null;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthLastDay;
    months = (months + 11) % 12;
  }

  return { years, months, days };
}
