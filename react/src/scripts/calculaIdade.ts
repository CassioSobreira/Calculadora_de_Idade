import type { DateInput, Age } from "./tipos";

export function calcularDiferencaData(data: DateInput, mode: 'age' | 'event'): Age | null {
  const { day, month, year } = data;
  const targetDate = new Date(year, month - 1, day);
  const today = new Date();
  
  // Reseta a hora para comparações de dia inteiro
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0,0,0,0);

  // Validação para datas que não existem (ex: 31 de Fev)
  if (
    targetDate.getFullYear() !== year ||
    targetDate.getMonth() !== month - 1 ||
    targetDate.getDate() !== day
  ) {
    return null; 
  }

  // Validação baseada no modo
  if (mode === 'age' && targetDate > today) {
    return null; // Data de nascimento não pode ser no futuro
  }
  if (mode === 'event' && targetDate < today) {
    return null; // Data do evento não pode ser no passado
  }
  
  const startDate = mode === 'age' ? targetDate : today;
  const endDate = mode === 'age' ? today : targetDate;

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const prevMonthLastDay = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
