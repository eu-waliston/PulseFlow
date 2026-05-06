export interface Patient {
  _id: string;
  codigo: number;
  nome: string;
  gravidade: number;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}