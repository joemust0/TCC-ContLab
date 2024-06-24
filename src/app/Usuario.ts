export interface Usuario {
  id: (number | null);
  nome: string;
  nickname?: string;
  email: string;
  senha: string;
  instituicao?: string;
  responsavel?: string;
}
