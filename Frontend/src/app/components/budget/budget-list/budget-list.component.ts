import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget.model';
import {BudgetFormComponent} from '../budget-form/budget-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  imports: [
    BudgetFormComponent,
    CommonModule,
    FormsModule
  ],
  standalone: true,
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];
  selectedBudget?: Budget;
  newBudgetMode: boolean = false;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.loadBudgets();
  }

  loadBudgets(): void {
    this.budgetService.getAllBudgets().subscribe((data: Budget[]) => {
      this.budgets = data;
    });
  }

  deleteBudget(id?: number): void {
    if (id) {
      this.budgetService.deleteBudget(id).subscribe(() => this.loadBudgets());
    }
  }

  selectBudget(budget: Budget): void {
    this.selectedBudget = { ...budget };
    this.newBudgetMode = false;
  }

  selectBudgetForNew(): void {
    this.selectedBudget = undefined;
    this.newBudgetMode = true;
  }

  clearSelection(): void {
    this.selectedBudget = undefined;
    this.newBudgetMode = false;
    this.loadBudgets();
  }
}

