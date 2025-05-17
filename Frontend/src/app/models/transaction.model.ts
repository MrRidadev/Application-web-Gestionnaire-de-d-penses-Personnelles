export interface Transaction {
  id?: number;
  montant: number;
  description: string;
  date: string;
  categorie: string;
  budgetId?: number; // liaison avec budget
}
