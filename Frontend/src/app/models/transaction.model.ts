export interface Transaction {
  id?: number;
  categorie: string;
  date: string;
  description: string;
  mantant: number;
  budgetId?: number; // liaison avec budget
}
