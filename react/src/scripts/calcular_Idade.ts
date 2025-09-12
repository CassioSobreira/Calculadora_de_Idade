import type { DataNascimento, Idade } from "./formatacao";

export function calcularIdade({ day, month, year }: DataNascimento): Idade | null {
  const dataNascimento = new Date(year, month - 1, day);
  const hoje = new Date();

  // Validação de data real
  if (
    dataNascimento.getFullYear() !== year ||
    dataNascimento.getMonth() !== month - 1 ||
    dataNascimento.getDate() !== day
  ) {
    return null;
  }

  let anos = hoje.getFullYear() - dataNascimento.getFullYear();
  let meses = hoje.getMonth() - dataNascimento.getMonth();
  let dias = hoje.getDate() - dataNascimento.getDate();

  if (meses < 0 || (meses === 0 && dias < 0)) {
    anos--;
    meses += 12;
  }

  if (dias < 0) {
    const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
    if (meses === 0) {
      meses = 11;
      anos--;
    } else {
      meses--;
    }
  }

  return { years: anos, months: meses, days: dias };
}

