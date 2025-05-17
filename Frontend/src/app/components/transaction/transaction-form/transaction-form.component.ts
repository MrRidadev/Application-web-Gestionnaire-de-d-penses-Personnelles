import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { TransactionService } from '../services/transaction.service';
// @ts-ignore
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html'
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];
  transaction: Transaction = {
    montant: 0,
    description: '',
    date: '',
    categorie: ''
  };
  isEdit = false;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getAllTransactions().subscribe((data: Transaction[]) => {
      this.transactions = data;
    });
  }

  saveTransaction(): void {
    if (this.isEdit && this.transaction.id) {
      this.transactionService.updateTransaction(this.transaction).subscribe(() => {
        this.getTransactions();
        this.resetForm();
      });
    } else {
      this.transactionService.addTransaction(this.transaction).subscribe(() => {
        this.getTransactions();
        this.resetForm();
      });
    }
  }

  edit(t: Transaction): void {
    this.transaction = { ...t };
    this.isEdit = true;
  }

  delete(id: number): void {
    this.transactionService.deleteTransaction(id).subscribe(() => {
      this.getTransactions();
    });
  }

  resetForm(): void {
    this.transaction = { montant: 0, description: '', date: '', categorie: '' };
    this.isEdit = false;
  }
}
