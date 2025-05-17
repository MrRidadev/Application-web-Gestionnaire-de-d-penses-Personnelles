import { Routes } from '@angular/router';
import { BudgetListComponent } from './components/budget/budget-list/budget-list.component';
import { BudgetFormComponent } from './components/budget/budget-form/budget-form.component';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './components/transaction/transaction-form/transaction-form.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },


  { path: 'budgets', component: BudgetListComponent },
  { path: 'budgets/add', component: BudgetFormComponent },
  { path: 'budgets/edit/:id', component: BudgetFormComponent },
  { path: 'accueil', component: HomeComponent },


  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/add', component: TransactionFormComponent },
  { path: 'transactions/edit/:id', component: TransactionFormComponent },


  { path: '**', redirectTo: '/budgets' }
];
