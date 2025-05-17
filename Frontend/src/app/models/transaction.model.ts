export interface Transaction {
  id?: number;
  categorie: string;
  date: string;
  description: string;
  montant: number;
  budgetId?: number; // liaison avec budget
}
