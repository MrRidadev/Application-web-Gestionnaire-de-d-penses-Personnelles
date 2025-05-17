import { Routes } from '@angular/router';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/budgets', pathMatch: 'full' },


  { path: 'budgets', component: BudgetListComponent },
  { path: 'budgets/add', component: BudgetFormComponent },
  { path: 'budgets/edit/:id', component: BudgetFormComponent },


  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/add', component: TransactionFormComponent },
  { path: 'transactions/edit/:id', component: TransactionFormComponent },


  { path: '**', redirectTo: '/budgets' }
];
