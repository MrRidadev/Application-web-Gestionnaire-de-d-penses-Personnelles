import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnChanges {
  @Input() budget?: Budget;
  @Output() formSubmit = new EventEmitter<void>();

  formData: Budget = {
    nom: '',
    montantInitial: 0,
    montantActuel: 0
  };

  constructor(private budgetService: BudgetService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['budget'] && this.budget) {
      this.formData = { ...this.budget };
    }
  }

  onSubmit(): void {
    if (this.formData.id) {
      // Update
      this.budgetService.updateBudget(this.formData.id, this.formData).subscribe(() => {
        alert('Budget mis à jour!');
        this.formSubmit.emit();
      });
    } else {
      // Create
      this.budgetService.addBudget(this.formData).subscribe(() => {
        alert('Budget créé!');
        this.formSubmit.emit();
        this.formData = { nom: '', montantInitial: 0, montantActuel: 0 };
      });
    }
  }
}
