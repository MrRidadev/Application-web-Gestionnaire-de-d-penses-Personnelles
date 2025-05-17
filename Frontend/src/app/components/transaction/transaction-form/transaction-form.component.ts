import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction } from '../../../models/transaction.model';
import { TransactionService } from '../../../services/transaction.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnChanges {
  @Input() transaction?: Transaction;
  @Output() formSubmit = new EventEmitter<void>();
  @Output() formCancel = new EventEmitter<void>();

  model: Transaction = {
    categorie: '',
    date: '',
    description: '',
    montant: 0,
    budgetId: undefined
  };

  constructor(private transactionService: TransactionService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transaction'] && this.transaction) {
      this.model = { ...this.transaction };
    } else if (!this.transaction) {
      this.model = {
        categorie: '',
        date: '',
        description: '',
        montant: 0,
        budgetId: undefined
      };
    }
  }

  save(): void {
    if (this.model.id) {
      this.transactionService.updateTransaction(this.model).subscribe(() => this.formSubmit.emit());
    } else {
      this.transactionService.createTransaction(this.model).subscribe(() => this.formSubmit.emit());
    }
  }

  cancel(): void {
    this.formCancel.emit();
  }
}
