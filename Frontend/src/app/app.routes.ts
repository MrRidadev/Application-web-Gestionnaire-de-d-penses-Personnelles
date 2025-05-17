// @ts-ignore
import { Routes } from '@angular/router';
// @ts-ignore
import { BudgetListComponent } from './components/budget-list/budget-list.component';
// @ts-ignore
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
// @ts-ignore
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

// @ts-ignore
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
